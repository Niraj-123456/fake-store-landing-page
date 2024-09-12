import ProductCard from "@/components/common/ProductCard/ProductCard";
import AppleWatch from "../../../assets/images/products/apple-watch.jpg";
import HorizontalSlider from "@/components/common/HorizontalSlider/HorizontalSlider";

const FeaturedProducts = () => {
  return (
    <section id="products" className="w-full">
      <h2 className="text-3xl font-bold">Explore Our Collections</h2>

      <HorizontalSlider name="collections">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <ProductCard
            className="w-64 flex flex-1"
            key={index}
            image={
              <img
                src={AppleWatch}
                alt="apple-watch"
                className="w-full h-full object-contain object-center"
              />
            }
            content={
              <div>
                <p>Apple Watch 3</p>
                <p className="text-sm pt-2 text-gray-500">$499.99</p>
              </div>
            }
          />
        ))}
      </HorizontalSlider>
    </section>
  );
};

export default FeaturedProducts;
