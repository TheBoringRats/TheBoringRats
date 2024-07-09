import "./App.css";
import ButtonGreadient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Hader from "./components/Hader";

const App = () => {
  return (
    <>  
         <ButtonGreadient />
         <h1 className="text-3xl font-bold underline"> The Boaring Rats </h1>
      <div className="pt-[4.75rem lg:pt-[5.25rem] overflow-hidden">
      
      <Hader />
      </div>
   
    </>
  );
};

export default App;
