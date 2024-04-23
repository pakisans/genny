import KontaktForm from "../forms/KontaktForm";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

const Footer = () => {
  return (
    <footer id="footer" className="mt-20 w-full h-full xl:h-[60rem]">
      <div className="border-fade h-[.2rem] w-full mx-auto"></div>
      <div className="flex">
        <div className="border-fade-b w-[.2rem] h-full"></div>
        <p className="text-browno text-[3.2rem] leading-[3.2rem] font-bold mx-auto pt-20 pb-[5rem]">
          KONTAKT
        </p>
        <div className="border-fade-b w-[.2rem] h-full"></div>
      </div>
      <div className="mt-[2rem] flex flex-col gap-10 3xl:gap-20 px-20 h-[40rem] xl:flex-row items-center">
        <div className="flex gap-10 flex-wrap items-center justify-center w-full xsm:w-auto">
          <p className="text-white italic text-[2rem] sm:text-[2.6rem] leading-[3.6rem] max-w-[30rem] text-left opacity-60">
            Bilo da imate pitanja ili želite da započnete saradnju, tu smo da
            saslušamo i odgovorimo. <br /> Pozovite nas ili popunite formular
            pored i naš tim će Vas kontaktirati u najkraćem mogućem roku.
          </p>
          <KontaktForm />
        </div>
        <div className="border-fade-b w-[.2rem] ml-10 h-full"></div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <p className="text-[1.8rem] text-browno">Informacije</p>
            <div className="border-fade h-[.1rem] w-full mx-auto mt-1"></div>
            <p className="mt-[1rem] text-[1.6rem] font-bold text-browno">
              <span className="text-white font-normal pr-[1rem] text-[1.2rem]">
                Ime kompanije:
              </span>
              GENNY
            </p>
            <p className="mt-[1rem] text-[1.6rem] font-bold text-browno">
              <span className="text-white font-normal pr-[1rem] text-[1.2rem]">
                MB:
              </span>
              67373391
            </p>
            <p className="mt-[1rem] text-[1.6rem] font-bold text-browno">
              <span className="text-white font-normal pr-[1rem] text-[1.2rem]">
                PIB:
              </span>
              114170378
            </p>

            <p className="text-browno text-[1.8rem] text-center mt-10">
              Kontakt
            </p>
            <div className="border-fade h-[.1rem] w-full mx-auto mt-2"></div>
            <a
              className="group text-white mt-[1rem] text-[1.4rem] flex items-center gap-3"
              href="mailto:office@genny.rs"
            >
              <MailIcon width={16} height={16} />
              <span className="group-hover:text-browno">office@genny.rs</span>
            </a>
            <a
              className="group text-white mt-[1rem] text-[1.4rem] flex items-center gap-3"
              href="tel:+381628459592"
            >
              <PhoneIcon width={16} height={16} color={"#deba8f"} />{" "}
              <span className="group-hover:text-browno">+381628459592</span>
            </a>
            <div className="">
              <p className="text-white mt-10 text-[1.2rem]">
                Zapratite nas na:
              </p>
              <div className="relative flex items-center gap-10 mt-5 justify-center">
                <div className="absolute top-5 -left-[20] w-[15rem] border-fade h-[.1rem]  mx-auto mt-1"></div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="z-[50]"
                  aria-label="Pogledajte našu instagram stranicu"
                >
                  <InstagramIcon width={30} height={30} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="z-[50]"
                  aria-label="Pogledajte našu facebook stranicu"
                >
                  <FacebookIcon width={23} height={23} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto xl:ml-auto xl:my-auto">
          <p className="text-white text-[1.8rem] w-fit text-right xl:my-auto ml-auto max-w-[20rem] opacity-70">
            Novi prostor, nove mogućnosti. Otkrijte uskoro na našoj novoj
            lokaciji!
          </p>
        </div>
      </div>
      <div className="border-fade mt-[10rem] h-[.2rem] w-full mx-auto hidden"></div>
    </footer>
  );
};

export default Footer;
