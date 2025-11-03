import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function RashinbanHero() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('今日の波に、うまく乗ろう。');
  const [schedule, setSchedule] = useState(null);

  const defaultSchedule = [
    { time: '09:00〜10:00', activity: '勉強・インプット' },
    { time: '10:00〜12:00', activity: '開発・コーディング' },
    { time: '12:00〜13:00', activity: '昼休み・リラックス' },
    { time: '13:00〜15:00', activity: '企画・アウトプット' },
    { time: '15:00〜17:00', activity: '運動・散歩' },
    { time: '17:00〜19:00', activity: '自由時間・読書' },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setMessage('リズムを感じています…');
    setSchedule(null);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMessage('今日の流れが見つかりました。');
    setSchedule(defaultSchedule);
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
        className="text-lg sm:text-xl text-gray-600 mb-8 text-center"
      >
        {message}
      </motion.p>

      {/* Schedule List */}
      {schedule && (
        <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-lg shadow-md p-4 mb-8">
          {schedule.map(({ time, activity }, idx) => (
            <div key={idx} className="flex justify-between py-2 border-b last:border-b-0 border-gray-300">
              <span className="font-medium">{time}</span>
              <span>{activity}</span>
            </div>
          ))}
        </div>
      )}

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
