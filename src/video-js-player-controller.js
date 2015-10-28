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

const getController = () => {
  const doCommand = ({player, commandFunctionName, commandArgs = []}) => {
    try {
      player[commandFunctionName].apply(player, commandArgs);
    } catch(e) {
      throw new Error(`Error attempting player command ${commandFunctionName}: ${e}`);
    }
  };

  return {
    doCommand
  };
};

export default getController;
