import styles from './App.module.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBar from './components/HeroBar';
import Footer from './components/Footer';
import RecentProjects from './components/RecentProjects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
 

  return (
    <div className={styles.App}>
      
    
    <BrowserRouter>
    <Header/>
      <div className='diagonal-box'></div>
      <HeroBar/>
      <RecentProjects />
      <Footer />
      <Routes>
          <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
