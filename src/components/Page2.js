import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">You Are On Page TWO</h1>
    </header>
    <div className="ph3">
      <button className="f4 dim ba bw1 ph3 pv2 mb2 dib pa3 bw2 ma2 dark-green shadow-5" onClick={() => onRouteChange('page1')}>Page1</button>
      <button className="f4 dim ba bw1 ph3 pv2 mb2 dib pa3 bw2 ma2 dark-green disabled">Page2</button>
      <button className="f4 dim ba bw1 ph3 pv2 mb2 dib pa3 bw2 ma2 dark-green shadow-5" onClick={() => onRouteChange('page3')}>Page3</button>
    </div>
  </div>



export default Page2;
