import { getCategoryIDBySlug } from "./categoriesAPI";

export async function getProducts(
  category,
  attribute,
  attribute_term,
  page,
  per_page,
  subCategory
) {
  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wc/v3/products?category=${
        subCategory ? subCategory : category
      }&attribute=${attribute}&attribute_term=${attribute_term}&page=${page}&per_page=${per_page}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    const products = await response.json();
    const totalProducts = response.headers.get("X-WP-Total");

    return { products, totalProducts };
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getAttributes() {
  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wc/v3/products/attributes`,

      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    const attributes = await response.json();
    return attributes;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSingleProduct(
  category,
  attribute,
  attribute_term,
  subCategory
) {
  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wc/v3/products?category=${
        subCategory ? subCategory : category
      }&attribute=${attribute}&attribute_term=${attribute_term}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
        },
      }
    );

    const products = await response.json();

    const singleProduct = products.length > 0 ? products[0] : null;

    return singleProduct;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductsByCategorySlug(
  slug,
  attribute,
  attribute_term,
  page,
  per_page
) {
  const category = await getCategoryIDBySlug(slug);

  if (!category) {
    return { products: [], totalProducts: 0 };
  }

  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wc/v3/products?category=${category}&attribute=${attribute}&attribute_term=${attribute_term}&page=${page}&per_page=${per_page}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    const products = await response.json();

    const totalProducts = response.headers.get("X-WP-Total");

    return { products, totalProducts };
  } catch (error) {
    console.log(error);
    return { products: [], totalProducts: 0 };
  }
}
