import React from "react";
<<<<<<< HEAD

=======
>>>>>>> ff31f19e8fc94bc3382caafa9338e574f9dd06e7
function Tools() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Audio-Visual Tools</h2>
      <p className="mb-6 text-gray-700 text-center">Play calming music and explore soothing visuals designed for relaxation and focus.</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:w-1/2">
          <audio controls className="w-full rounded shadow">
            <source src="/assets/audio/calming_music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/assets/images/soothing_visual.jpg" alt="Soothing Visual" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Tools;
=======
export default Tools;
>>>>>>> ff31f19e8fc94bc3382caafa9338e574f9dd06e7
