import React from 'react';

const TABS = [
  { key: 'shop', label: 'Shop', color: 'from-pink-500 to-rose-500' },
  { key: 'music', label: 'Music', color: 'from-emerald-500 to-teal-400' },
  { key: 'book', label: 'Book', color: 'from-amber-500 to-orange-500' },
  { key: 'game', label: 'Game', color: 'from-indigo-500 to-violet-500' },
  { key: 'profile', label: 'Profile', color: 'from-sky-500 to-cyan-400' },
];

const Tabs = ({ active, onChange }) => {
  return (
    <div className="sticky top-0 z-20 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center overflow-x-auto no-scrollbar py-3 gap-2">
          {TABS.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => onChange(t.key)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/30 whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-white bg-white/5'
                }`}
              >
                <span className="relative z-10">{t.label}</span>
                {isActive && (
                  <span
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${t.color} shadow-lg shadow-black/30`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
export { TABS };
