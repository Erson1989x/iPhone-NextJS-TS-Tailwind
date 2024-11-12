import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import { Navbar } from "@/components/Navbar/Navbar";
import Model from "@/components/Model/Model";

const Home = () => {
  return (
    <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    </main>
  )
};

export default Home;
