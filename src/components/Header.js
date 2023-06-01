import React from 'react';
import Typed from 'react-typed';
const Header = () => {
  return (
    <div className='header-wrapper'>
      <section id='sectionhome'>
      <div className='main-info'>
        <h1>Olá, me chamo Daniel</h1>
        <Typed
            className='typed-text'
            strings={["Desenvolvimento Android","Desenvolvimento web","Programação Java"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        <a href='#contato' className='btn-main-offer'>Contato</a>
      </div>
      </section>
      
    </div>
  )
}


export default Header
