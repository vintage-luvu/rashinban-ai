import { useState, useEffect, useRef } from 'react';

export default function RashinbanHero() {
  const [mood, setMood] = useState(null);
  const [comment, setComment] = useState('');
  const videoRef = useRef(null);

  const lowSchedule = [
    { time: '10:00】12:00', activity: '軽いインプット（読書・ニュース）' },
    { time: '13:00】15:00', activity: 'コード整理・ノートまとめ' },
    { time: '16:00】17:00', activity: '散歩・ストレッチ' },
    { time: '20:00】21:00', activity: 'ゆったりBGMでリラックス' },
  ];

  const midSchedule = [
    { time: '09:30】10:30', activity: '集中学習ブロック' },
    { time: '12:30】14:30', activity: '開発タスク' },
    { time: '16:00】17:00', activity: '軽い運動 or メモ整理' },
    { time: '19:30】21:00', activity: 'ジム + Focus BGM' },
  ];

  const highSchedule = [
    { time: '09:00】11:00', activity: 'アイデアスプリント' },
    { time: '11:00】13:00', activity: 'コーディング + BGM Energy' },
    { time: '16:00】17:00', activity: 'ミーティング・構想共有' },
    { time: '20:00】21:00', activity: '創造的アウトプット' },
  ];

  const schedule =
    mood === null
      ? []
      : mood < 40
      ? lowSchedule
      : mood < 70
      ? midSchedule
      : highSchedule;

  const startDetection = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setTimeout(() => {
        const value = Math.floor(Math.random() * 101);
        setMood(value);
        if (value < 40) {
          setComment('表情が落ち着いています。ゆっくり過ごしましょう。');
        } else if (value < 70) {
          setComment('安定した気分です。今日のペースに乗っていきましょう。');
        } else {
          setComment('エネルギーに溢れています！創造的な時間にしましょう。');
        }
      }, 2000);
    } catch (err) {
      console.error(err);
      const value = Math.floor(Math.random() * 101);
      setMood(value);
    }
  };

  return((
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <h1 className="text-4xl font-semibold mt-12">🌞 Rashinban — Feel your rhythm</h1>
      <div className="mt-6">
        <video ref={videoRef} autoPlay muted className="w-48 h-36 bg-black rounded-md" />
      </div>
      <button
        onClick={startDetection}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        気分を検出する
      </button>
      {comment && (
        <div className="mt-4 text-center text-lg italic text-gray-600">
          {comment}
        </div>
      )}
      {mood !== null && (
        <div className="text-left w-full max-w-md mx-auto mt-8">
          {schedule.map((item, idx) => (
            <p key={idx} className="py-1 text-gray-700">
              🕐 {item.time} - {item.activity}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

}
