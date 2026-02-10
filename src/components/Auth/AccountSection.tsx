import { useState } from 'react';
import { useAuth, useSharing, useSupabaseSync } from '../../hooks';
import { AuthModal } from './AuthModal';
import type { Profile } from '../../lib/supabase';

interface AccountSectionProps {
  localProfile: {
    coreType: number;
    wing: string;
    instinctStack: string;
    tritype?: string;
  } | null;
}

export function AccountSection({ localProfile }: AccountSectionProps) {
  const { user, signOut, loading: authLoading } = useAuth();
  const { isAuthenticated, isSyncing, pushToCloud } = useSupabaseSync();
  const { createShareLink, getUserShareLinks, loading: shareLoading } = useSharing();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [shareLinks, setShareLinks] = useState<Awaited<ReturnType<typeof getUserShareLinks>>>([]);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [newShareLink, setNewShareLink] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleCreateShareLink = async () => {
    if (!localProfile) return;

    const link = await createShareLink({
      id: '',
      user_id: user?.id || '',
      core_type: localProfile.coreType,
      wing: localProfile.wing,
      instinct_stack: localProfile.instinctStack,
      tritype: localProfile.tritype || null,
      notes: null,
      display_name: null,
      avatar_url: null,
      is_public: false,
      created_at: null,
      updated_at: null,
    } as Profile);

    if (link) {
      setNewShareLink(link);
    }
  };

  const handleCopyLink = async () => {
    if (newShareLink) {
      await navigator.clipboard.writeText(newShareLink);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleViewShareLinks = async () => {
    const links = await getUserShareLinks();
    setShareLinks(links);
    setShowShareLinks(true);
  };

  if (!isAuthenticated) {
    return (
      <>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-terracotta-600 dark:text-terracotta-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Sync Your Profile</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Sign in to save your Enneagram profile to the cloud. Access it from any device and share with friends.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-4 py-2 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-lg transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </>
    );
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-6">
        {/* Account Info */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Signed In</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            disabled={authLoading}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Sign Out
          </button>
        </div>

        {/* Sync Status */}
        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          {isSyncing ? (
            <>
              <svg className="animate-spin w-5 h-5 text-terracotta-500" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">Syncing...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">Profile synced to cloud</span>
              <button
                onClick={pushToCloud}
                className="ml-auto text-xs text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400"
              >
                Sync Now
              </button>
            </>
          )}
        </div>

        {/* Share Profile */}
        {localProfile && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Share Your Profile</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Create a shareable link so friends can see your Enneagram type.
            </p>

            {newShareLink ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                  <input
                    type="text"
                    readOnly
                    value={newShareLink}
                    className="flex-1 bg-transparent text-sm text-emerald-700 dark:text-emerald-300 outline-none"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition-colors"
                  >
                    {copySuccess ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <button
                  onClick={() => setNewShareLink(null)}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400"
                >
                  Create another link
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCreateShareLink}
                  disabled={shareLoading}
                  className="px-4 py-2 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {shareLoading ? 'Creating...' : 'Create Share Link'}
                </button>
                <button
                  onClick={handleViewShareLinks}
                  className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors"
                >
                  View All Links
                </button>
              </div>
            )}

            {/* Share Links List */}
            {showShareLinks && shareLinks.length > 0 && (
              <div className="mt-4 space-y-2">
                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Share Links</h5>
                {shareLinks.map((link) => (
                  <div
                    key={link.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div>
                      <code className="text-sm text-gray-600 dark:text-gray-400">
                        /share/{link.share_slug}
                      </code>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {link.view_count} views · {link.is_active ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
