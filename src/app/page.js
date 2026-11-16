import Banner from "@/Components/Banner";
import FeaturedDress from "@/Components/FeaturedDress";
import FeaturedMakup from "@/Components/FeaturedMakup";
import FeaturedShoes from "@/Components/FeaturedShoes";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    <Banner></Banner>
    <Suspense>
      <FeaturedDress></FeaturedDress>
    </Suspense>
    <Suspense>
      <FeaturedShoes></FeaturedShoes>
    </Suspense>
    <Suspense>
      <FeaturedMakup></FeaturedMakup>
    </Suspense>
    <Footer></Footer>
    </div>
  );
}
