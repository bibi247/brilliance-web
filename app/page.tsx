import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import World from "@/components/World";
import Experiences from "@/components/Experiences";
import Edit from "@/components/Edit";
import Journeys from "@/components/Journeys";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Intro />
      <Effects />
      <Nav />
      <main id="main">
        <Hero />
        <Story />
        <World />
        <Experiences />
        <Edit />
        <Journeys />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
