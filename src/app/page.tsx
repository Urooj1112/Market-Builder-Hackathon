import Footer from "@/components/Home/Footer1";
import FirstHeader from "@/components/Home/FirstHeader";
import SecondHeader from "@/components/Home/SecondHeader";
import Herosection from "@/components/Home/HeroSection";
import Card from "@/components/Home/Editor";
import Vite from "@/components/Home/Vite";
import PartNeuralPage from "@/components/Home/PartNeuralPage";
import BestProduct from "@/components/Home/BestProducts";
import FeaturedPosts from "@/components/Home/FeaturedPost";
import Items from "@/components/Home/Products";
export default function Home() {
  return (
    <div>
        <FirstHeader/>
        <SecondHeader/>
      <Herosection/>
      <Card/>
     <BestProduct/>
     <Items/>
      <Vite/>
      <PartNeuralPage/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
}
