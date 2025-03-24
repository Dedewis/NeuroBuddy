const features = [
  { title: "Routine", desc: "Track your daily tasks and habits." },
  { title: "Support", desc: "Connect with the community." },
  { title: "Audio-Visual Tools", desc: "Access helpful tools and resources." },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome to NeuroBuddy Dashboard
        </h1>
        <p className="mt-4 text-lg text-blue-700">
          Manage your routines, tools, and support all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md text-center cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-800">
              {item.title}
            </h2>
            <p className="mt-2 text-blue-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
