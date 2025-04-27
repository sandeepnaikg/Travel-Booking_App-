import { useState } from 'react';

function Activities() {
  const [selectedDate, setSelectedDate] = useState('27');

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl mb-4">Activities</h1>
      
      {/* Day Plan Header */}
      <div className="flex gap-3 mb-4">
        <div className="bg-blue-600 rounded-full px-4 py-2 text-sm">Day Plan</div>
        <div className="bg-blue-600/20 rounded-full px-4 py-2 text-sm">14 Activities</div>
      </div>

      {/* Date Selector */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {[
          { day: 'MON', date: '27' },
        ]}
      </div>
    </div>
  );
}

export default Activities; 