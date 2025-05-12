"use client";
import { useState } from "react";
import { useTranslate } from "@tolgee/react";

export default function ContactForm() {
  const { t } = useTranslate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function validate() {
    const errs: { [key: string]: string } = {};
    if (!form.name) errs.name = t("contact_name") + " required";
    if (!form.email) errs.email = t("contact_email") + " required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message) errs.message = t("contact_message") + " required";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [e.target.name]: _removed, ...rest } = errors;
    setErrors(rest);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus("idle");
      return;
    }
    setStatus("success"); // Placeholder for now
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex flex-col gap-4 p-8 border-4 border-black bg-[#f7f7f7] brutalist-shadow"
      style={{ boxShadow: "8px 8px 0 #000" }}
    >
      <label className="font-bold brutalist-shadow">
        {t("contact_name")}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border-2 border-black bg-white text-black font-mono focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.name && <span className="text-red-600 text-xs brutalist-shadow">{errors.name}</span>}
      </label>
      <label className="font-bold brutalist-shadow">
        {t("contact_email")}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border-2 border-black bg-white text-black font-mono focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.email && <span className="text-red-600 text-xs brutalist-shadow">{errors.email}</span>}
      </label>
      <label className="font-bold brutalist-shadow">
        {t("contact_message")}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full mt-1 p-2 border-2 border-black bg-white text-black font-mono focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.message && <span className="text-red-600 text-xs brutalist-shadow">{errors.message}</span>}
      </label>
      <button
        type="submit"
        className="mt-4 px-6 py-3 bg-black text-white font-extrabold text-lg border-2 border-black brutalist-shadow hover:bg-white hover:text-black transition-colors"
        style={{ boxShadow: "4px 4px 0 #000" }}
      >
        {t("contact_submit")}
      </button>
      {status === "success" && (
        <div className="text-green-700 font-bold mt-2 brutalist-shadow">{t("contact_success")}</div>
      )}
      {status === "error" && (
        <div className="text-red-700 font-bold mt-2 brutalist-shadow">{t("contact_error")}</div>
      )}
    </form>
  );
} 