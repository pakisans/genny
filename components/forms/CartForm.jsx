import React, { useState, memo } from "react";
import emailjs from "@emailjs/browser";
import { useCart } from "../context/ShopCartContext";
import customToast from "@/lib/config/toast-config";

const CartForm = ({ artikalPodaci }) => {
  const { clearCart } = useCart();
  const [kontakt, setKontakt] = useState({
    ime: "",
    email: "",
    brojTelefona: "",
    poruka: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKontakt((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!kontakt.email || !kontakt.ime || !kontakt.brojTelefona) {
      setError("Molimo vas da popunite sva obavezna polja.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    let porukaIzKorpe = "Detalji narudžbine:\n";
    for (const [id, podaci] of Object.entries(artikalPodaci)) {
      porukaIzKorpe += `Artikal ID: ${id}, Model: ${podaci.name} Količina: ${podaci.kolicina}, Kvadratura: ${podaci.kvadratura}\n`;
    }

    const templateParams = {
      from_name: kontakt.ime,
      message: kontakt.poruka,
      email: kontakt.email,
      mobile: kontakt.brojTelefona,
      artikalPodaci,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_CART_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY
      )
      .then(
        (response) => {
          customToast.success("Vaša ponuda je poslata.");
          setIsLoading(false);
          setKontakt({
            ime: "",
            email: "",
            brojTelefona: "",
            poruka: "",
          });
          clearCart();
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Došlo je do greške prilikom slanja poruke.");
          setIsLoading(false);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col gap-4 mx-auto px-[2rem] sm:px-[12rem] md:px-0 w-full md:w-[40rem] mt-20 mb-10"
    >
      <input
        type="text"
        name="ime"
        value={kontakt.ime}
        onChange={handleChange}
        placeholder="Ime/Prezime"
        required
        className="bg-transparent text-white text-[1.6rem] w-full leading-[3.6rem] outline-none"
      />
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>

      <input
        type="email"
        name="email"
        value={kontakt.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="bg-transparent text-white text-[1.6rem] w-full leading-[3.6rem] outline-none"
      />
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>

      <input
        type="text"
        name="brojTelefona"
        value={kontakt.brojTelefona}
        onChange={handleChange}
        placeholder="Kontakt telefon"
        required
        className="bg-transparent text-white text-[1.6rem] w-full leading-[3.6rem] outline-none"
      />
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>

      <textarea
        name="poruka"
        value={kontakt.poruka}
        onChange={handleChange}
        placeholder="Poruka (opciono)"
        className="bg-transparent text-white text-[1.6rem] w-full leading-[3.6rem] outline-none"
      />
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>

      <button
        type="submit"
        disabled={isLoading}
        className="border-white min-w-[15rem] border opacity-60 text-white text-[1.6rem] px-[3rem] uppercase font-bold bg-transparent py-4 mt-5 rounded-full button-effect mx-auto hover:outer-glow hover:border-[#c09069] hover:text-browno"
      >
        {isLoading ? "Šalje se..." : "Pošalji"}
      </button>
      {error && <p className="error-text">{error}</p>}
    </form>
  );
};

export default memo(CartForm);
