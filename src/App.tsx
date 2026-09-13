import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import type { Technology } from "./types/technology";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch technologies data.");
        }
        return res.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading technologies:", err);
        toast.error("Failed to load technologies data.");
        setIsLoading(false);
      });
  }, []);

  const handleAddTech = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        icon: "",
      });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  const handleRemoveTech = (id: string) => {
    const techToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    if (techToRemove) {
      toast.info(`Removed ${techToRemove.name} from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared all technologies from your stack.");
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-50 font-sans text-slate-900">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div>
        <Navbar />
        <Hero />

        <main className="mx-auto max-w-7xl px-6 py-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore the{" "}
            <span className="bg-[linear-gradient(135deg,#22d3ee,#2563eb,#4f46e5,#7c3aed)] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
          {isLoading ? (
            <div className=" flex flex-col items-center justify-center py-20">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
              <p className="mt-4 text-sm font-medium text-slate-600">
                Loading Technologies...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 py-10">
              <div className="lg:col-span-3">
                <TechnologyGrid
                  technologies={technologies}
                  selectedStack={selectedStack}
                  onAdd={handleAddTech}
                />
              </div>
              <div className="lg:col-span-1">
                <StackSidebar
                  stack={selectedStack}
                  onRemove={handleRemoveTech}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
