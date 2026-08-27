"use client";

import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  const { title, image, price, discount, ratings, reviews, sold } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <figure className="relative aspect-[4/3] bg-base-200">
        <Image
          width={200}
          height={150}
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />

        {discount > 0 && (
          <span className="badge badge-error badge-sm text-white absolute top-2 left-2">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-3 gap-2">
        {/* Title */}
        <h2 className="font-semibold text-sm leading-5 line-clamp-2 min-h-10">
          {title}
        </h2>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-1.5 text-xs">
          <div className="flex items-center gap-1 text-warning">
            <FaStar className="text-xs" />

            <span className="font-medium text-base-content">
              {ratings.toFixed(1)}
            </span>
          </div>

          <span className="text-base-content/50">
            ({reviews})
          </span>
        </div>

        {/* Sold */}
        <div className="text-xs text-base-content/50">
          {sold} sold
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice.toLocaleString()}
          </span>

          {discount > 0 && (
            <span className="text-xs text-base-content/40 line-through">
              ৳{price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="btn btn-primary btn-sm w-full min-h-8 h-8 text-xs"
        >
          <FaShoppingCart className="text-xs" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
