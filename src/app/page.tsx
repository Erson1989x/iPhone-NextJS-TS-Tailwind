import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import { Navbar } from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    </main>
  )
};

export default Home;
