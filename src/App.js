import './App.scss';
import MainSection from './components/MainSection';
import { Counter } from './features/slices/TestComponent';
console.log(Counter);
function App() {
  return (
    <div className="App">
      <MainSection />
    </div>
  );
}

export default App;
