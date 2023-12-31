import './App.css';
import { Routes, Route } from 'react-router-dom';

//Views
import Layout from './components/Layout';
import HomePage from './views/HomePage';

const App = () => {

  return <>

    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />   
        <Route path="/" exact element={<HomePage />} />
        
      </Route>

    </Routes>

  </>
}

export default App;