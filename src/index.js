import React from 'react';
import ReactDOM from 'react-dom';

var meInReact = (
  <div className = 'me'>
    <h1>An Awesome Person</h1>
    <p>Who is learning React</p>

    <ul className='my-interests'>
      <li>JavaScript</li>
      <li>React</li>
      <li>Movies</li>
      <li>Ice cream</li>
    </ul>
  </div>
);

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

