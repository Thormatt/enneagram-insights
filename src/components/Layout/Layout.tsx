import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-cream-100 dark:bg-gray-950 transition-colors">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <nav className="hidden lg:block" aria-label="Type navigation">
          <Sidebar />
        </nav>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: 'tween', duration: 0.1 }}
                className="fixed left-0 top-0 bottom-0 z-50 lg:hidden"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between p-4 bg-cream-100 dark:bg-gray-900 border-b border-warm-border dark:border-gray-700">
                    <span className="font-serif font-semibold text-charcoal dark:text-white">Navigation</span>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 text-charcoal-muted hover:text-charcoal dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-cream-200 dark:hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <Sidebar onSelectType={() => setSidebarOpen(false)} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <main className="flex-1 overflow-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
