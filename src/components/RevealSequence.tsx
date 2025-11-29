import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RevealSequenceProps {
  onComplete: () => void;
}

export function RevealSequence({ onComplete }: RevealSequenceProps) {
  const [currentReveal, setCurrentReveal] = useState(0);

  useEffect(() => {
    if (currentReveal === 0) {
      const timer = setTimeout(() => setCurrentReveal(1), 2500);
      return () => clearTimeout(timer);
    } else if (currentReveal === 1) {
      const timer = setTimeout(() => setCurrentReveal(2), 2500);
      return () => clearTimeout(timer);
    } else if (currentReveal === 2) {
      const timer = setTimeout(() => setCurrentReveal(3), 2500);
      return () => clearTimeout(timer);
    } else if (currentReveal === 3) {
      const timer = setTimeout(() => onComplete(), 1500);
      return () => clearTimeout(timer);
    }
  }, [currentReveal, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">

        {/* 🐶 DOG REVEAL */}
        {currentReveal === 1 && (
          <motion.div
            key="dog"
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/80">
              <ImageWithFallback
                src="/dog.jpg"   // 🔥 YOUR DOG PHOTO HERE
                alt="Dog"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 to-transparent pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center text-purple-600"
            >
              Your loyal companion 🐕
            </motion.div>

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-pink-400"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  fontSize: `${20 + Math.random() * 10}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 1.5],
                  y: [0, -50],
                }}
                transition={{
                  duration: 2,
                  delay: 0.5 + i * 0.1,
                }}
              >
                {i % 3 === 0 ? '💗' : i % 3 === 1 ? '💕' : '🤍'}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 😺 CAT REVEAL */}
        {currentReveal === 2 && (
          <motion.div
            key="cat"
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/80">
              <ImageWithFallback
                src="/cat.jpg"   // 🔥 YOUR CAT PHOTO HERE
                alt="Cat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-200/30 to-transparent pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center text-purple-600"
            >
              Soft, adorable… just like you 🐾💜
            </motion.div>

            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  fontSize: `${18 + Math.random() * 10}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0],
                  y: [0, -40],
                }}
                transition={{
                  duration: 2,
                  delay: 0.4 + i * 0.1,
                }}
              >
                {i % 3 === 0 ? "🐾" : i % 3 === 1 ? "😺" : "💜"}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 🚗 CAR REVEAL */}
        {currentReveal === 3 && (
          <motion.div
            key="car"
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-[600px] h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635487868995-9f956475618d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80"
                alt="Nissan Silvia S15"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-300/40 to-transparent pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center text-purple-600"
            >
              Your dream ride awaits 🏁✨
            </motion.div>

            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${-10 + Math.random() * 120}%`,
                  top: `${10 + Math.random() * 80}%`,
                  fontSize: `${18 + Math.random() * 10}px`,
                }}
                initial={{ opacity: 0, x: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: i % 2 === 0 ? 100 : -100,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 + i * 0.08,
                }}
              >
                {i % 3 === 0 ? '💨' : i % 3 === 1 ? '⭐' : '✨'}
              </motion.div>
            ))}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
