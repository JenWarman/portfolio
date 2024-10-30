import styles from './App.module.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBar from './components/HeroBar';
import Footer from './components/Footer';
import RecentProjects from './components/RecentProjects';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
 

  return (
    <div className={styles.App}>
      <Header/>
      <div className='diagonal-box'></div>
      
      <Routes>
        <Route path='/' element={<><HeroBar /><RecentProjects/></>}></Route>
          <Route path='/about' element={<><About /><Skills/></>}></Route>
          <Route path='/projects' element={<Projects />}></Route>
      </Routes> 

      <Footer />
    </div>
  )
}

export default App
