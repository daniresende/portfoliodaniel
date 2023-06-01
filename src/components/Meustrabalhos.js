import React from 'react'
import Cadeirantes from './Cadeirantes.jpg'
import Loja from './Loja.jpg'
import Reciclagem from './Reciclagem.jpg'
import Reminder from './Reminder.jpg'
const Meustrabalhos = () => {
  return (
    <div className='meustrabalhos'>
      <section id="meustrabalhos" >
      <h2>Meus trabalhos</h2>
      <div className='divmeustrabalhos'>
      <img src={Loja}></img>
      <img src={Reciclagem}></img>
      <img src={Reminder}></img>
      <img src={Cadeirantes}></img>
      </div>
     
  </section>
  
    </div>
  )
}

export default Meustrabalhos
