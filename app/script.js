import React from 'react';
import { render } from 'react-dom';
import AppDescription from './AppDescription';

const status = {
  off: 'off',
  work: 'work',
  rest: 'rest'
};

class App extends React.Component {
  
  render() {

    const { status } = this.state;

    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <AppDescription />}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status !== 'off') && <div className="timer">18:23</div>}
        {(status === 'off') && <button className="btn">Start</button>}
        {(status !== 'off') && <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  };
};

render(<App />, document.querySelector('#app'));
