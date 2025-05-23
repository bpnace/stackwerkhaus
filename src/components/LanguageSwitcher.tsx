"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = LANGS.find(l => l.code === i18n.language) || LANGS[0];
  const other = LANGS.filter(l => l.code !== current.code);
  const btnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative inline-block mr-4">
      <button
        ref={btnRef}
        className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center border-2 border-black hover:bg-gray-100 transition"
        onClick={() => setOpen(o => !o)}
        aria-label="Change language"
      >
        {current.label}
      </button>
      {open && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-2 w-20 rounded-lg shadow-lg bg-white border border-black z-50"
        >
          {other.map(lang => (
            <button
              key={lang.code}
              className="w-full px-4 py-2 text-black hover:bg-gray-200 text-center font-bold rounded-lg"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 