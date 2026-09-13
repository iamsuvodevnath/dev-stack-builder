
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";



function App() {
  

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
       <Hero />
       <main className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>


      </main>
    </div>
  );
}

export default App;