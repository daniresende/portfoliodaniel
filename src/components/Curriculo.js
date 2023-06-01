import React from 'react'
import Daniel from './Daniel.docx'
const Curriculo = () => {
  return (
    <div className='curriculo'>
       <h2>Currículo</h2>
      <section id="curriculo">
      <a href={Daniel} className='btn-main-offer'>Download</a>
  </section>
    </div>
  )
}

export default Curriculo
