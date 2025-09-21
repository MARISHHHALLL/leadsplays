export type SanitySlug = {
  _type: "slug";
  current: string;
};

export type SanityReference = {
  _type: "reference";
  _ref: string;
};

export type SanityImageAssetRef = {
  _type: "reference";
  _ref: string;
};

export type SanityImage = {
  _type: "image";
  asset: SanityImageAssetRef;
  alt?: string;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt?: string;
  title: string;
  slug: SanitySlug;
  author?: SanityReference;
  mainImage?: SanityImage;
};

export type PostListItem = Pick<
  Post,
  "_id" | "title" | "slug" | "_createdAt"
> & {
  mainImage?: SanityImage;
};

export type PerkCategory = {
  _id: string;
  _type: "perkCategory";
  name: string;
  slug: SanitySlug;
  description?: string;
  color?: string;
  order?: number;
};

export type Perk = {
  _id: string;
  _type: "perk";
  title: string;
  slug: SanitySlug;
  shortDescription: string;
  longDescription?: any[];
  logo: SanityImage;
  dealValue: string;
  claimUrl?: string;
  featured?: boolean;
  publishedAt: string;
  category: PerkCategory;
};

export type PerkListItem = Pick<
  Perk,
  | "_id"
  | "title"
  | "slug"
  | "shortDescription"
  | "logo"
  | "dealValue"
  | "claimUrl"
  | "featured"
  | "publishedAt"
> & {
  category: Pick<PerkCategory, "_id" | "name" | "slug">;
};
