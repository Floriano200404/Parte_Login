import RoutesApp from './routes';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
function App() {
  return (
    
    <div>
      <ToastContainer autoClose={3000}/>
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter> 
    </div>   
  )
}//fim da função App
export default App;

