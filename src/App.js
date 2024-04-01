import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.css'
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
