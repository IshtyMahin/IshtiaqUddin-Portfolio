
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
