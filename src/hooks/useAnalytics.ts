import { useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

type EventType =
  | 'page_view'
  | 'quiz_started'
  | 'quiz_completed'
  | 'type_viewed'
  | 'comparison_viewed'
  | 'comparison_saved'
  | 'profile_shared'
  | 'share_viewed'
  | 'tritype_explored'
  | 'scenario_completed';

interface EventData {
  [key: string]: string | number | boolean | null;
}

interface UseAnalyticsReturn {
  trackEvent: (eventType: EventType, eventData?: EventData) => void;
  trackPageView: (path: string) => void;
}

export function useAnalytics(): UseAnalyticsReturn {
  const { user } = useAuth();
  const sessionId = useRef<string>(getOrCreateSessionId());

  const trackEvent = useCallback(
    (eventType: EventType, eventData: EventData = {}) => {
      // Fire and forget - don't await
      supabase
        .from('analytics_events')
        .insert({
          user_id: user?.id ?? null,
          event_type: eventType,
          event_data: eventData,
          session_id: sessionId.current,
          page_path: window.location.pathname,
          referrer: document.referrer || null,
        })
        .then(({ error }) => {
          if (error) {
            console.warn('Analytics event failed:', error.message);
          }
        });
    },
    [user]
  );

  const trackPageView = useCallback(
    (path: string) => {
      trackEvent('page_view', { path });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
  };
}

// Session management
function getOrCreateSessionId(): string {
  const SESSION_KEY = 'enneagram_session_id';
  const SESSION_EXPIRY_KEY = 'enneagram_session_expiry';
  const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

  const now = Date.now();
  const storedExpiry = sessionStorage.getItem(SESSION_EXPIRY_KEY);
  const storedSession = sessionStorage.getItem(SESSION_KEY);

  if (storedSession && storedExpiry && parseInt(storedExpiry) > now) {
    // Extend session
    sessionStorage.setItem(SESSION_EXPIRY_KEY, String(now + SESSION_DURATION));
    return storedSession;
  }

  // Create new session
  const newSessionId = crypto.randomUUID();
  sessionStorage.setItem(SESSION_KEY, newSessionId);
  sessionStorage.setItem(SESSION_EXPIRY_KEY, String(now + SESSION_DURATION));
  return newSessionId;
}
