import styles from './App.module.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBar from './components/HeroBar';
import Footer from './components/Footer';

function App() {
 

  return (
      <div className={styles.App}>
        
      <Header/>
      <div className='diagonal-box'>
        
      </div>
      <HeroBar/>
      <Footer />
    </div>
  )
}

export default App
