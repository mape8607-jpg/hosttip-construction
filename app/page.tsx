import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Why from "@/components/why";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Process />
        <Services />
        <Projects />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
