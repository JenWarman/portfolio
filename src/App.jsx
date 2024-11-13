import styles from './App.module.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBar from './components/HeroBar';
import Footer from './components/Footer';
import RecentProjects from './components/RecentProjects';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import DesignProjects from './components/Projects';
import 'animate.css';
import ByteSizeHabits from './components/ByteSizeHabits';
import BookClubApp from './components/BookClubApp';


function App() {
 
  return (
    <div className={styles.App}>
      {/* <div className='diagonal-box'></div>  */}
       <div className="content"> 
      <Header/>
        <Routes>
          <Route path='/' element={<><HeroBar /><RecentProjects/></>}></Route>
            <Route path='/about' element={<><About /><Skills/></>}></Route>
            <Route path='/projects' element={<DesignProjects />}></Route>
            <Route path='/byte-size-habits' element={<ByteSizeHabits/>}></Route>
            <Route path='/book-club-app' element={<BookClubApp/>}></Route>
        </Routes> 
      <Footer />
    </div>
    </div>
  )
}

export default App
