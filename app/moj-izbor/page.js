import CartPage from "@/components/pages/CartPage";

export async function generateMetadata() {
  return {
    title: "Moj Izbor - Personalizujte Vašu Ponudu | GENNY",
    description:
      'Kreirajte svoju personalizovanu listu proizvoda na GENNY. Na stranici "Moj Izbor", pregledajte, uredite i pošaljite svoje favorite direktno nama za prilagođeni predračun. Bez obaveza, sa mogućnošću konsultacija, otkrijte kako GENNY može pomoći u realizaciji vašeg idealnog prostora. Pridružite se GENNY danas i započnite svoje putovanje ka savršenom domu ili poslovnom prostoru.',
  };
}

const KorpaPage = async () => {
  return (
    <main className="flex flex-col mt-[1rem] md:px-0 overflow-hidden">
      <CartPage />
    </main>
  );
};

export default KorpaPage;
