
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Sobremim from './components/Sobremim';

import Meustrabalhos from './components/Meustrabalhos';
import Curriculo from './components/Curriculo';
import Contato from './components/Contato';
function App() {
  return (
    <>
  
   <NavBar />
   <Header />
   <Sobremim />
   
   <Meustrabalhos/>
   <Curriculo/>
   <Contato/>

   </>
   
  );
}

export default App;
