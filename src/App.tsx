import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
// import Footer from "./components/Footer";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };
  const handleRemoveFromStack = (id: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info("Item removed from stack.");
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("Removed all items from stack.");
  };

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

        {loading ? (
          <div className="py-20 text-center text-lg font-semibold text-slate-600">
            Loading technologies...
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddToStack}
                  isAdded={selectedStack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>
            <div className="lg:col-span-1">
              <StackSidebar
                stack={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
