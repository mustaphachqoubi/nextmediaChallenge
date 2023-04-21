import {Navbar} from './components/Navbar.jsx'
import {HeroBar} from './components/HeroBar.jsx'
import {Candidates} from './components/Candidates.jsx'

function App() {
  return (
    <>
      <div className="bg-[#f8f9fc] ">
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="bg-slate-200 w-full h-[1.5px] mx-8" />
        </div>
        <HeroBar />
      </div>
      <Candidates />
    </>
  );
}

export default App;
