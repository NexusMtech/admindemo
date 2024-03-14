import { Home } from './components/Home';
import './css/style.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
</>
  );
}

export default App;
