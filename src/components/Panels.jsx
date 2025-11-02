import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Music, CalendarCheck2, Plane, BedDouble, Gamepad2, Download, Filter, Sparkles, User } from 'lucide-react';

const PanelWrapper = ({ tone, children }) => (
  <div className="relative">
    <div className={`absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-br ${tone}`} />
    <div className="relative z-10">{children}</div>
  </div>
);

const Card = ({ children, tone = 'from-white/10 to-white/5' }) => (
  <div className={`group bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-white/20 transition overflow-hidden relative`}> 
    <div className={`pointer-events-none absolute -inset-0.5 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r ${tone}`} />
    <div className="relative z-10">{children}</div>
  </div>
);

const ShopPanel = () => {
  const products = useMemo(() => [
    { id: 1, name: 'Nebula Headphones', price: '$129', tag: 'Hot', color: 'from-fuchsia-500 to-violet-500' },
    { id: 2, name: 'Quantum Smartwatch', price: '$199', tag: 'New', color: 'from-cyan-400 to-sky-500' },
    { id: 3, name: 'Stellar Phone 14', price: '$899', tag: 'Deal', color: 'from-emerald-500 to-teal-500' },
    { id: 4, name: 'Aurora Lamp', price: '$59', tag: 'Eco', color: 'from-amber-400 to-orange-500' },
  ], []);
  return (
    <PanelWrapper tone="from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-pink-300" />
          <h3 className="text-lg font-bold">Shop the Cosmos</h3>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-white/20 transition">
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <Card key={p.id} tone={`from-white/0 to-white/10`}>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-white/10 to-white/5 grid place-items-center">
              <Sparkles className="w-10 h-10 text-white/70" />
            </div>
            <div className="mt-3 flex items-start justify-between">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-white/70 text-sm">{p.price}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${p.color} text-white font-semibold`}>
                {p.tag}
              </span>
            </div>
            <button className="mt-3 w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">Add to cart</button>
          </Card>
        ))}
      </div>
    </PanelWrapper>
  );
};

const MusicPanel = () => {
  const tracks = useMemo(() => [
    { id: 1, title: 'Galactic Dreams', artist: 'LX-42', type: 'Non-Copyright', color: 'from-emerald-500 to-teal-400' },
    { id: 2, title: 'Holo Waves', artist: 'Neon Nova', type: 'Copyrighted', color: 'from-fuchsia-500 to-rose-500' },
    { id: 3, title: 'Quantum Drift', artist: 'Axiom', type: 'Non-Copyright', color: 'from-cyan-500 to-sky-500' },
  ], []);
  return (
    <PanelWrapper tone="from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Music className="w-5 h-5 text-emerald-300" />
          <h3 className="text-lg font-bold">Stream Everything</h3>
        </div>
        <div className="text-xs text-white/70">Try downloads for non-copyright tracks</div>
      </div>
      <div className="space-y-3">
        {tracks.map((t) => (
          <Card key={t.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{t.title}</p>
                <p className="text-white/70 text-sm">{t.artist}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${t.color} text-white font-semibold`}>
                  {t.type}
                </span>
                {t.type === 'Non-Copyright' ? (
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
                    <Download className="w-4 h-4" /> Download
                  </button>
                ) : (
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
                    <Sparkles className="w-4 h-4" /> Play
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PanelWrapper>
  );
};

const BookingPanel = () => {
  return (
    <PanelWrapper tone="from-amber-500/10 via-orange-500/10 to-rose-500/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center gap-2 mb-3">
            <Plane className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg font-bold">Flights & Shows</h3>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="From" />
            <input className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="To" />
            <input type="date" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
            <button className="px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold">Search</button>
          </form>
        </Card>
        <Card>
          <div className="flex items-center gap-2 mb-3">
            <BedDouble className="w-5 h-5 text-orange-300" />
            <h3 className="text-lg font-bold">Hotels & Dining</h3>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/40" placeholder="City" />
            <input type="date" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/40" />
            <input type="date" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/40" />
            <button className="px-3 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-black font-semibold">Reserve</button>
          </form>
        </Card>
      </div>
    </PanelWrapper>
  );
};

const GamePanel = () => {
  const passes = useMemo(() => [
    { id: 1, name: 'Nebula Pass', desc: 'All-access across 100+ cosmic titles', color: 'from-indigo-500 to-violet-600' },
    { id: 2, name: 'Quantum EA+', desc: 'Sports legends & story sagas', color: 'from-fuchsia-500 to-pink-600' },
    { id: 3, name: 'X-Cloud Ultimate', desc: 'Play anywhere with cloud saves', color: 'from-sky-500 to-cyan-500' },
  ], []);
  return (
    <PanelWrapper tone="from-indigo-500/10 via-violet-600/10 to-fuchsia-600/10">
      <div className="grid md:grid-cols-3 gap-4">
        {passes.map((g) => (
          <Card key={g.id}>
            <div className={`h-28 rounded-xl bg-gradient-to-br ${g.color} grid place-items-center text-white font-extrabold text-xl tracking-wide`}>{g.name}</div>
            <p className="mt-3 text-white/80 text-sm">{g.desc}</p>
            <button className="mt-3 w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">Explore</button>
          </Card>
        ))}
      </div>
    </PanelWrapper>
  );
};

const ProfilePanel = () => {
  return (
    <PanelWrapper tone="from-sky-500/10 via-cyan-500/10 to-indigo-500/10">
      <Card>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 grid place-items-center text-white">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Your Profile</h3>
            <p className="text-white/70 text-sm">Recent activities and utilities</p>
          </div>
        </div>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          <Card>
            <p className="text-sm text-white/70">Recent Orders</p>
            <p className="font-semibold mt-1">Nebula Headphones • Delivered</p>
          </Card>
          <Card>
            <p className="text-sm text-white/70">Music Downloads</p>
            <p className="font-semibold mt-1">Galactic Dreams • MP3</p>
          </Card>
          <Card>
            <p className="text-sm text-white/70">Upcoming Trip</p>
            <p className="font-semibold mt-1">NYC → Tokyo • 12 Dec</p>
          </Card>
        </div>
      </Card>
    </PanelWrapper>
  );
};

const panelsMap = {
  shop: <ShopPanel />,
  music: <MusicPanel />,
  book: <BookingPanel />,
  game: <GamePanel />,
  profile: <ProfilePanel />,
};

const Panels = ({ active, onSwipe }) => {
  return (
    <div className="relative">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              const threshold = 120;
              if (info.offset.x > threshold) onSwipe('right');
              else if (info.offset.x < -threshold) onSwipe('left');
            }}
            className="cursor-grab active:cursor-grabbing select-none"
          >
            <div className="py-6">
              {panelsMap[active]}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Panels;
