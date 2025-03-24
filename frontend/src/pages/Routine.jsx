import React from "react";

function Routine() {
  const routines = [
    { time: "8:00 AM", task: "Wake Up" },
    { time: "8:30 AM", task: "Breakfast" },
    { time: "9:00 AM", task: "Exercise" },
    { time: "10:00 AM", task: "Learning Time" },
    { time: "12:00 PM", task: "Lunch" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Personalized Daily Routine</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routines.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
            <h3 className="text-indigo-600 text-lg font-bold mb-2">{item.time}</h3>
            <p className="text-gray-700 text-base">{item.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routine;
