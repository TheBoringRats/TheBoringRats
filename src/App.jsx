import "./App.css";
import ButtonGreadient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">The LAB Rats </h1>
      <div className="pt-[4.75rem lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" herf="#login">
          Login
        </Button>
      </div>
      <ButtonGreadient />
    </>
  );
};

export default App;
