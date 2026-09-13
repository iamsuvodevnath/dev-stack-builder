import heroImage from "../assets/logos/hero.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Build Your Ideal <br />
            <span className="brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="brand-gradient rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity">
              Explore Technologies
            </button>
            <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/*  Hero Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="hero image"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
