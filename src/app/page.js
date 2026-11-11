import Banner from "@/Components/Banner";
import FeaturedDress from "@/Components/FeaturedDress";
import FeaturedMakup from "@/Components/FeaturedMakup";
import FeaturedShoes from "@/Components/FeaturedShoes";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    <Banner></Banner>
    <FeaturedDress></FeaturedDress>
    <FeaturedShoes></FeaturedShoes>
    <FeaturedMakup></FeaturedMakup>
    <Footer></Footer>
    </div>
  );
}
