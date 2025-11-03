import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RashinbanHero() {
  const [mood, setMood] = useState(50);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setMood(value);
  };

  const lowSchedule = [
    { time: '10:00〜12:00', activity: '軽いインプット（読書・ニュース）' },
    { time: '13:00〜15:00', activity: 'コード整理・ノートまとめ' },
    { time: '16:00〜17:00', activity: '散歩・ストレッチ' },
    { time: '20:00〜21:00', activity: 'ゆったりBGMでリラックス' },
  ];

  const midSchedule = [
    { time: '09:30〜10:30', activity: '集中学習ブロック' },
    { time: '12:30〜14:30', activity: '開発タスク' },
    { time: '16:00〜17:00', activity: '軽い運動 or メモ整理' },
    { time: '19:30〜21:00', activity: 'ジム + Focus BGM' },
  ];

  const highSchedule = [
    { time: '09:00〜11:00', activity: 'アイデアスプリント' },
    { time: '11:00〜13:00', activity: 'コーディング + BGM Energy' },
    { time: '16:00〜17:00', activity: 'ミーティング・構想共有' },
    { time: '20:00〜21:00', activity: '創造的アウトプット' },
  ];

  const schedule =
    mood < 40 ? lowSchedule : mood < 70 ? midSchedule : highSchedule;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 font-[system-ui]">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold mt-12"
      >
        🌤 Good morning, Yuto.
      </motion.h1>

      <div className="w-full text-center mt-6 max-w-md">
        <p className="text-gray-600 mb-2">今日はどんな気分？</p>
        <input
          type="range"
          min="0"
          max="100"
          value={mood}
          onChange={handleChange}
          className="w-3/4 accent-blue-500"
        />
        <p className="mt-2 text-sm text-gray-500">
          {mood < 40
            ? '静かに整える日'
            : mood < 70
            ? '流れに乗る日'
            : '全開モード'}
        </p>
      </div>

      <div className="text-left w-full max-w-md mx-auto mt-8">
        {schedule.map((item, idx) => (
          <p key={idx} className="py-1 text-gray-700">
            ⏐ {item.time} - {item.activity}
          </p>
        ))}
      </div>
    </div>
  );
}
