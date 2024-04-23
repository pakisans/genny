"use client";
import { memo, useState } from "react";
import emailjs from "@emailjs/browser";
import customToast from "@/lib/config/toast-config";

const KontaktForm = () => {
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    setSuccess("");
    if (!email) {
      setError("Molimo vas unesite vaš email");
      return;
    }
    if (!message) {
      setError("Molimo vas unesite poruku");
      return;
    }
    if (!mobileNumber) {
      setError("Molimo vas unesite vaš email");
      return;
    }
    const templateParams = {
      from_name: email,
      to_name: "GENNY",
      message,
      mobile: mobileNumber,
    };

    setError("");
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY
      )
      .then(
        function (response) {
          setEmail("");
          setMessage("");
          setMobileNumber("");
          setIsLoading(false);
          customToast.success(
            "Vaša poruka je uspešno poslana. Dobićete odgovor u najkraćem mogućem roku."
          );
          setSuccess(
            "Vaša poruka je uspešno poslana. Dobićete odgovor u najkraćem mogućem roku."
          );
        },
        function (error) {
          setError("Desila se greška pokušajte ponovo.");
          console.log(error);
          setIsLoading(false);
        }
      );
  };

  return (
    <form className="flex flex-col w-[35rem] gap-4">
      <label
        htmlFor="user_email"
        className="text-white text-[1.5rem] font-bold italic mx-auto"
      >
        Email
      </label>
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>
      <input
        id="user_email"
        className="bg-transparent text-white text-[1.6rem] text-center leading-[2.6rem] outline-none opacity-80 autocomplete-off"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>
      <label
        htmlFor="kontakt"
        className="text-white text-[1.5rem] font-bold italic  mx-auto"
      >
        Kontakt telefon
      </label>
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>
      <input
        id="kontakt"
        className="bg-transparent text-white text-[1.6rem] text-center leading-[2.6rem] outline-none opacity-80 autocomplete-off"
        type="text"
        name="kontakt"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>

      <label
        htmlFor="message"
        className="text-white text-[1.5rem] font-bold italic mx-auto"
      >
        Poruka
      </label>
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>
      <textarea
        id="message"
        className="bg-transparent text-white text-[1.6rem] text-center leading-[2.6rem] outline-none opacity-80 h-[8rem]"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>
      <button
        onClick={sendEmail}
        type="button"
        aria-label="Posalji"
        className="border-white min-w-[15rem] border opacity-60 text-white text-[1.6rem] px-[3rem] uppercase font-bold bg-transparent py-4 mt-5 rounded-full button-effect mx-auto hover:outer-glow hover:border-[#c09069] hover:text-browno"
      >
        {isLoading ? (
          <div className="animate-spin h-5 w-5 border-t border-gray-200 border-solid rounded-full mx-auto" />
        ) : success ? (
          "Poslano"
        ) : (
          "Pošalji"
        )}
      </button>
    </form>
  );
};

export default memo(KontaktForm);
