import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import './assets/css/index.scss';

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
