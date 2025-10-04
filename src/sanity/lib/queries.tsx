import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, _createdAt, mainImage
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const PERKS_QUERY =
  defineQuery(`*[_type == "perk" && defined(slug.current)]{
  _id, title, slug, shortDescription, longDescription, logo, dealValue, claimUrl, featured, publishedAt,
  category->{_id, name, slug}
} | order(publishedAt desc)`);

export const PERKS_BY_CATEGORY_QUERY =
  defineQuery(`*[_type == "perk" && category._ref == $categoryId && defined(slug.current)]{
  _id, title, slug, shortDescription, logo, dealValue, claimUrl, featured, publishedAt,
  category->{_id, name, slug}
} | order(publishedAt desc)`);

export const PERK_QUERY =
  defineQuery(`*[_type == "perk" && slug.current == $slug][0]{
  _id, title, slug, shortDescription, longDescription, logo, dealValue, claimUrl, featured, publishedAt,
  category->{_id, name, slug}
}`);

export const PERK_CATEGORIES_QUERY =
  defineQuery(`*[_type == "perkCategory" && defined(slug.current)]{
  _id, name, slug, description, color, order
} | order(order asc, name asc)`);

export const FEATURED_PERKS_QUERY =
  defineQuery(`*[_type == "perk" && featured == true && defined(slug.current)][0...3]{
  _id, title, slug, shortDescription, logo, dealValue, claimUrl, publishedAt,
  category->{_id, name, slug}
} | order(publishedAt desc)`);

export const RELATED_PERKS_QUERY =
  defineQuery(`*[_type == "perk" && category._ref == $categoryId && slug.current != $currentSlug && defined(slug.current)][0...3]{
  _id, title, slug, shortDescription, logo, dealValue, claimUrl, publishedAt,
  category->{_id, name, slug}
} | order(publishedAt desc)`);

export const ALL_PERKS_QUERY =
  defineQuery(`*[_type == "perk" && defined(slug.current)]{
  _id, title, slug, shortDescription, logo, dealValue, claimUrl, featured, publishedAt,
  category->{_id, name, slug}
} | order(publishedAt desc)`);

export const RANDOM_PERKS_QUERY =
  defineQuery(`*[_type == "perk" && defined(slug.current)] | order(publishedAt desc)[0...30]{
  _id, title, slug, shortDescription, logo, dealValue, claimUrl, featured, publishedAt,
  category->{_id, name, slug}
}`);


