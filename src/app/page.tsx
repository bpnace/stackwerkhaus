"use client";
import { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import ContactForm from "../components/ContactForm";
import { GooeyText } from "../components/GooeyText";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export default function Home() {
  // const [lang, setLang] = useState("en");
  // const handleLangChange = (lng: string) => {
  //   setLang(lng);
  //   i18n.changeLanguage(lng);
  // };

  return (
    <I18nextProvider i18n={i18n}>
      {/* Removed obsolete language buttons */}
      <PageContent />
    </I18nextProvider>
  );
}

function PageContent() {
  // const { t } = useTranslation(); // Not needed for static words
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#f7f7f7] text-black p-0">
      {/* Hero Section */}
      <section
        className="w-full min-h-screen flex flex-col bg-black text-white border-b-8 border-black p-0 relative overflow-hidden"
        style={{
          backgroundImage: "url('/background2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Nav Bar */}
        <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-white/10"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-xl">SWH</div>
            <span className="ml-2 font-bold tracking-widest text-lg">Stackwerkhaus</span>
          </div>
          <ul className="flex gap-8 text-white font-mono text-base items-center">
            <li><LanguageSwitcher /></li>
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </nav>
        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center w-full"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <GooeyText
            texts={["Develop", "Design", "Deploy", "STACKWERKHAUS"]}
            className="w-full h-[120px] md:h-[180px] flex items-center justify-center"
            textClassName="font-extrabold uppercase tracking-tight text-6xl md:text-8xl w-full text-center left-0 right-0 mx-auto"
            morphTime={1.5}
            cooldownTime={1}
          />
        </div>
      </section>
      {/* Contact Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#fff] border-t-8 border-black">
        <h3 className="text-3xl font-extrabold mb-8 brutalist-shadow">
          Contact Us
        </h3>
        <ContactForm />
      </section>
    </div>
  );
}

// Tailwind brutalist shadow utility (add to globals.css or tailwind config if needed)
// .brutalist-shadow { text-shadow: 2px 2px 0 #000, 4px 4px 0 #fff; }
