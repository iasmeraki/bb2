
import style from "./home.module.css"

export default function Home() {
  return (
    <>
      <article className={style.Principal}>
        <div className={style.ContainerT}>
          <div className={style.Txt}>
            <h1 className={style.title}>Um Pouco sobre</h1>
            <h3>Uma biblioteca virtual é uma plataforma online que disponibiliza uma ampla variedade de materiais de leitura de forma digital. Nesse ambiente, você encontrará livros, artigos científicos, teses, dissertações, relatórios técnicos e outros recursos acadêmicos. A grande vantagem é que esses materiais podem ser acessados de qualquer lugar, a qualquer momento, desde que haja conexão à internet1. Além disso, a biblioteca virtual oferece uma experiência de usuário intuitiva, permitindo que você explore e pesquise com facilidade, sem filas ou multas de atraso. É uma ferramenta essencial para estudantes, pesquisadores e entusiastas do conhecimento. </h3>
          </div>
        </div>
        <img className={style.Himg} src="https://storage.googleapis.com/atados-v3/user-uploaded/images/ec5ccd3b-f397-4867-8a34-4fc7b1be629f.jpg" alt="Biblioteca Virtual" />
      </article>
    </>
  )
}
