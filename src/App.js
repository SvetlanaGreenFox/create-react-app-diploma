import './App.scss';
import MainSection from './components/MainSection';
import { Counter } from './features/slices/TestComponent';
console.log(Counter);
function App() {
  return (
    <div className="App">
      <Counter />
      <MainSection />
    </div>
  );
}

export default App;
