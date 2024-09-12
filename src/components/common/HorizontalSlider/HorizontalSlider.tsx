import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

const HorizontalSlider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const defaultScrollValue = 400;

  const [chevronVisibility, setChevronVisibility] = useState({
    left: false,
    right: true,
  });

  useEffect(() => {
    const element = document.querySelector(`#slider-${name}`) as HTMLElement;
    if (!element) return;
    const handleHorizontalScroll = () => {
      const { scrollLeft } = element;

      if (scrollLeft === 0) {
        setChevronVisibility({
          left: false,
          right: true,
        });
      } else {
        setChevronVisibility({
          left: true,
          right: scrollLeft + element.clientWidth < element.scrollWidth,
        });
      }
    };

    element.addEventListener("scroll", handleHorizontalScroll);

    return () => {
      element.removeEventListener("scroll", handleHorizontalScroll);
    };
  }, [name]);

  const handleScrollHorizontal = (direction: "left" | "right") => {
    const element = document.querySelector(`#slider-${name}`) as HTMLElement;
    if (!element) return;
    const scrollAmount =
      direction === "right" ? defaultScrollValue : -defaultScrollValue;
    element.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Button
        disabled={!chevronVisibility?.left}
        onClick={() => handleScrollHorizontal("left")}
        className={cn(
          "absolute top-1/2 -left-4 translate-x-0 -translate-y-1/2 rounded-full w-8 h-8 p-1 transition-all duration-200 ease-in-out bg-[#ff7957] hover:bg-[#ff582e] hover:scale-105 disabled:opacity-0"
        )}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <div
        id={`slider-${name}`}
        key={name}
        className="grid overflow-auto mt-8 max-w-[84.15rem] hide-horizontal-scrollbar"
      >
        <div className="flex items-center gap-4 w-full">{children}</div>
      </div>

      <Button
        disabled={!chevronVisibility?.right}
        onClick={() => handleScrollHorizontal("right")}
        className={cn(
          "absolute top-1/2 -right-4 translate-x-0 -translate-y-1/2 rounded-full w-8 h-8 p-1 transition-all duration-200 ease-in-out bg-[#ff7957] hover:bg-[#ff582e] hover:scale-105 disabled:opacity-0"
        )}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default HorizontalSlider;
