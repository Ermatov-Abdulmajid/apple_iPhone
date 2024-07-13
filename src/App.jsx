import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Modal />
    </main>
  );
};

export default App;
