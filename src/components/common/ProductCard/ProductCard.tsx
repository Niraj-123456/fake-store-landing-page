import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ProductCardProps = {
  header?: ReactNode;
  image?: ReactNode;
  content: ReactNode;
  actions?: ReactNode;
  className?: string;
};

const ProductCard = ({
  header,
  image,
  content,
  actions,
  className,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "border border-gray-200 rounded-sm overflow-hidden w-full flex flex-col",
        className
      )}
    >
      {header && header}
      {image && image}
      <div className="p-4">{content}</div>
      {actions && actions}
    </div>
  );
};

export default ProductCard;
