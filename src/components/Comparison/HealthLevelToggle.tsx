import type { HealthState } from '../../types';

export type HealthView = HealthState;

interface HealthLevelToggleProps {
  value: HealthView;
  onChange: (view: HealthView) => void;
}

const healthViewConfig: { id: HealthView; label: string; description: string }[] = [
  {
    id: 'healthy',
    label: 'At Their Best',
    description: 'Levels 1-3: Integration and growth'
  },
  {
    id: 'average',
    label: 'Average Day',
    description: 'Levels 4-6: Normal functioning'
  },
  {
    id: 'unhealthy',
    label: 'Under Pressure',
    description: 'Levels 7-9: Stress and disintegration'
  }
];

function HealthIcon({ id }: { id: HealthView }) {
  if (id === 'healthy') {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    );
  }
  if (id === 'average') {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

export function HealthLevelToggle({ value, onChange }: HealthLevelToggleProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {healthViewConfig.map((config) => {
          const isSelected = value === config.id;
          return (
            <button
              key={config.id}
              onClick={() => onChange(config.id)}
              title={config.description}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${isSelected
                  ? config.id === 'healthy'
                    ? 'bg-green-500 text-white shadow-md'
                    : config.id === 'average'
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-red-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }
              `}
            >
              <HealthIcon id={config.id} />
              <span>{config.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface HealthLevelCardProps {
  typeNumber: number;
  level: {
    level: number;
    title: string;
    description: string;
    characteristics: string[];
    innerExperience: string;
  };
  centerColor: string;
}

export function HealthLevelCard({ typeNumber, level, centerColor }: HealthLevelCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-600">
      <div
        className="px-4 py-3 text-white flex items-center justify-between"
        style={{ backgroundColor: centerColor }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">{typeNumber}</span>
          <span className="text-sm opacity-90">Level {level.level}</span>
        </div>
        <span className="font-medium text-sm">{level.title}</span>
      </div>
      <div className="p-4 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {level.description}
        </p>
        <div>
          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
            Key Characteristics
          </h5>
          <ul className="flex flex-wrap gap-2">
            {level.characteristics.map((char, i) => (
              <li
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
              >
                {char}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
            Inner Experience
          </h5>
          <p className="text-sm italic text-gray-600 dark:text-gray-400">
            "{level.innerExperience}"
          </p>
        </div>
      </div>
    </div>
  );
}
