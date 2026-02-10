import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = 'login' | 'signup' | 'forgot';

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { signInWithEmail, signUpWithEmail, signInWithGoogle, signInWithApple, resetPassword, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (mode === 'login') {
      const { error } = await signInWithEmail(email, password);
      if (error) {
        setError(error.message);
      } else {
        onClose();
      }
    } else if (mode === 'signup') {
      const { error } = await signUpWithEmail(email, password);
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Check your email for a confirmation link!');
      }
    } else if (mode === 'forgot') {
      const { error } = await resetPassword(email);
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Password reset email sent!');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    const { error } = await signInWithGoogle();
    if (error) {
      setError(error.message);
    }
  };

  const handleAppleSignIn = async () => {
    setError(null);
    const { error } = await signInWithApple();
    if (error) {
      setError(error.message);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(null);
  };

  const switchMode = (newMode: AuthMode) => {
    resetForm();
    setMode(newMode);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md z-50"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-charcoal dark:bg-gray-900 px-6 py-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-serif font-bold text-white">
                    {mode === 'login' ? 'Welcome Back' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 text-cream-300 hover:text-white hover:bg-charcoal-light/30 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-cream-300 text-sm mt-1">
                  {mode === 'login'
                    ? 'Sign in to sync your profile across devices'
                    : mode === 'signup'
                    ? 'Join to save your Enneagram journey'
                    : 'Enter your email to reset your password'}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Social Logins */}
                {mode !== 'forgot' && (
                  <>
                    <div className="space-y-3">
                      <button
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-200 font-medium">Continue with Google</span>
                      </button>

                      <button
                        onClick={handleAppleSignIn}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <span className="font-medium">Continue with Apple</span>
                      </button>
                    </div>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200 dark:border-gray-600" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">or</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  {mode !== 'forgot' && (
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                  )}

                  {mode === 'signup' && (
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={6}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                  )}

                  {error && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  {success && (
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">{success}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-xl shadow-warm hover:shadow-warm-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing...
                      </span>
                    ) : mode === 'login' ? (
                      'Sign In'
                    ) : mode === 'signup' ? (
                      'Create Account'
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>
                </form>

                {/* Mode Switchers */}
                <div className="mt-6 text-center text-sm">
                  {mode === 'login' && (
                    <>
                      <button
                        onClick={() => switchMode('forgot')}
                        className="text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300"
                      >
                        Forgot password?
                      </button>
                      <p className="mt-3 text-gray-500 dark:text-gray-400">
                        Don't have an account?{' '}
                        <button
                          onClick={() => switchMode('signup')}
                          className="text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 font-medium"
                        >
                          Sign up
                        </button>
                      </p>
                    </>
                  )}
                  {mode === 'signup' && (
                    <p className="text-gray-500 dark:text-gray-400">
                      Already have an account?{' '}
                      <button
                        onClick={() => switchMode('login')}
                        className="text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 font-medium"
                      >
                        Sign in
                      </button>
                    </p>
                  )}
                  {mode === 'forgot' && (
                    <button
                      onClick={() => switchMode('login')}
                      className="text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 font-medium"
                    >
                      Back to sign in
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
