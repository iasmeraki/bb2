import style from './header.module.css';
import Livros from './Livros.jsx';
import Sagas from './Sagas.jsx';

export default function Header() {
  return (
    <header className={style.header}>

      <img  className={style.imgHeader} src="https://cinepop.com.br/wp-content/uploads/2024/05/bin_bong_divertidamente.jpg" alt="" />

      <ul className={style.menu}>
      
         <li><a href=""><button className={style.neomorphbtn}>Home</button></a></li>
         <li><a href="./Livros.jsx"><button className={style.neomorphbtn}>Livros Diversos</button></a></li>
         <li><a href="./"><button className={style.neomorphbtn}>Sagas</button></a></li>
         <li><a href="./History"><button className={style.neomorphbtn}>Projeto</button></a></li>     

       </ul>

     
    </header>
  )
}