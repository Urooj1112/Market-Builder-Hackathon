import Footer from "@/components/Home/Footer1";
import SecondHeader from "@/components/Home/SecondHeader";
import NavBar from "@/components/Shop/NavBar";
import ShopCard from "@/components/Shop/ShopCard";
import ResultsHeader from "@/components/Shop/ResultsHeader";
import Logo from "@/components/Shop/Logo";
import Items from "@/components/Shop/ShopProduct"; 
export default function Home() {
  return (
    <div>
        <NavBar />
        <SecondHeader />
        <ShopCard />
        <ResultsHeader />
        <Items />
      <Logo />
      <Footer />
    </div>
  );
}
