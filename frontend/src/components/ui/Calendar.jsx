import { useState } from "react";

export function Calendar({ selectedDate, setSelectedDate }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Calendar</h2>
      <div className="flex justify-center">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded-lg"
        />
      </div>
    </div>
  );
}
