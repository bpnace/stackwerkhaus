"use client";
import { TolgeeProvider, tolgee } from "./i18n";
import ContactForm from "../components/ContactForm";
import { GooeyText } from "../components/GooeyText";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { T } from "@tolgee/react";
import { PortfolioHighlights, Project } from "../components/PortfolioHighlights";

export default function Home() {
  // const [lang, setLang] = useState("en");
  // const handleLangChange = (lng: string) => {
  //   setLang(lng);
  //   i18n.changeLanguage(lng);
  // };

  return (
    <TolgeeProvider tolgee={tolgee} fallback="Loading...">
      {/* Removed obsolete language buttons */}
      <PageContent />
    </TolgeeProvider>
  );
}

function PageContent() {
  // const { t } = useTranslation(); // Not needed for static words
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      image: "/projects/ecommerce.png",
      description: "A scalable, modern e-commerce solution for SMBs.",
      tech: ["Next.js", "Stripe", "Tailwind"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      image: "/projects/portfolio.png",
      description: "A personal portfolio with brutalist design and localization.",
      tech: ["React", "Tolgee", "Vercel"],
      link: "#"
    },
    {
      title: "SaaS Dashboard",
      image: "/projects/saas.png",
      description: "A dashboard for SaaS analytics and user management.",
      tech: ["TypeScript", "Node.js", "Prisma"],
      link: "#"
    },
    {
      title: "Mobile App UI Kit",
      image: "/projects/mobile.png",
      description: "A cross-platform UI kit for rapid mobile app prototyping.",
      tech: ["Expo", "React Native", "Figma"],
      link: "#"
    }
  ];
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
            <img src="/logo2.svg" alt="Stackwerkhaus Logo" className="w-100 h-10 object-contain text-white" />
          </div>
          <ul className="flex gap-8 text-white font-mono text-base items-center">
            <li><LanguageSwitcher /></li>
            <li className="hover:underline cursor-pointer"><T keyName="home" defaultValue="Home" /></li>
            <li className="hover:underline cursor-pointer"><T keyName="about" defaultValue="About" /></li>
            <li><a href="#contact" className="hover:underline cursor-pointer"><T keyName="contact_title" defaultValue="Contact" /></a></li>
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
      {/* Portfolio Section */}
      <PortfolioHighlights projects={projects} />
      {/* Contact Section */}
      <section id="contact" className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#fff] border-t-8 border-black">
        <h3 className="text-3xl font-extrabold mb-8 brutalist-shadow">
          <T keyName="contact_title" />
        </h3>
        <ContactForm />
      </section>
    </div>
  );
}

// Tailwind brutalist shadow utility (add to globals.css or tailwind config if needed)
// .brutalist-shadow { text-shadow: 2px 2px 0 #000, 4px 4px 0 #fff; }
