export interface CategoryType {
  _id?: string;
  title: string;
  slug: string;
  description?: string;
  deletedAt?: Date | null;
  createdAt?: string;
  updatedAt?: string;
}

export type SubCategoryType = {
  _id: string;
  title: string;
  description?: string;
  slug: string;
  deletedAt: string | null;
  categoryParrentId: string | {
    _id: string;
    title: string;
    slug: string;
  };
  createdAt: string;
  updatedAt: string;
};

