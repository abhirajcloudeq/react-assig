// import logo from './logo.svg';
import './App.css';
import Frops2 from './component';
import CounterHooks from './counterusinghook';
import CounterHook from './counteruseeffect';
import Change from './conditon';
function App() {
  return (
    <div className="App">
      <Frops2 name='abbhiraj' company='cloudeqw' />
      <CounterHooks/>
      <CounterHook/>
      <Change/>
    </div>
  );
}

export default App;
