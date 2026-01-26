import { motion } from 'framer-motion';

export type ComparisonTab = 'overview' | 'dynamics' | 'growth' | 'stress';

interface TabInfo {
  id: ComparisonTab;
  label: string;
  icon: React.ReactNode;
}

interface TabNavigationProps {
  activeTab: ComparisonTab;
  onTabChange: (tab: ComparisonTab) => void;
}

export function TabNavigation({
  activeTab,
  onTabChange
}: TabNavigationProps) {
  const tabs: TabInfo[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 'dynamics',
      label: 'Dynamics',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'growth',
      label: 'Growth',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 'stress',
      label: 'Under Stress',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
      <nav className="flex gap-1 overflow-x-auto pb-px -mb-px scrollbar-hide" aria-label="Comparison sections">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap
                transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500
                ${isActive
                  ? 'text-charcoal dark:text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={isActive ? 'text-terracotta-600 dark:text-terracotta-400' : ''}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-600 dark:bg-terracotta-400"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
