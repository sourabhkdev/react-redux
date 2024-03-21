// ACTION - JUST name/type of action(task).it does not perform any action. INCREMENT/DECREMET
const incrementCounterAction = () => {
    return {
      type: "INCREMENT"
    };
  };
  
  const decrementCounterAction = () => {
    return {
      type: "DECREMENT",
    };
  };
  
  const incrementCounterByValueAction = (value) => {
    return {
      type: "INCREMENT_BY_5",
      payload:value
    };
  };
  export const counterAction = {
    incrementCounterAction,
    decrementCounterAction,
    incrementCounterByValueAction
  }