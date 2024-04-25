import { ChevronDown } from "lucide-react";
import { ToggleThemeButton } from "./components/toggle-theme-button";

function App() {
  return (
    <>
      <header className="flex justify-between max-w-[80rem] mx-auto py-6 px-4 md:px-0">
        <h1 className="font-semibold">Maria Luiza Rodrigues</h1>
        <nav>
          <ul className="flex gap-8 items-center text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <ToggleThemeButton />
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-[80rem] mx-auto px-4 md:px-0">
        <section className="flex flex-col justify-between items-center h-[calc(100vh-5.25rem)] text-center pt-56 pb-10">
          <h2 className="text-[3.5rem]/[150%] tracking-[-1.12px] font-light">
            I'm a web developer specialist in
            <strong className="block font-semibold">
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
          <h3 className="text-left text-[2.5rem]/[150%] font-light max-w-[35rem] pb-20">
            Some of{" "}
            <strong className="font-semibold">
              the technologies that I work with
            </strong>
          </h3>
          <div className="flex justify-center"></div>
        </section>

        <section>
          <h3>
            Selected <strong>Projects</strong>
          </h3>

          <div>
            <img src="" alt="" />
            <h4>Título</h4>
            descrição
          </div>
        </section>
      </main>

      <footer className=" pt-20 pb-10 flex flex-col items-center">
        <h3 className="text-[3.5rem]/[150%] tracking-[-1.12px] font-light pb-1">
          Get <strong className="font-semibold">in Touch</strong>
        </h3>
        <p className="text-lg pb-[3.75rem]">
          So that we can talk more about...
        </p>
        <div></div>
        <p className="text-sm pt-20">
          Design made with ❣️ by <strong>Srinivas Dezign</strong>
        </p>
      </footer>
    </>
  );
}

export default App;
