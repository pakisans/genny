import HomeLayout from "@/components/layout/HomeLayout";
import { getCategories } from "@/services/categoriesAPI";

async function getPdfs() {
  try {
    const response = await fetch(`https://api.genny.rs/wp-json/wp/v2/home`);

    const pdfs = await response.json();
    return pdfs;
  } catch (e) {
    console.log(e);
    return [];
  }
}
async function getImages() {
  try {
    const response = await fetch(
      `https://api.genny.rs/wp-json/wp/v2/homeimage`
    );

    const images = await response.json();
    return images;
  } catch (e) {
    console.log(e);
    return [];
  }
}
export default async function Home() {
  const categoriesPromise = getCategories();
  const pdfsPromise = getPdfs();
  const imagesPromise = getImages();
  const [categories, pdfs, images] = await Promise.all([
    categoriesPromise,
    pdfsPromise,
    imagesPromise,
  ]);

  return (
    <>
      <main className="flex flex-col mt-[1rem] md:px-0 overflow-hidden">
        <HomeLayout
          homeImages={images}
          homeData={pdfs}
          categories={categories}
        />
      </main>
    </>
  );
}
