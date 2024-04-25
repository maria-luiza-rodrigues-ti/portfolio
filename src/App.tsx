import { ChevronDown } from "lucide-react";
import { ToggleThemeButton } from "./components/toggle-theme-button";
import { TechnologiesSlider } from "./components/technologies-slider";

function App() {
  return (
    <>
      <header className="flex item justify-between max-w-[80rem] mx-auto py-6 px-4 md:px-0">
        <h1 className="font-bold text-accent-content text-lg">
          Maria Luiza Rodrigues
        </h1>
        <nav>
          <ul className="flex gap-8 items-center text-sm">
            <li className="group relative">
              <a
                href="#"
                className=" text-sm font-semibold text-accent-foreground inline-block transition-all after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:block after:content-[''] after:bg-accent-foreground after:w-0 after:h-[2px] after:transition-all hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li className="group relative">
              <a
                href="#"
                className=" text-sm font-semibold text-accent-foreground inline-block transition-all after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:block after:content-[''] after:bg-accent-foreground after:w-0 after:h-[2px] after:transition-all hover:after:w-full"
              >
                Work
              </a>
            </li>
            <li className="group relative">
              <a
                href="#"
                className=" text-sm font-semibold text-accent-foreground inline-block transition-all after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:block after:content-[''] after:bg-accent-foreground after:w-0 after:h-[2px] after:transition-all hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <ToggleThemeButton />
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-[80rem] mx-auto px-4 md:px-0">
        <section className="flex flex-col justify-between items-center h-[calc(100vh-5.25rem)] text-center pt-56 pb-10">
          <h2 className="text-[3.5rem]/[150%] tracking-[-1.12px] font-light text-base-content/60">
            I'm a web developer specialist in
            <strong className="block font-semibold text-accent-content">
              Front-End Development
            </strong>
          </h2>

          <a href="#technologies">
            <ChevronDown size={40} />
          </a>
        </section>

        <section
          id="technologies"
          className="max-w-[80rem] mx-auto pt-20 pb-[8.125rem]"
        >
          <h3 className="text-left text-[2.5rem]/[150%] font-light max-w-[35rem] pb-20 text-base-content/60">
            Some of{" "}
            <strong className="font-semibold text-accent-content">
              the technologies that I work with
            </strong>
          </h3>
          <div className="flex justify-center">
            <TechnologiesSlider />
          </div>
        </section>

        <section>
          <h3 className="text-left text-[2.5rem]/[150%] font-light max-w-[35rem] pb-20 text-base-content/60">
            Selected{" "}
            <strong className="font-semibold text-accent-content">
              Projects
            </strong>
          </h3>

          <div>
            <img src="" alt="" />
            <h4>Título</h4>
            descrição
          </div>
        </section>
      </main>

      <footer className=" pt-20 pb-10 flex flex-col items-center">
        <h3 className="text-[3.5rem]/[150%] tracking-[-1.12px] font-light pb-1 text-base-content/60">
          Get{" "}
          <strong className="font-semibold text-accent-content">
            in Touch
          </strong>
        </h3>
        <p className="text-lg pb-[3.75rem] text-base-content/60">
          So that we can talk more about...
        </p>
        <div></div>
        <p className="text-sm pt-20 text-base-content/60">
          Design made with ❣️ by <strong>Srinivas Dezign</strong>
        </p>
      </footer>
    </>
  );
}

export default App;
