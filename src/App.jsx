import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';
import './global.css';
import styles from './App.module.css';


function App() {
  
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Diego Fernandes"
            content="Loren ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui euismod, efficitur ligula ut, facilisis nunc. Donec ac ligula nec enim facilisis fringilla."
          />
          <Post 
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          /> 
        </main>
      </div>      
    </>
  )
}

export default App
