-- Enneagram Sync Database Schema
-- Supports: profiles, quiz history, comparisons, sharing, analytics

-- ============================================
-- PROFILES TABLE
-- Stores user's Enneagram profile
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,

  -- Core Enneagram data
  core_type SMALLINT CHECK (core_type BETWEEN 1 AND 9),
  wing VARCHAR(3) CHECK (wing ~ '^[1-9]w[1-9]$'),
  instinct_stack VARCHAR(11) CHECK (instinct_stack ~ '^(sp|sx|so)/(sp|sx|so)/(sp|sx|so)$'),
  tritype VARCHAR(3) CHECK (tritype ~ '^[1-9]{3}$'),

  -- User notes
  notes TEXT[] DEFAULT '{}',

  -- Metadata
  display_name VARCHAR(100),
  avatar_url TEXT,
  is_public BOOLEAN DEFAULT false,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(user_id)
);

-- ============================================
-- QUIZ RESULTS TABLE
-- History of quiz attempts
-- ============================================
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,

  -- Quiz type
  quiz_type VARCHAR(20) NOT NULL CHECK (quiz_type IN ('core', 'wing', 'instinct', 'full')),

  -- Results
  result_type SMALLINT CHECK (result_type BETWEEN 1 AND 9),
  result_wing VARCHAR(3),
  result_instinct VARCHAR(11),

  -- Scores (stored as JSON for flexibility)
  type_scores JSONB,
  instinct_scores JSONB,

  -- Quiz metadata
  questions_answered INTEGER,
  duration_seconds INTEGER,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- SAVED COMPARISONS TABLE
-- User's saved type comparisons
-- ============================================
CREATE TABLE saved_comparisons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,

  type1 SMALLINT NOT NULL CHECK (type1 BETWEEN 1 AND 9),
  type2 SMALLINT NOT NULL CHECK (type2 BETWEEN 1 AND 9),

  label VARCHAR(100),
  notes TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(user_id, type1, type2)
);

-- ============================================
-- SHARED PROFILES TABLE
-- Publicly shared profiles with share links
-- ============================================
CREATE TABLE shared_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,

  -- Share link slug (e.g., /share/abc123)
  share_slug VARCHAR(20) UNIQUE NOT NULL,

  -- Snapshot of profile at time of sharing
  core_type SMALLINT CHECK (core_type BETWEEN 1 AND 9),
  wing VARCHAR(3),
  instinct_stack VARCHAR(11),
  tritype VARCHAR(3),
  display_name VARCHAR(100),

  -- Share settings
  is_active BOOLEAN DEFAULT true,
  expires_at TIMESTAMPTZ,
  view_count INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- FRIEND CONNECTIONS TABLE
-- For comparing profiles with friends
-- ============================================
CREATE TABLE friend_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  requester_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  addressee_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,

  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'blocked')),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(requester_id, addressee_id),
  CHECK (requester_id != addressee_id)
);

-- ============================================
-- ANALYTICS EVENTS TABLE
-- Usage tracking (anonymized)
-- ============================================
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  event_type VARCHAR(50) NOT NULL,
  event_data JSONB DEFAULT '{}',

  -- Session info
  session_id UUID,

  -- Context
  page_path VARCHAR(255),
  referrer VARCHAR(255),

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- AGGREGATE STATS TABLE (for analytics dashboard)
-- ============================================
CREATE TABLE type_statistics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Stats period
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,

  -- Type distribution
  type_counts JSONB NOT NULL DEFAULT '{}',
  wing_counts JSONB NOT NULL DEFAULT '{}',
  instinct_counts JSONB NOT NULL DEFAULT '{}',
  tritype_counts JSONB NOT NULL DEFAULT '{}',

  -- Totals
  total_profiles INTEGER DEFAULT 0,
  total_quizzes INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(period_start, period_end)
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_is_public ON profiles(is_public) WHERE is_public = true;
CREATE INDEX idx_profiles_core_type ON profiles(core_type);

CREATE INDEX idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX idx_quiz_results_created_at ON quiz_results(created_at DESC);

CREATE INDEX idx_saved_comparisons_user_id ON saved_comparisons(user_id);

CREATE INDEX idx_shared_profiles_slug ON shared_profiles(share_slug);
CREATE INDEX idx_shared_profiles_user_id ON shared_profiles(user_id);

CREATE INDEX idx_friend_connections_requester ON friend_connections(requester_id);
CREATE INDEX idx_friend_connections_addressee ON friend_connections(addressee_id);
CREATE INDEX idx_friend_connections_status ON friend_connections(status);

CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_comparisons ENABLE ROW LEVEL SECURITY;
ALTER TABLE shared_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE friend_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE type_statistics ENABLE ROW LEVEL SECURITY;

-- Profiles: users can read/write their own, read public profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view public profiles" ON profiles
  FOR SELECT USING (is_public = true);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own profile" ON profiles
  FOR DELETE USING (auth.uid() = user_id);

-- Quiz results: users can only access their own
CREATE POLICY "Users can view own quiz results" ON quiz_results
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz results" ON quiz_results
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own quiz results" ON quiz_results
  FOR DELETE USING (auth.uid() = user_id);

-- Saved comparisons: users can only access their own
CREATE POLICY "Users can view own comparisons" ON saved_comparisons
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own comparisons" ON saved_comparisons
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own comparisons" ON saved_comparisons
  FOR DELETE USING (auth.uid() = user_id);

-- Shared profiles: users manage their own, anyone can view active shares
CREATE POLICY "Anyone can view active shared profiles" ON shared_profiles
  FOR SELECT USING (is_active = true AND (expires_at IS NULL OR expires_at > NOW()));

CREATE POLICY "Users can manage own shared profiles" ON shared_profiles
  FOR ALL USING (auth.uid() = user_id);

-- Friend connections: users can see their own connections
CREATE POLICY "Users can view own connections" ON friend_connections
  FOR SELECT USING (auth.uid() = requester_id OR auth.uid() = addressee_id);

CREATE POLICY "Users can create connection requests" ON friend_connections
  FOR INSERT WITH CHECK (auth.uid() = requester_id);

CREATE POLICY "Users can update connections they're part of" ON friend_connections
  FOR UPDATE USING (auth.uid() = requester_id OR auth.uid() = addressee_id);

CREATE POLICY "Users can delete own connection requests" ON friend_connections
  FOR DELETE USING (auth.uid() = requester_id OR auth.uid() = addressee_id);

-- Analytics: users can insert their own events, no reads (admin only)
CREATE POLICY "Users can insert own analytics" ON analytics_events
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Type statistics: public read for aggregate stats
CREATE POLICY "Anyone can view type statistics" ON type_statistics
  FOR SELECT USING (true);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to generate share slug
CREATE OR REPLACE FUNCTION generate_share_slug()
RETURNS TEXT AS $$
DECLARE
  chars TEXT := 'abcdefghijklmnopqrstuvwxyz0123456789';
  result TEXT := '';
  i INTEGER;
BEGIN
  FOR i IN 1..8 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::integer, 1);
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER friend_connections_updated_at
  BEFORE UPDATE ON friend_connections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Function to increment share view count
CREATE OR REPLACE FUNCTION increment_share_views(slug TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE shared_profiles
  SET view_count = view_count + 1
  WHERE share_slug = slug AND is_active = true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
