const getMockActions = function (...args) {
  return args.reduce((actions, action) => {
    if (typeof action === 'object') {
      return {...actions, ...action};
    }
      return {...actions, ...{[action](){}}}
 }, {});
}

export default getMockActions;
