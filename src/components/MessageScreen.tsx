import { motion } from 'motion/react';

export function MessageScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 ? '✨' : i % 4 === 1 ? '💗' : i % 4 === 2 ? '🌸' : '⭐'}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center relative z-10 bg-white/40 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/60"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 text-purple-600"
        >
          <span className="block text-5xl mb-2">Happy Birthday, My Pookie</span>
          <motion.span
            className="inline-block text-4xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            🖤
          </motion.span>
        </motion.h1>

        {/* Poem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="space-y-6 text-gray-700 max-w-2xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="leading-relaxed"
          >
            Another trip around the sun,<br />
            And my world's still you.<br />
            Through dragons lost and nights so deep,<br />
            Your heart stayed strong and true.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="leading-relaxed"
          >
            You love your dog, you fight your fears,<br />
            You build worlds block by block.<br />
            You've shown me love is not just calm—<br />
            It's weathering the shock.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="leading-relaxed"
          >
            I know some days the dark feels loud,<br />
            And quiet seems too much.<br />
            But in this life, through all the noise,<br />
            It's your brave heart I trust.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="leading-relaxed"
          >
            So here's my wish for you this year:<br />
            More light, less weight to bear.<br />
            More slimes to find, more stars above,<br />
            And me, still standing there.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="leading-relaxed italic"
          >
            Not perfect—no. But yours for real,<br />
            Through modded games and grief we feel.<br />
            Happy Birthday, my love.<br />
            I'm not going anywhere.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-purple-600 mt-8"
          >
            — Yours always,<br />
            <span className="italic">Zemron Knight</span>
          </motion.p>
        </motion.div>

        {/* Floating hearts around the message */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                fontSize: `${16 + Math.random() * 12}px`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 5 === 0 ? '🖤' : i % 5 === 1 ? '💗' : i % 5 === 2 ? '💕' : i % 5 === 3 ? '🤍' : '💜'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom corner decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 right-8 text-6xl"
      >
        <motion.span
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          🎂
        </motion.span>
      </motion.div>
    </div>
  );
}
