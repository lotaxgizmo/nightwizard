import Header from "./components/Header";
import Hero from "./components/Hero";
import Howtobuy from "./components/Howtobuy";
import Tokenomics from "./components/Tokenomics";
import Underpackage from "./components/Underpackage";
import Welcomepackage from "./components/Welcomepackage";


function App() {
  return (
    <div className="App overflow-hidden">
      <Header />

      <Hero />

      <Welcomepackage />
      <Underpackage />
    </div>
  );
}

export default App;
