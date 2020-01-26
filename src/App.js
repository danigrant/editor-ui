import React from 'react';
import Highlight from 'react-highlight.js';

// for refreshing the highlighting https://codepen.io/shotastage/pen/KaKwya

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li><img className="sidebar-arrow" src="./icons/arrow_down.svg" /><img className="sidebar-icon" src="./icons/folder.svg" />home</li>
              <ul>
                <li><img className="sidebar-arrow" src="./icons/arrow_right.svg" /><img className="sidebar-icon" src="./icons/file.svg" />index.js</li>
                <li><img className="sidebar-arrow" src="./icons/arrow_right.svg" /><img className="sidebar-icon" src="./icons/file.svg" />index.html</li>
                <li><img className="sidebar-arrow" src="./icons/arrow_right.svg" /><img className="sidebar-icon" src="./icons/file.svg" />style.css</li>
              </ul>
            <li><img className="sidebar-arrow" src="./icons/arrow_down.svg" /><img className="sidebar-icon" src="./icons/folder.svg" />static</li>
              <ul>
                <li><img className="sidebar-arrow" src="./icons/arrow_right.svg" /><img className="sidebar-icon" src="./icons/file.svg" />logo.png</li>
              </ul>
          </ul>
        </div>
        <div className="workspace">
          <Highlight language={"javascript"}>
            <textarea autofocus>
            </textarea>
          </Highlight>
        </div>
      </div>
    </div>
  );
}

export default App;
