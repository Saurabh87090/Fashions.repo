import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from  "@/components/Hero";
import About from "@/components/About";
import Review from "@/components/Review"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Features/>
      <About/>
      <Review/>
      <Footer/>
    </div>
  );
}
