import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <h1 
      className=" bg-violet-200 md:w-1/2 md:max-w-[1000px] mx-auto 
      flex flex-col gap-2 text-3xl  text-center  text-black 
      font-bold from-neutral-900">-- Form --</h1>
      <Form></Form>
    </div>
  );
}

export default App;