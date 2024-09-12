import { useEffect, useState } from "react";
import About from "../About/About";
import HeroSection from "../HeroSection/HeroSection";
import FeaturedProducts from "../Products/FeaturedProducts/FeaturedProducts";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import Faq from "../Faq/Faq";

const Home = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const scrollDirection = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const navbar = document.querySelector("#navbar");
      if (!navbar) return;

      if (scrollTop > lastScrollTop) {
        navbar?.classList.add("slide-down");
        navbar?.classList.remove("slide-up");
      } else {
        navbar?.classList.remove("slide-down");
        navbar?.classList.add("slide-up");
      }

      setLastScrollTop(scrollTop);
    };

    document.addEventListener("scroll", scrollDirection);

    return () => {
      document.removeEventListener("scroll", scrollDirection);
    };
  }, [lastScrollTop]);
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <About />
      <WhatWeOffer />
      <Faq />
    </>
  );
};

export default Home;
