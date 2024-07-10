import style from "./home.module.css"

export default function Home() {
  return (
    <>
      <article className={style.Principal}>
        <div className={style.ContainerT}>
          <div className={style.Txt}>
            <h1 className={style.title}>Um Pouco sobre</h1>
            <h3>Uma biblioteca virtual é uma plataforma online que disponibiliza uma ampla variedade de materiais de leitura de forma digital. Nesse ambiente, você encontrará livros de todos os lugares, gÊneros e autores diferentes espalhados pelo mundo. A grande vantagem é que esses materiais podem ser acessados de qualquer lugar, a qualquer momento, desde que haja conexão à internet. Além disso, a biblioteca virtual oferece uma experiência de usuário intuitiva, permitindo que você explore sem filas ou multas de atraso. É uma ferramenta essencial para estudantes, professores e entusiastas do conhecimento. </h3>
          </div>
        </div>
        <img className={style.Himg} src="https://img.freepik.com/fotos-gratis/livro-aberto-3d-com-capa-roxa-e-marcador_107791-14910.jpg" alt="Biblioteca Virtual" />
        <div className={style.ContainerT}>
          <div className={style.Txt}>
            <h1 className={style.title}>Area de Cinema</h1>
            <h3>Para aprofundamento em nossa cultura e vivência é quase inpossível não citar algum filme ou série que tenha marcado nossas vidas e por isso a ideia de trazer a área de cinema para nosso site. Poder mostrar a vários estudantes, que não tem condição para ir ao cinema ou pagar algum plano de TV, que é possível aproveitar esse gostinho artístico sem muito esforço. É através da arte que nos expressamos, desde os primórdios da civilização até a idade contemporânea.</h3>
          </div>
        </div>
        <img className={style.Himg} src="https://static.vecteezy.com/ti/vetor-gratis/t1/10427077-claquete-de-cinema-roxo-gratis-vetor.jpg" alt="" />
      </article>

      <p className={style.Fp}>Projetado e idealizado por: Iasmim B. 2F    |    Apoio de código programacional: Letícia V. (Orlando Flores) & M</p>
    </>
  )
}