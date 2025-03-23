import React from 'react';
const Tools = () => (
  <div>
    <h2>Tools for Support</h2>
    <p>Access calming music and visual aids here.</p>
    <audio controls>
      <source src="/assets/audio/calm.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

export default Tools;