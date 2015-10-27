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
