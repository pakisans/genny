import ProductsPage from "@/components/products/ProductsPage";
import {
  getCategories,
  getCategory,
  getCategoryIDBySlug,
  getSubcategories,
} from "@/services/categoriesAPI";
import {
  getAttributes,
  getProductsByCategorySlug,
} from "@/services/productsAPI";

export async function generateMetadata({ params }) {
  const kategorije = {
    22: {
      title: "Granit",
      description:
        "Otkrijte našu selekciju granita visokog kvaliteta, idealnog za unutrašnje i spoljašnje prostore. Oplemenite svoj dom ili poslovni prostor sa našim granitom.",
    },
    23: {
      title: "Keramika",
      description:
        "Razgledajte našu ekskluzivnu kolekciju keramičkih pločica. Savršene za kuhinje, kupatila, i podove, naša keramika dodaje stil i dugotrajnost.",
    },
    19: {
      title: "Mermer",
      description:
        "Istražite našu ponudu visokokvalitetnog mermera. Sa bogatstvom boja i tekstura, naš mermer je savršen izbor za elegantne unutrašnje prostore.",
    },
    26: {
      title: "Podovi",
      description:
        "Otkrijte naše rešenja za podove, uključujući laminat, parket, i više. Transformišite svoje prostore sa našim trajnim i estetskim podnim rešenjima.",
    },
    27: {
      title: "Rasveta",
      description:
        "Razjasnite svoj dom sa našom kolekcijom rasvete. Od modernih do klasičnih stilova, naša rasveta će osvetliti svaki kutak vašeg prostora.",
    },
    24: {
      title: "Sanitarije",
      description:
        "Pronađite sve za vaše kupatilo, od lavaboa do tuš kabina. Naše sanitarije kombinuju funkcionalnost sa modernim dizajnom.",
    },
    25: {
      title: "Vrata",
      description:
        "Izaberite idealna vrata za vaš dom ili poslovni prostor. Naš asortiman uključuje raznovrsne stilove, od klasičnih do modernih, obezbeđujući sigurnost i stil.",
    },
    131: {
      title: "Đakuziji",
      description:
        "Opustite se i uživajte u luksuzu naših đakuzija. Sa modernim dizajnom i funkcionalnošću, naši đakuzii pružaju vrhunski doživljaj relaksacije.",
    },
    130: {
      title: "Kade",
      description:
        "Pregledajte našu ponudu kada raznih stilova i veličina. Naše kade su dizajnirane za udobnost i estetiku, idealne za vašu kupatilo.",
    },
    125: {
      title: "Pločice za Bazen",
      description:
        "Otkrijte našu selekciju pločica za bazen visokog kvaliteta. Naše pločice su otporne na vodu i klizanje, savršene za svaki bazen.",
    },
    129: {
      title: "Tuš Kabine",
      description:
        "Pronađite savršenu tuš kabinu za vaše kupatilo. Naša ponuda uključuje moderni dizajn i funkcionalnost, prilagođene svakom prostoru.",
    },
    132: {
      title: "Saune",
      description:
        "Otkrijte našu vrhunsku ponudu sauna za vaš dom. Naše saune pružaju idealan način za opuštanje i detoksikaciju, poboljšavajući vaše zdravlje i dobrobit. Odaberite između različitih stilova i veličina koje odgovaraju vašim potrebama.",
    },
  };

  const category = params.category.toString();
  const categoryPromise = getCategoryIDBySlug(category);
  const [selectedCategory] = await Promise.all([categoryPromise]);

  const categoryInfo = kategorije[selectedCategory];

  if (!categoryInfo) {
    return {
      title: "GENNY - Kompletno rešenje za vaš prostor",
      description:
        "Otkrijte širok asortiman proizvoda za unapređenje vašeg unutrašnjeg i spoljašnjeg prostora. Od granita do mermera, GENNY nudi sve što vam je potrebno.",
    };
  }

  return {
    title: `GENNY ${categoryInfo.title} - Unapredite svoj prostor`,
    description: categoryInfo.description,
  };
}

const ProductsByCategoryPage = async (context) => {
  const { params } = context;
  const { category } = params;
  const {
    page = 1,
    per_page = 50,
    attribute,
    attribute_term,
    subCategory,
  } = context.searchParams;
  const categoriesPromise = getCategories();
  const productsPromise = getProductsByCategorySlug(
    category,
    attribute,
    attribute_term,
    page,
    per_page
  );

  const categoryPromise = getCategoryIDBySlug(category);
  const subCategoryPromise = getCategory(subCategory);
  const attributesPromise = getAttributes();

  const [
    categories,
    productsData,
    selectedCategoryId,
    selectedSubCategory,
    attributes,
  ] = await Promise.all([
    categoriesPromise,
    productsPromise,
    categoryPromise,
    subCategoryPromise,
    attributesPromise,
  ]);
  const subCategoriesPromise = getSubcategories(selectedCategoryId);
  const selectedCategoryPromies = getCategory(selectedCategoryId);
  const [selectedCategory, subCategories] = await Promise.all([
    selectedCategoryPromies,
    subCategoriesPromise,
  ]);

  const { products, totalProducts } = productsData;

  return (
    <>
      <main className="flex flex-col mt-[1rem] md:px-0 overflow-hidden">
        <ProductsPage
          products={products}
          categoryId={selectedCategoryId}
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          attributes={attributes}
          totalProducts={totalProducts}
          subCategories={subCategories}
        />
      </main>
    </>
  );
};

export default ProductsByCategoryPage;
