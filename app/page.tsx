import Hero from "./Hero/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <About />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </main>
  );
}