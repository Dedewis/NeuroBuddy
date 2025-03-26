
import { useState } from "react";

export function Reminder({ reminders, setReminders }) {
  const [newReminder, setNewReminder] = useState("");

  const addReminder = () => {
    if (newReminder.trim() !== "") {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  const deleteReminder = (index) => {
    const updated = reminders.filter((_, i) => i !== index);
    setReminders(updated);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Reminders</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
          placeholder="Enter reminder"
          className="border p-2 rounded-lg w-full"
        />
        <button onClick={addReminder} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {reminders.map((reminder, index) => (
          <li key={index} className="flex justify-between items-center p-2 border rounded-lg shadow-md">
            <span className="text-gray-700">{reminder}</span>
            <button onClick={() => deleteReminder(index)} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Reminder;
