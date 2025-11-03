import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function RashinbanHero() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('今日の波に、うまく乗ろう。');

  const handleGenerate = async () => {
    setLoading(true);
    setMessage('リズムを感じています…');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMessage('今日の流れが見つかりました。');
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 font-[system-ui]">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-semibold mb-6 text-center tracking-tight"
      >
        Good morning, <span className="text-black font-bold">Yuto</span>.
      </motion.h1>

      {/* Sub Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg sm:text-xl text-gray-600 mb-12 text-center"
      >
        {message}
      </motion.p>

      {/* Generate Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleGenerate}
        disabled={loading}
        className={`flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg shadow-lg transition-all duration-300 ${
          loading ? 'bg-gray-400 cursor-wait' : 'bg-black hover:bg-gray-900'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        {loading ? '生成中…' : 'Generate Today'}
      </motion.button>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-20 text-sm text-gray-500 text-center"
      >
        Rashinban — The rhythm of your day.
      </motion.div>
    </div>
  );
}
