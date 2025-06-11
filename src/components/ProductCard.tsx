import React from 'react';
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import type { ProductCardProp } from '../types/productTypeProp';

const ProductCard: React.FC<ProductCardProp> = ({
  image,
  name,
  price,
  originalPrice,
  discountPercent,
  rating,
  reviewCount,
}) => {
  const renderStars = () => {
    const stars = [];
    let r = rating;
    for (let i = 0; i < 5; i++) {
      if (r >= 1) {
        stars.push(<FaStar key={i} />);
      } else if (r >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
      r -= 1;
    }
    return stars;
  };

  return (
    <div className="w-full max-w-xs bg-white rounded-md shadow-sm p-2 relative group  ">
      {/* giảm giá */}
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded mt-1 ml-1">
        -{discountPercent}%
      </span>

      {/* icon */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 mt-1 mr-1">
        <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
          <FiHeart className="text-gray-700" />
        </button>
        <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
          <FiEye className="text-gray-700" />
        </button>
      </div>

      {/* Product image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain mb-2"
      />

      {/* nút aadd to Cart  */}
      <button className="bg-black text-white w-full text-sm py-1 rounded-sm hover:bg-gray-800 transition">
        Add To Cart
      </button>

      {/*  Name */}
      <h3 className="text-sm font-medium mt-2">{name}</h3>

      {/* Price */}
      <div className="text-sm mt-1">
        <span className="text-red-600 font-semibold mr-2">${price}</span>
        <span className="line-through text-gray-400">${originalPrice}</span>
      </div>

      {/* Rating */}
      <div className="flex items-center text-yellow-500 text-xs mt-1">
        {renderStars()}
        <span className="text-gray-500 text-xs ml-1">({reviewCount})</span>
      </div>
    </div>
  );
};

export default ProductCard;
