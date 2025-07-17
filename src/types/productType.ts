import type { brandType } from "./brandType";
import type { SubCategoryType } from "./categoryType";

export type ProductVariant = {
  size: "S" | "M" | "L" | "XL" | "XXL";
  color: "Red" | "Blue" | "Green" | "Black" | "White" | "Orange";
  price: number;
  stock: number;
  sku: string;
  images: string[];
};

export type ProductType = {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  shortDescription: string;
  specifications: Record<string, string>;
  priceDefault: number;
  slug: string;
  brand:  brandType    // nếu populate thì là object
  subCategory: SubCategoryType   // nếu populate thì là object
  soldCountTotal: number;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  variants: ProductVariant[];
  deletedAt?: string | null;
  deletedBy?: string | null;
  createdAt: string;
  updatedAt: string;
};
