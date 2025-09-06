import './App.css';
import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className={`App dark:bg-darkBg`}>
      <Header />
      <AllRoutes />
      <ToastContainer />
      <Footer />
    </div>

  );
}

export default App;
