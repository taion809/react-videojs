"use strict";

exports.__esModule = true;
var getController = function getController() {
  var doCommand = function doCommand(_ref) {
    var player = _ref.player;
    var commandFunctionName = _ref.commandFunctionName;
    var _ref$commandArgs = _ref.commandArgs;
    var commandArgs = _ref$commandArgs === undefined ? [] : _ref$commandArgs;

    try {
      player[commandFunctionName].apply(player, commandArgs);
    } catch (e) {
      throw new Error("Error attempting player command " + commandFunctionName + ": " + e);
    }
  };

  return {
    doCommand: doCommand
  };
};

exports["default"] = getController;
module.exports = exports["default"];