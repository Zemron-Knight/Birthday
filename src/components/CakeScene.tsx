import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CakeSceneProps {
  onCandlesBlown: () => void;
}

export function CakeScene({ onCandlesBlown }: CakeSceneProps) {
  const [blownCandles, setBlownCandles] = useState<Set<number>>(new Set());
  const totalCandles = 5;

  const handleCandleClick = (index: number) => {
    const newBlown = new Set(blownCandles);
    newBlown.add(index);
    setBlownCandles(newBlown);

    if (newBlown.size === totalCandles) {
      setTimeout(() => {
        onCandlesBlown();
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Hint Text */}
        <AnimatePresence>
          {blownCandles.size === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-purple-400 text-center whitespace-nowrap"
            >
              ✨ Click to blow the candles ✨
            </motion.div>
          )}
        </AnimatePresence>

        {/* Table + Cake */}
        <svg width="400" height="450" viewBox="0 0 400 450" className="drop-shadow-2xl">
          {/* Table Shadow */}
          <ellipse cx="200" cy="420" rx="180" ry="20" fill="rgba(0,0,0,0.1)" />

          {/* Table Top */}
          <ellipse cx="200" cy="400" rx="180" ry="25" fill="#FFE4F0" />
          <rect x="20" y="400" width="360" height="15" fill="#FFD1E3" rx="5" />

          {/* Table Leg */}
          <rect x="170" y="400" width="60" height="45" fill="#FFD1E3" rx="8" />

          {/* ---------------------------------------------- */}
          {/* ---------------- FIXED CAKE ----------------- */}
          {/* ---------------------------------------------- */}

          {/* --- BOTTOM LAYER --- */}
          <ellipse cx="200" cy="330" rx="120" ry="18" fill="#FFC9E5" />

          <rect x="80" y="300" width="240" height="30" fill="#FFB8DC" />

          <ellipse cx="200" cy="300" rx="120" ry="18" fill="#FFD1E8" />

          <path
            d="
              M 80 318
              Q 100 310 120 318
              Q 140 310 160 318
              Q 180 310 200 318
              Q 220 310 240 318
              Q 260 310 280 318
              Q 300 310 320 318
              L 320 325
              Q 300 318 280 325
              Q 260 318 240 325
              Q 220 318 200 325
              Q 180 318 160 325
              Q 140 318 120 325
              Q 100 318 80 325
              Z
            "
            fill="#FFE0F0"
          />

          {/* --- MIDDLE LAYER --- */}
          <ellipse cx="200" cy="270" rx="100" ry="14" fill="#E6C9FF" />

          <rect x="100" y="245" width="200" height="25" fill="#D9B8FF" />

          <ellipse cx="200" cy="245" rx="100" ry="14" fill="#EDDAFF" />

          <path
            d="
              M 100 260
              Q 120 252 140 260
              Q 160 252 180 260
              Q 200 252 220 260
              Q 240 252 260 260
              Q 280 252 300 260
              L 300 265
              Q 280 260 260 265
              Q 240 260 220 265
              Q 200 260 180 265
              Q 160 260 140 265
              Q 120 260 100 265
              Z
            "
            fill="#F0E0FF"
          />

          {/* --- TOP LAYER --- */}
          <ellipse cx="200" cy="210" rx="80" ry="12" fill="#C9E5FF" />

          <rect x="120" y="190" width="160" height="20" fill="#B8D9FF" />

          <ellipse cx="200" cy="190" rx="80" ry="12" fill="#D1ECFF" />

          <path
            d="
              M 120 203
              Q 140 196 160 203
              Q 180 196 200 203
              Q 220 196 240 203
              Q 260 196 280 203
              L 280 208
              Q 260 203 240 208
              Q 220 203 200 208
              Q 180 203 160 208
              Q 140 203 120 208
              Z
            "
            fill="#E5F3FF"
          />

          {/* Decorative balls */}
          <circle cx="140" cy="290" r="4" fill="#FFE0F0" />
          <circle cx="260" cy="290" r="4" fill="#FFE0F0" />
          <circle cx="130" cy="245" r="3" fill="#F0E0FF" />
          <circle cx="270" cy="245" r="3" fill="#F0E0FF" />

          {/* ---------------------------------------------- */}
          {/* ----------------- CANDLES -------------------- */}
          {/* ---------------------------------------------- */}

          {[0, 1, 2, 3, 4].map((index) => {
            const x = 140 + index * 30;
            const y = 160;
            const isBlown = blownCandles.has(index);

            return (
              <g key={index}>
                {/* Candle body */}
                <motion.rect
                  x={x - 4}
                  y={y}
                  width="8"
                  height="28"
                  rx="2"
                  fill={index % 2 === 0 ? "#FFB8DC" : "#C9E5FF"}
                  className="cursor-pointer"
                  onClick={() => handleCandleClick(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Wick */}
                <AnimatePresence>
                  {!isBlown && (
                    <motion.line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={y - 8}
                      stroke="#333"
                      strokeWidth="1.5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                {/* Flame */}
                <AnimatePresence>
                  {!isBlown && (
                    <motion.g
                      initial={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.ellipse
                        cx={x}
                        cy={y - 14}
                        rx="6"
                        ry="9"
                        fill="url(#flameGradient)"
                        animate={{ scale: [1, 1.1, 1], y: [0, -2, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />

                      <motion.ellipse
                        cx={x}
                        cy={y - 13}
                        rx="3"
                        ry="5"
                        fill="#FFFACD"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />

                      <motion.circle
                        cx={x}
                        cy={y - 14}
                        r="12"
                        fill="rgba(255, 200, 100, 0.3)"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Smoke */}
                <AnimatePresence>
                  {isBlown && (
                    <>
                      <motion.circle
                        cx={x}
                        cy={y - 10}
                        r="8"
                        fill="rgba(200, 200, 220, 0.6)"
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 2, opacity: 0, y: -30 }}
                        transition={{ duration: 0.6 }}
                      />

                      <motion.circle
                        cx={x - 5}
                        cy={y - 10}
                        r="6"
                        fill="rgba(200, 200, 220, 0.4)"
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 1.8, opacity: 0, y: -25, x: -8 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      />
                    </>
                  )}
                </AnimatePresence>
              </g>
            );
          })}

          {/* Flame gradient */}
          <defs>
            <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF4B0" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FF8C00" />
            </linearGradient>
          </defs>
        </svg>

        {/* Sparkles */}
        {blownCandles.size > 0 && blownCandles.size < totalCandles && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-300"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  fontSize: `${16 + Math.random() * 8}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
