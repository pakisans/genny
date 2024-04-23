export async function getCategories() {
  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wc/v3/products/categories?per_page=20&parent=0`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getCategory(categoryId) {
  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wc/v3/products/categories/${categoryId}`,

      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    if (!response.ok) {
      return null;
    }
    const selectedCategory = await response.json();

    return selectedCategory;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSubcategories(parentCategoryId) {
  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wc/v3/products/categories?per_page=25&parent=${parentCategoryId}&orderby=id&order=asc`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
          ).toString("base64")}`,
          "Cache-Control": "no-cache",
        },
      }
    );
    const subcategories = await response.json();
    return subcategories;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCategoryIDBySlug(slug) {
  try {
    const url = `https://api.genny.rs/wp-json/wc/v3/products/categories?slug=${slug}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
        ).toString("base64")}`,
        "Cache-Control": "no-cache",
      },
    });
    const categories = await response.json();

    return categories.length > 0 ? categories[0].id : null;
  } catch (error) {
    console.error("Error fetching category ID:", error);
    return null;
  }
}
