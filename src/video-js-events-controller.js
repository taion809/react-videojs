/*
Copyright 2015 Grovo Learning, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {eventNames} from './video-js-event-names';

const getController = () => {

  const dataMethodNamesLookupTable = {
    firstPlay: ['currentSrc'],
    play: ['currentSrc'],
    pause: ['currentSrc'],
    progress: ['buffered', 'bufferedPercent'],
    durationchange: ['duration'],
    fullscreenchange: ['isFullscreen'],
    timeupdate: ['currentTime', 'remainingTime'],
    volumechange: ['volume']
  };

  const getEventData = ({player, dataMethodNames}) => {
    return dataMethodNames.reduce((data, methodName) => {
      data[methodName] = player[methodName]();
      return data;
    }, {});
  };

  const getEventDataForEventName = ({player, eventName}) => {
    const dataMethodNames = dataMethodNamesLookupTable[eventName] || [];
    return getEventData({player, dataMethodNames});
  };

  const makePlayerListenForEvents = ({player, reportingCallback}) => {
    eventNames.forEach(eventName => player.on(eventName,
      e => {
        const eventData = getEventDataForEventName({player, eventName});
        reportingCallback({eventName, eventData});
      }));
  };

  const listenForPlayerEvents = ({player, reportingCallback}) => {
    makePlayerListenForEvents({player, reportingCallback});
  };

  return {
    listenForPlayerEvents
  }
}

export default getController;
