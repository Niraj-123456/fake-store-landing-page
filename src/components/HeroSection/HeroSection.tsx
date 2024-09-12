import { Button } from "../ui/button";
import { ArrowRightCircle } from "lucide-react";
import HeroImage from "../../assets/images/hero-image.webp";

const HeroSection = () => {
  return (
    <section
      id="#"
      className="w-full h-screen grid grid-cols-2 place-content-center -mt-24"
    >
      <div className="max-w-xl">
        <h1 className="text-bold">Ecommerce Langing Page Title</h1>
        <p className="py-6 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          quam, veritatis nostrum dolor tenetur dolorem possimus, totam deserunt
          recusandae repudiandae reprehenderit dolores mollitia ipsa porro, iure
          maiores sit corporis official!
        </p>

        <div className="mt-12">
          <Button
            size={"lg"}
            className="text-lg transition-all duration-200 ease-in-out hover:scale-110"
          >
            Start Shopping
            <ArrowRightCircle className="ml-2" />
          </Button>
        </div>
      </div>
      <div>
        <img
          src={HeroImage}
          alt="hero-image"
          className="aspect-video object-cover w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
