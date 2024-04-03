import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlight";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWork";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default App;
