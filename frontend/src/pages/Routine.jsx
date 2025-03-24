import { useState } from 'react';

export default function Routine() {
  const [routines, setRoutines] = useState([]);
  const [newRoutine, setNewRoutine] = useState("");
  const [newTime, setNewTime] = useState("");

  const addRoutine = () => {
    if (newRoutine.trim() !== "" && newTime.trim() !== "") {
      setRoutines([...routines, { text: newRoutine, time: newTime, done: false }]);
      setNewRoutine("");
      setNewTime("");
    }
  };

  const toggleDone = (index) => {
    const updatedRoutines = routines.map((routine, i) =>
      i === index ? { ...routine, done: !routine.done } : routine
    );
    setRoutines(updatedRoutines);
  };

  const deleteRoutine = (index) => {
    const updatedRoutines = routines.filter((_, i) => i !== index);
    setRoutines(updatedRoutines);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Routine Manager</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter routine"
          value={newRoutine}
          onChange={(e) => setNewRoutine(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="time"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-auto"
        />
        <button
          onClick={addRoutine}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {routines.map((routine, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-3 rounded bg-white shadow"
          >
            <div>
              <p className={`font-medium ${routine.done ? 'line-through text-gray-400' : ''}`}>{routine.text}</p>
              <p className="text-sm text-gray-500">{routine.time}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleDone(index)}
                className="text-green-500 hover:underline"
              >
                {routine.done ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteRoutine(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
