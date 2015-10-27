# react-videojs
A react wrapper for the video-js framework

## project status
This is in an early alpha state. Please use at your own risk. 

## installation
`npm install react-videojs --save`

## usage example

```
import VideoJs from 'react-videojs';
import React from 'react';
import ReactDOM from 'react-dom';

const onReport = ({eventName}) => {
  console.log(eventName);
};

const App = React.createClass({
  render() {
    return (
      <div>
        <VideoJs
          reportingCallback = {onReport}
          src={[{ type: "video/mp4", src: "http://video-js.zencoder.com/oceans-clip.mp4" }]} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('#content'));
```
