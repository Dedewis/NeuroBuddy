<<<<<<< HEAD

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar } from "@/components/Calendar";
import { Reminder } from "@/components/Reminder";


import { CheckCircle, Trash2, CalendarDays, Bell } from "lucide-react";


export default function Routine() {
  const [activeTab, setActiveTab] = useState("routine");
  
  const [routines, setRoutines] = useState([]);
  const [newRoutine, setNewRoutine] = useState("");
  const [routineTime, setRoutineTime] = useState("");

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [reminders, setReminders] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const addRoutine = () => {
    if (newRoutine.trim() !== "" && routineTime.trim() !== "") {
      setRoutines([...routines, { text: newRoutine, time: routineTime, done: false }]);
      setNewRoutine("");
      setRoutineTime("");
=======
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
>>>>>>> 0bf51a0fbcc8ef004e8f5dc4b8ccaeef7ad141e7
    }
  };

  const toggleDone = (index) => {
<<<<<<< HEAD
    const updated = [...routines];
    updated[index].done = !updated[index].done;
    setRoutines(updated);
  };

  const deleteRoutine = (index) => {
    const updated = routines.filter((_, i) => i !== index);
    setRoutines(updated);
  };

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">NeuroBuddy Dashboard</h1>

      <div className="flex justify-center gap-4">
        <Button variant={activeTab === "routine" ? "default" : "outline"} onClick={() => setActiveTab("routine")}>Routine</Button>
        <Button variant={activeTab === "notes" ? "default" : "outline"} onClick={() => setActiveTab("notes")}>Notes</Button>
        <Button variant={activeTab === "calendar" ? "default" : "outline"} onClick={() => setActiveTab("calendar")}>Calendar</Button>
        <Button variant={activeTab === "reminder" ? "default" : "outline"} onClick={() => setActiveTab("reminder")}>Reminder</Button>
      </div>

      {activeTab === "routine" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              placeholder="Enter routine"
              value={newRoutine}
              onChange={(e) => setNewRoutine(e.target.value)}
            />
            <Input
              type="time"
              value={routineTime}
              onChange={(e) => setRoutineTime(e.target.value)}
            />
            <Button onClick={addRoutine}>Add</Button>
          </div>

          {routines.map((routine, index) => (
            <Card key={index} className="flex justify-between items-center p-4 bg-white shadow-md rounded-2xl">
              <CardContent className="p-0 flex-1">
                <div className="flex flex-col">
                  <span className={`text-lg font-medium ${routine.done ? 'line-through text-gray-400' : ''}`}>{routine.text}</span>
                  <span className="text-sm text-gray-500">{routine.time}</span>
                </div>
              </CardContent>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => toggleDone(index)}>
                  <CheckCircle className={`w-5 h-5 ${routine.done ? 'text-green-500' : 'text-gray-400'}`} />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => deleteRoutine(index)}>
                  
                  <Trash2 className="w-5 h-5 text-red-500" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "notes" && (
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Write a note"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <Button onClick={addNote}>Add</Button>
          </div>

          {notes.map((note, index) => (
            <Card key={index} className="flex justify-between items-center p-4 bg-white shadow-md rounded-2xl">
              <CardContent className="p-0 flex-1">
                <span className="text-base text-gray-700">{note}</span>
              </CardContent>
              <Button size="icon" variant="ghost" onClick={() => deleteNote(index)}>
                <Trash2 className="w-5 h-5 text-red-500" />
              </Button>
            </Card>
          ))}
        </div>
      )}

{activeTab === "calendar" && (
  <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
)}


{activeTab === "reminder" && (
  <Reminder reminders={reminders} setReminders={setReminders} />
)}

=======
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
>>>>>>> 0bf51a0fbcc8ef004e8f5dc4b8ccaeef7ad141e7
    </div>
  );
}
