import styles from '../styles/Home.module.css'
import HolyGrailTemplate from '../templates/holy-grail/holy-grail.template'

export default function Index() {
  return (
    <HolyGrailTemplate>
      <h1>Live Interfaces Humano Computador</h1>

      <h2>Valor Léxico, sintático, semático</h2>
      <div onClick={() => window.location.href = 'http://www.google.com'}> Google </div>
      <div onClick={() => window.location.href = 'http://www.google.com'}> Clique para o Google </div>
      <a href="https://google.com">Ir para o Google</a>
      <br></br>

      <h2>Affordance</h2>
      <label>CPF: </label>
      <input placeholder="123.456.789-00" type="number"></input>
      <br></br>
      <label>Minha opinião sobre bolo de maçã:</label>
      <br></br>
      <input></input>
      <br></br>
      <textarea></textarea>
      <br></br>
      <label className={styles.name}>Nome:</label>
      <br></br>
      <input className={styles.input} placeholder="Gustavo Tamanaka"></input>

      <h2>Declustering</h2>
      <button className={styles.submeter}> Submeter </button>
      <button className={styles.apagar}>Apagar</button>

      <h2>Informações de varreduras</h2>
      <div className={styles.minetext}>
        <p>
          Já a Lei de Hick – ou lei de Hick–Hyman – foi formulada por William Edmund Hick e Ray Hyman, psicólogos britânico e norte americano, respectivamente.

          A Lei de Hick aponta que o tempo levado para tomar uma decisão é diretamente influenciado pelo número de opções disponíveis. Quanto mais opções disponíveis, mais tempo levamos para nos decidirmos.

          Assim como nos cardápios de restaurante, quanto maiores forem, mais difícil de escolher o que comer.
        </p>

      </div>

      <h2>Processos cognitivos e decisão</h2>
      <button className={styles.submeter2}> Assinar Produto </button>
      <button className={styles.apagar2}>Obrigado</button>
    </HolyGrailTemplate>
  )
}
