import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Education />
      <Experience/>
      <Projects />
      <Footer />
    </main>
  );
}