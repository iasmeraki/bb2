import { Link } from 'react-router-dom'
import style from './header.module.css';


export default function Header() {
  return (
    <header className={style.header}>

      <img className={style.imgHeader} src="https://cinepop.com.br/wp-content/uploads/2024/05/bin_bong_divertidamente.jpg" alt="" />

        <ul className={style.menu}>
          <li><Link to="./"><button className={style.neomorphbtn}>Home</button></Link></li>
          <li><Link to="./Livros"><button className={style.neomorphbtn}>Livros</button></Link></li>
          <li><Link to="./Sagas"><button className={style.neomorphbtn}>Sagas</button></Link></li>
          <li><Link to="./Filmes"><button className={style.neomorphbtn}>Area de cinema</button></Link></li>
          <li><Link to="./Projeto"><button className={style.neomorphbtn}>Projetos</button></Link></li>
        </ul>
    </header>
  )
}