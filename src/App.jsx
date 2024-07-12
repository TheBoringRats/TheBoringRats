import "./App.css";
import ButtonGreadient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Hader from "./components/Hader";
import Hero from "./components/Hero";



const App = () => {
  return (
    <>  
         
         
      <div className="pt-[4.75rem lg:pt-[5.25rem] overflow-hidden">
      
      <Hader />
      <Hero />
      </div>

      <ButtonGreadient />
   
    </>
  );
};

export default App;
