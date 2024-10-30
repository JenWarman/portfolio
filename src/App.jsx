import styles from './App.module.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBar from './components/HeroBar';
import Footer from './components/Footer';
import RecentProjects from './components/RecentProjects';

function App() {
 

  return (
      <div className={styles.App}>
        
      <Header/>
      <div className='diagonal-box'>
        
      </div>
      <HeroBar/>
      <RecentProjects />
      <Footer />
    </div>
  )
}

export default App
