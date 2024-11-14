import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import { Navbar } from "@/components/Navbar/Navbar";
import Model from "@/components/Model/Model";
import Features from "@/components/Features/Features";
import Chip from "@/components/Chip/Chip";

const Home = () => {
  return (
    <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <Chip />
    </main>
  )
};

export default Home;
