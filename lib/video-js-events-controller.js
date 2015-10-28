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

'use strict';

exports.__esModule = true;

var _videoJsEventNames = require('./video-js-event-names');

var getController = function getController() {

  var dataMethodNamesLookupTable = {
    firstPlay: ['currentSrc'],
    play: ['currentSrc'],
    pause: ['currentSrc'],
    progress: ['buffered', 'bufferedPercent'],
    durationchange: ['duration'],
    fullscreenchange: ['isFullscreen'],
    timeupdate: ['currentTime', 'remainingTime'],
    volumechange: ['volume']
  };

  var getEventData = function getEventData(_ref) {
    var player = _ref.player;
    var dataMethodNames = _ref.dataMethodNames;

    return dataMethodNames.reduce(function (data, methodName) {
      data[methodName] = player[methodName]();
      return data;
    }, {});
  };

  var getEventDataForEventName = function getEventDataForEventName(_ref2) {
    var player = _ref2.player;
    var eventName = _ref2.eventName;

    var dataMethodNames = dataMethodNamesLookupTable[eventName] || [];
    return getEventData({ player: player, dataMethodNames: dataMethodNames });
  };

  var makePlayerListenForEvents = function makePlayerListenForEvents(_ref3) {
    var player = _ref3.player;
    var reportingCallback = _ref3.reportingCallback;

    _videoJsEventNames.eventNames.forEach(function (eventName) {
      return player.on(eventName, function (e) {
        var eventData = getEventDataForEventName({ player: player, eventName: eventName });
        reportingCallback({ eventName: eventName, eventData: eventData });
      });
    });
  };

  var listenForPlayerEvents = function listenForPlayerEvents(_ref4) {
    var player = _ref4.player;
    var reportingCallback = _ref4.reportingCallback;

    makePlayerListenForEvents({ player: player, reportingCallback: reportingCallback });
  };

  return {
    listenForPlayerEvents: listenForPlayerEvents
  };
};

exports['default'] = getController;
module.exports = exports['default'];