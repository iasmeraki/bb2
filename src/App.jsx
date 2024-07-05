/*import { useState } from 'react'*/
import './styles.global.css'
import Header from './assets/Components/Header'
import styles from './assets/app.module.css';
import Livros from './assets/Components/Livros';
import Sagas from './assets/Components/Sagas';


function App() {


  return (
    <>
    <div>

         <Header />
         
         <div className= {styles.wrapper}>
  
      </div>

        <Livros />
        <Sagas />

      </div>       
    </>
  )
}

export default App
