import './App.css';
import { useSelector  } from 'react-redux'; // help us select what 'state' we want in file.
import { useDispatch  } from 'react-redux'; // to execute action we dispatch action using 'useDispatch'.
import { counterAction } from './actions/counterAction';
function App() {

  const counter = useSelector((state)=>{   // here 'state' contains all  states from all reducers
      return state.counterReducer;
    
  });

  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
         Count : {counter}
      </header>
      <button onClick={() => dispatch(counterAction.incrementCounterAction())}>Increment</button>
      <button onClick={() => dispatch(counterAction.decrementCounterAction())}>Decrement</button>
      <button onClick={() => dispatch(counterAction.incrementCounterByValueAction(5))}>Increment By 5</button>
    </div>
  );
}

export default App;
