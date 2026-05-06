'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

const DUOLINGO_LAUNCH_DATE = '2012-06-19';

const trophyMilestones = [
  { days: 7, name: 'First Steps', emoji: '🚶' },
  { days: 14, name: 'Breaking Chains', emoji: '⛓️‍💥' },
  { days: 30, name: 'One Month Free', emoji: '🎉' },
  { days: 50, name: "Duo's Nightmare", emoji: 'NIGHTMARE_DUO' },
  { days: 100, name: 'Century of Freedom', emoji: '💯' },
  { days: 200, name: 'The Lockout', emoji: '🔒' },
  { days: 365, name: 'One Year Free', emoji: '🎂' },
  { days: 500, name: 'Duo Fugitive', emoji: '🏃' },
  { days: 730, name: 'Two Years Free', emoji: '🎊' },
  { days: 1000, name: 'Freedom Legend', emoji: '🌟' },
  { days: 1500, name: 'Duo Hunter', emoji: '🏹' },
  { days: 2000, name: 'Freedom Warrior', emoji: '🗡️' },
  { days: 2500, name: 'Duo Vanquisher', emoji: '👊' },
  { days: 3000, name: 'Duo Obliterator', emoji: '💀' },
  { days: 3500, name: 'Beyond Duo', emoji: '🌌' },
  { days: 4000, name: 'Duo-Proof Soul', emoji: '🛡️' },
  { days: 4500, name: 'Duo Slayer', emoji: '⚔️' },
  { days: 5000, name: 'Enjoy the roasted bird', emoji: 'ROASTED_DUO' },
];

const GREEN_BIRD_FILTER = 'hue-rotate(100deg) saturate(2.2) brightness(0.95)';

function DuoBirdLogo({ size = 64 }: { size?: number }) {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <span className="relative" style={{ fontSize: size * 0.75, lineHeight: 1, filter: GREEN_BIRD_FILTER }}>🦉</span>
      <svg
        className="absolute"
        style={{ width: size * 0.45, height: size * 0.45 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF4757"
        strokeWidth="3.5"
        strokeLinecap="round"
      >
        <line x1="4" y1="4" x2="20" y2="20" />
        <line x1="20" y1="4" x2="4" y2="20" />
      </svg>
    </div>
  );
}

function DuoBirdLarge() {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: 80, height: 80 }}>
      <span className="relative" style={{ fontSize: 64, lineHeight: 1, filter: GREEN_BIRD_FILTER }}>🦉</span>
      <svg
        className="absolute"
        style={{ width: 36, height: 36 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF4757"
        strokeWidth="4"
        strokeLinecap="round"
      >
        <line x1="4" y1="4" x2="20" y2="20" />
        <line x1="20" y1="4" x2="4" y2="20" />
      </svg>
    </div>
  );
}

function RoastedDuoBird({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Plate */}
      <ellipse cx="24" cy="38" rx="21" ry="7" fill="#A5D6A7" />
      <ellipse cx="24" cy="37" rx="19" ry="6" fill="#C8E6C9" />
      {/* Main body - no head, just a cooked carcass */}
      <ellipse cx="24" cy="26" rx="15" ry="11" fill="#388E3C" />
      {/* Crispy darker patches */}
      <ellipse cx="20" cy="28" rx="8" ry="5" fill="#2E7D32" opacity="0.4" />
      <ellipse cx="28" cy="24" rx="6" ry="4" fill="#2E7D32" opacity="0.3" />
      {/* Glaze highlight */}
      <ellipse cx="22" cy="22" rx="7" ry="4" fill="#66BB6A" opacity="0.5" />
      <ellipse cx="26" cy="20" rx="3" ry="2" fill="#81C784" opacity="0.4" />
      {/* Wing - cooked flat */}
      <ellipse cx="30" cy="28" rx="7" ry="4" fill="#43A047" transform="rotate(-10 30 28)" />
      {/* Left drumstick bone */}
      <rect x="10" y="30" width="3" height="12" rx="1.5" fill="#E8F5E9" transform="rotate(-15 12 36)" />
      <circle cx="9" cy="41" r="2.5" fill="white" />
      {/* Right drumstick bone */}
      <rect x="35" y="30" width="3" height="12" rx="1.5" fill="#E8F5E9" transform="rotate(15 36 36)" />
      <circle cx="39" cy="41" r="2.5" fill="white" />
      {/* Neck cavity - dark hole where head was chopped */}
      <ellipse cx="13" cy="23" rx="3" ry="3" fill="#1B5E20" />
      <ellipse cx="13" cy="22" rx="2" ry="1.5" fill="#0D3B0D" />
      {/* Tail end nub */}
      <ellipse cx="37" cy="22" rx="3" ry="4" fill="#43A047" transform="rotate(20 37 22)" />
      {/* Steam rising */}
      <path d="M18,14 Q16,10 18,6" stroke="#81C784" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M24,12 Q22,8 24,4" stroke="#81C784" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M30,14 Q28,10 30,6" stroke="#81C784" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Herb garnish dots */}
      <circle cx="14" cy="32" r="1.5" fill="#81C784" />
      <circle cx="12" cy="34" r="1" fill="#A5D6A7" />
      <circle cx="34" cy="33" r="1.5" fill="#81C784" />
    </svg>
  );
}

function NightmareDuoBird() {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: 44, height: 44 }}>
      <div
        className="absolute rounded-full"
        style={{
          width: 40,
          height: 40,
          background: 'linear-gradient(145deg, #1A1A2E 0%, #16213E 50%, #0F0F23 100%)',
          boxShadow: '0 0 12px rgba(255, 235, 59, 0.6), 0 2px 8px rgba(0,0,0,0.5)',
        }}
      />
      {/* Black bird */}
      <span className="relative" style={{ fontSize: 26, lineHeight: 1, filter: 'brightness(0) saturate(0)' }}>🦉</span>
      {/* Lightning bolt left */}
      <svg className="absolute" style={{ width: 12, height: 18, top: 2, left: -4 }} viewBox="0 0 24 36" fill="none">
        <path d="M14,0 L6,16 L12,16 L8,36 L20,14 L14,14 L18,0 Z" fill="#FFEB3B" />
        <path d="M14,0 L6,16 L12,16 L8,36 L20,14 L14,14 L18,0 Z" fill="url(#nightGlow)" />
        <defs>
          <radialGradient id="nightGlow">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="100%" stopColor="#FFEB3B" />
          </radialGradient>
        </defs>
      </svg>
      {/* Lightning bolt right */}
      <svg className="absolute" style={{ width: 10, height: 14, bottom: 4, right: -3 }} viewBox="0 0 24 36" fill="none">
        <path d="M16,0 L8,14 L13,14 L6,36 L22,12 L16,12 L22,0 Z" fill="#FFEB3B" opacity="0.8" />
      </svg>
      {/* Electric sparks */}
      <svg className="absolute" style={{ width: 44, height: 44, pointerEvents: 'none' }} viewBox="0 0 44 44" fill="none">
        <circle cx="8" cy="10" r="1.5" fill="#FFEB3B" opacity="0.7" />
        <circle cx="36" cy="14" r="1" fill="#FFF9C4" opacity="0.6" />
        <circle cx="10" cy="36" r="1" fill="#FFEB3B" opacity="0.5" />
        <circle cx="34" cy="34" r="1.5" fill="#FFF9C4" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function DuoVictims() {
  const [user, setUser] = useState<null | {
    username: string;
    stopDate: string;
    createdAt: string;
    broken: boolean;
  }>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('streakUser');
    if (saved) {
      try { return JSON.parse(saved); } catch { return null; }
    }
    return null;
  });
  const [username, setUsername] = useState('');
  const [stopDate, setStopDate] = useState('');
  const [todayChecked, setTodayChecked] = useState(() => {
    if (typeof window === 'undefined') return false;
    const lastCheck = localStorage.getItem('lastCheckDate');
    const today = new Date().toISOString().split('T')[0];
    return lastCheck === today;
  });
  const [notificationActive, setNotificationActive] = useState(false);
  const [dateError, setDateError] = useState('');
  const [justCheckedIn, setJustCheckedIn] = useState(false);

  const streakBroken = user?.broken === true;

  useEffect(() => {
    if (!todayChecked && user && !streakBroken) {
      const checkTime = new Date();
      checkTime.setHours(9, 0, 0, 0);
      const now = new Date();
      const timeDiff = checkTime.getTime() - now.getTime();
      if (timeDiff > 0 && timeDiff < 3600000) {
        const id = requestAnimationFrame(() => setNotificationActive(true));
        return () => cancelAnimationFrame(id);
      }
    }
  }, [user, todayChecked, streakBroken]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNotificationActive(prev => {
        const lastCheck = localStorage.getItem('lastCheckDate');
        const today = new Date().toISOString().split('T')[0];
        if (lastCheck === today) return false;
        return true;
      });
    }, 3600000);
    return () => clearInterval(timer);
  }, []);

  const calculateStreak = (fromDate: string) => {
    if (!fromDate || streakBroken) return 0;
    const start = new Date(fromDate);
    const today = new Date();
    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setDateError('');

    if (!username.trim() || !stopDate) {
      setDateError('Please fill in all fields');
      return;
    }

    const selectedDate = new Date(stopDate);
    const minDate = new Date(DUOLINGO_LAUNCH_DATE);
    const today = new Date();

    if (selectedDate < minDate) {
      setDateError('Duolingo wasn\'t created until June 19, 2012! 🦉');
      return;
    }

    if (selectedDate > today) {
      setDateError('You can\'t pick a future date! 📅');
      return;
    }

    const userData = {
      username: username.trim(),
      stopDate,
      createdAt: new Date().toISOString(),
      broken: false,
    };
    setUser(userData);
    localStorage.setItem('streakUser', JSON.stringify(userData));
    setUsername('');
    setStopDate('');
    setDateError('');
    const lastCheck = localStorage.getItem('lastCheckDate');
    const todayStr = new Date().toISOString().split('T')[0];
    if (lastCheck === todayStr) setTodayChecked(true);
  };

  const handleCheckIn = (keepAlive: boolean) => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('lastCheckDate', today);

    if (!keepAlive && user) {
      const userData = { ...user, broken: true };
      setUser(userData);
      localStorage.setItem('streakUser', JSON.stringify(userData));
    }

    setTodayChecked(true);
    setNotificationActive(false);
    setJustCheckedIn(true);
  };

  const handleReset = () => {
    localStorage.removeItem('streakUser');
    localStorage.removeItem('lastCheckDate');
    setUser(null);
    setUsername('');
    setStopDate('');
    setTodayChecked(false);
    setJustCheckedIn(false);
    setNotificationActive(false);
  };

  // ─── SIGNUP PAGE ────────────────────────────────────────────────
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6"
        style={{
          background: 'linear-gradient(145deg, #FFF5F0 0%, #FFE8E0 40%, #FFF0F0 100%)',
        }}
      >
        <style>{`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .float-anim { animation: float 3s ease-in-out infinite; }
        `}</style>

        <div
          className="w-full max-w-[440px] rounded-[28px] p-8 sm:p-10"
          style={{
            background: '#FFFFFF',
            boxShadow: '0 20px 60px rgba(255, 71, 87, 0.1), 0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          {/* Logo */}
          <div className="text-center mb-6 float-anim">
            <DuoBirdLarge />
          </div>

          {/* Title */}
          <h1
            className="text-center mb-3"
            style={{
              fontSize: 'clamp(28px, 6vw, 36px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
            }}
          >
            DuoVictims
          </h1>

          {/* Tagline */}
          <p
            className="text-center mb-8 px-2"
            style={{
              color: '#888',
              fontSize: '13px',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Forget your Duolingo streak, Uninstall that annoying bird and Set yourself free.
          </p>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <Label
                htmlFor="username"
                className="block mb-2"
                style={{ color: '#FF4757', fontSize: '14px', fontWeight: 600 }}
              >
                What&apos;s your name?
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name..."
                className="h-12 rounded-2xl border-2 px-4 text-[15px] font-medium transition-all duration-300 focus:ring-0 focus:outline-none"
                style={{
                  borderColor: '#FFE0E0',
                  background: '#FFF8F5',
                  color: '#333',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#FF4757';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 71, 87, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#FFE0E0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            <div>
              <Label
                htmlFor="freedomDate"
                className="block mb-2"
                style={{ color: '#FF4757', fontSize: '14px', fontWeight: 600 }}
              >
                When was the day of your freedom?
              </Label>
              <Input
                id="freedomDate"
                type="date"
                value={stopDate}
                onChange={(e) => setStopDate(e.target.value)}
                min={DUOLINGO_LAUNCH_DATE}
                className="h-12 rounded-2xl border-2 px-4 text-[15px] font-medium transition-all duration-300 focus:ring-0 focus:outline-none"
                style={{
                  borderColor: '#FFE0E0',
                  background: '#FFF8F5',
                  color: '#333',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#FF4757';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 71, 87, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#FFE0E0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            {dateError && (
              <div
                className="rounded-2xl p-3 text-center"
                style={{
                  background: '#FFE8E8',
                  border: '2px solid #FFB3B3',
                  color: '#FF4757',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                {dateError}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-[52px] rounded-2xl text-[16px] font-bold text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)',
                boxShadow: '0 8px 24px rgba(255, 71, 87, 0.35)',
                border: 'none',
              }}
            >
              Taste the Freedom! 🚀
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // ─── DASHBOARD PAGE ─────────────────────────────────────────────
  const currentStreak = calculateStreak(user.stopDate);
  const nextMilestone = trophyMilestones.find((m) => m.days > currentStreak);
  const nextMilestoneDays = nextMilestone ? nextMilestone.days : 5000;
  const progressPercent = Math.min(100, (currentStreak / nextMilestoneDays) * 100);
  const achievedMilestones = trophyMilestones.filter((m) => m.days <= currentStreak);

  const formattedDate = new Date(user.stopDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className="min-h-screen p-4 pt-[max(1rem,env(safe-area-inset-top))] sm:p-6 sm:pt-6 pb-[max(2rem,env(safe-area-inset-bottom))]"
      style={{
        background: 'linear-gradient(145deg, #FFF5F0 0%, #FFE8E0 40%, #FFF0F0 100%)',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(255, 71, 87, 0.15); } 50% { box-shadow: 0 0 40px rgba(255, 71, 87, 0.3); } }
        @keyframes trophyPop { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.05); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes checkPulse { 0% { transform: scale(1); } 50% { transform: scale(1.15); } 100% { transform: scale(1); } }
        .float-anim { animation: float 3s ease-in-out infinite; }
        .glow-anim { animation: glow 2s ease-in-out infinite; }
        .trophy-pop { animation: trophyPop 0.5s ease-out forwards; opacity: 0; }
        .check-pulse { animation: checkPulse 0.4s ease-in-out; }

        .duo-progress [data-slot="indicator"] {
          background: linear-gradient(90deg, #FF4757 0%, #FF6348 100%) !important;
          border-radius: 9999px !important;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .trophy-scroll::-webkit-scrollbar { height: 4px; }
        .trophy-scroll::-webkit-scrollbar-track { background: transparent; }
        .trophy-scroll::-webkit-scrollbar-thumb { background: #4CAF50; border-radius: 999px; }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(30%) sepia(100%) saturate(3000%) hue-rotate(-10deg);
          cursor: pointer;
        }
      `}</style>

      <div className="max-w-[700px] mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-8">
          <div className="mb-3 float-anim">
            <DuoBirdLogo size={48} />
          </div>
          <h1
            className="mb-1"
            style={{
              fontSize: 'clamp(26px, 5vw, 34px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
            }}
          >
            {user.username} is free since {formattedDate}
          </h1>
          <p style={{ color: '#999', fontSize: '14px', fontWeight: 500 }}>
            {streakBroken ? '💔 The streak has ended...' : 'Duolingo is crying somewhere'}
          </p>
        </div>

        {/* ── Main Streak Display ── */}
        <div
          className="rounded-[28px] py-12 px-6 text-center mb-6 relative overflow-hidden glow-anim"
          style={{
            background: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)',
            border: '3px solid #FF8A7A',
            boxShadow: '0 20px 60px rgba(255, 71, 87, 0.2)',
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6), transparent)' }}
          />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.5), transparent)' }}
          />

          <div className="relative z-10">
            <p className="text-white/80 text-sm font-semibold mb-2 uppercase tracking-wider">
              Days of Freedom
            </p>
            <div
              className="font-extrabold mb-3"
              style={{
                fontSize: 'clamp(72px, 15vw, 100px)',
                lineHeight: 1,
                color: '#FFFFFF',
                textShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
            >
              {currentStreak}
            </div>
            <p className="text-white/90 text-base font-semibold">
              {streakBroken
                ? '💔 Time for a fresh start!'
                : justCheckedIn
                ? '✅ Checked in! Keep the freedom going.'
                : '✨ Keep the freedom going.'}
            </p>
          </div>
        </div>

        {/* ── Daily Check-in ── */}
        {notificationActive && !todayChecked && !streakBroken && (
          <div
            className="rounded-[24px] p-5 mb-6"
            style={{
              background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
              border: '2px solid #FFB74D',
              boxShadow: '0 12px 40px rgba(255, 183, 77, 0.2)',
            }}
          >
            <div className="mb-4">
              <p className="font-bold text-base mb-1" style={{ color: '#E65100' }}>
                ⏰ Daily Check-In!
              </p>
              <p className="text-sm font-medium" style={{ color: '#BF360C' }}>
                Still dodging Duolingo?
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => handleCheckIn(true)}
                className="flex-1 h-12 rounded-2xl text-[15px] font-bold text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)',
                  boxShadow: '0 6px 18px rgba(255, 71, 87, 0.3)',
                  border: 'none',
                }}
              >
                Yes! 🔥
              </Button>
              <Button
                onClick={() => handleCheckIn(false)}
                className="flex-1 h-12 rounded-2xl text-[15px] font-bold transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  color: '#E65100',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                }}
              >
                Oops... 😅
              </Button>
            </div>
          </div>
        )}

        {/* Today already checked */}
        {todayChecked && !streakBroken && !notificationActive && (
          <div
            className="rounded-[24px] p-4 mb-6 flex items-center justify-center gap-2 check-pulse"
            style={{
              background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
              border: '2px solid #A5D6A7',
            }}
          >
            <span style={{ fontSize: '20px' }}>✅</span>
            <span className="font-semibold text-sm" style={{ color: '#2E7D32' }}>
              Checked in today! See you tomorrow.
            </span>
          </div>
        )}

        {/* ── Streak Broken ── */}
        {streakBroken && (
          <div
            className="rounded-[24px] p-6 mb-6 text-center"
            style={{
              background: 'linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%)',
              border: '2px solid #EF9A9A',
              boxShadow: '0 12px 40px rgba(255, 71, 87, 0.12)',
            }}
          >
            <p className="font-bold text-base mb-1" style={{ color: '#C62828' }}>
              💔 We all slip sometimes...
            </p>
            <p className="text-sm mb-4" style={{ color: '#D32F2F', fontWeight: 500 }}>
              The streak is gone, but your progress lives on!
            </p>
            <Button
              onClick={handleReset}
              className="h-11 px-8 rounded-2xl text-[14px] font-bold text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)',
                boxShadow: '0 6px 18px rgba(255, 71, 87, 0.3)',
                border: 'none',
              }}
            >
              Start Fresh 🌱
            </Button>
          </div>
        )}

        {/* ── Trophy Cabinet ── */}
        {achievedMilestones.length > 0 && (
          <div
            className="rounded-[24px] p-5 sm:p-6 mb-6"
            style={{
              background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 40%, #388E3C 100%)',
              border: '3px solid #4CAF50',
              boxShadow: '0 12px 40px rgba(27, 94, 32, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <h3
              className="text-center mb-5"
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#E8F5E9',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}
            >
              🏆 Trophy Cabinet
            </h3>

            <div className="trophy-scroll overflow-x-auto pb-2">
              <div className="flex gap-3 min-w-max px-1">
                {achievedMilestones.map((mile, idx) => (
                  <div
                    key={mile.days}
                    className="trophy-pop flex-shrink-0 rounded-2xl p-3 text-center min-w-[90px]"
                    style={{
                      background: 'linear-gradient(145deg, #2E7D32 0%, #1B5E20 100%)',
                      border: '2px solid #66BB6A',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                      animationDelay: `${idx * 0.08}s`,
                    }}
                  >
                    <div className="mb-1.5 flex justify-center">
                      {mile.emoji === 'ROASTED_DUO' ? <RoastedDuoBird />
                        : mile.emoji === 'NIGHTMARE_DUO' ? <NightmareDuoBird />
                        : <span className="text-3xl">{mile.emoji}</span>}
                    </div>
                    <div className="font-bold text-sm" style={{ color: '#C8E6C9' }}>
                      {mile.days}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: '#A5D6A7', fontWeight: 500 }}>
                      {mile.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Progress to Next Trophy ── */}
        {!streakBroken && nextMilestone && (
          <div
            className="rounded-[24px] p-5 mb-6"
            style={{
              background: '#FFFFFF',
              border: '2px solid #FFE0E0',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold" style={{ color: '#FF4757' }}>
                Next Milestone
              </span>
              <span className="font-bold text-base flex items-center gap-1" style={{ color: '#FF4757' }}>
                {nextMilestone.emoji === 'ROASTED_DUO' ? <RoastedDuoBird />
                  : nextMilestone.emoji === 'NIGHTMARE_DUO' ? <NightmareDuoBird />
                  : <span>{nextMilestone.emoji}</span>} {nextMilestone.days} days
              </span>
            </div>
            <div className="duo-progress">
              <Progress value={progressPercent} className="h-3 rounded-full" />
            </div>
            <p
              className="text-center text-xs mt-2.5 font-semibold"
              style={{ color: '#FF6348' }}
            >
              {nextMilestoneDays - currentStreak} days to go! 💪
            </p>
          </div>
        )}

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div
            className="rounded-[20px] py-3 px-2 text-center"
            style={{
              background: '#FFFFFF',
              border: '2px solid #FFE0E0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            }}
          >
            <div className="text-[11px] font-semibold mb-1" style={{ color: '#999' }}>Today</div>
            <div className="text-xl font-bold" style={{ color: '#FF4757' }}>
              {todayChecked ? '✅' : '⏳'}
            </div>
          </div>
          <div
            className="rounded-[20px] py-3 px-2 text-center"
            style={{
              background: '#FFFFFF',
              border: '2px solid #FFE0E0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            }}
          >
            <div className="text-[11px] font-semibold mb-1" style={{ color: '#999' }}>Status</div>
            <div className="text-xl font-bold" style={{ color: '#FF4757' }}>
              {streakBroken ? '💔' : '🔥'}
            </div>
          </div>
          <div
            className="rounded-[20px] py-3 px-2 text-center"
            style={{
              background: '#FFFFFF',
              border: '2px solid #FFE0E0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            }}
          >
            <div className="text-[11px] font-semibold mb-1" style={{ color: '#999' }}>Trophies</div>
            <div className="text-xl font-bold" style={{ color: '#FF4757' }}>
              {achievedMilestones.length}/{trophyMilestones.length}
            </div>
          </div>
        </div>

        {/* ── Full Trophy Road Preview ── */}
        <div
          className="rounded-[24px] p-5 sm:p-6 mb-6"
          style={{
            background: '#FFFFFF',
            border: '2px solid #FFE0E0',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          }}
        >
          <h3
            className="text-center mb-4 text-base font-bold"
            style={{ color: '#FF4757' }}
          >
            🗺️ The Great Escape Route
          </h3>

          <div className="space-y-2">
            {trophyMilestones.map((mile) => {
              const achieved = currentStreak >= mile.days;
              const isNext = nextMilestone && mile.days === nextMilestone.days && !streakBroken;
              return (
                <div
                  key={mile.days}
                  className="flex items-center gap-3 py-2 px-3 rounded-xl transition-all duration-200"
                  style={{
                    background: isNext
                      ? 'linear-gradient(135deg, #FFF3E0, #FFE0B2)'
                      : achieved
                      ? 'linear-gradient(135deg, #E8F5E9, #C8E6C9)'
                      : '#F5F5F5',
                    border: isNext
                      ? '2px solid #FFB74D'
                      : achieved
                      ? '2px solid #A5D6A7'
                      : '2px solid #EEEEEE',
                    opacity: achieved ? 1 : 0.5,
                  }}
                >
                  <span className="flex-shrink-0">
                    {mile.emoji === 'ROASTED_DUO' ? <RoastedDuoBird />
                      : mile.emoji === 'NIGHTMARE_DUO' ? <NightmareDuoBird />
                      : <span className="text-2xl">{mile.emoji}</span>}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-semibold truncate"
                        style={{ color: achieved ? '#2E7D32' : isNext ? '#E65100' : '#999' }}
                      >
                        {mile.name}
                      </span>
                      <span
                        className="text-sm font-bold flex-shrink-0 ml-2"
                        style={{ color: achieved ? '#2E7D32' : isNext ? '#E65100' : '#999' }}
                      >
                        {mile.days}d
                      </span>
                    </div>
                    {!achieved && (
                      <div className="mt-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#E0E0E0' }}>
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(100, (currentStreak / mile.days) * 100)}%`,
                            background: isNext
                              ? 'linear-gradient(90deg, #FF9800, #FFB74D)'
                              : 'linear-gradient(90deg, #BDBDBD, #E0E0E0)',
                          }}
                        />
                      </div>
                    )}
                  </div>
                  {achieved && (
                    <span className="text-sm flex-shrink-0">✅</span>
                  )}
                  {isNext && (
                    <span className="text-xs font-bold flex-shrink-0 px-2 py-0.5 rounded-full"
                      style={{ background: '#FF9800', color: '#FFF' }}
                    >
                      NEXT
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Footer / Settings ── */}
        <div className="text-center pt-4" style={{ borderTop: '2px solid #FFE0E0' }}>
          <button
            onClick={handleReset}
            className="bg-transparent text-sm font-medium cursor-pointer transition-colors duration-200 underline"
            style={{ color: '#999', border: 'none' }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = '#FF4757';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = '#999';
            }}
          >
            Reset Profile
          </button>
        </div>
      </div>
    </div>
  );
}
