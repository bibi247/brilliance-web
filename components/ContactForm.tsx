"use client";
import { useState } from "react";
import { validate, type Errors } from "@/lib/validate";
import { EMAIL, PHONE_ALT, PHONE_MAIN } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error" | "unconfigured";

const SUBJECTS = ["Бүтээгдэхүүний талаар", "Хамтын ажиллагаа / B2B", "Салон үйлчилгээ", "Сургалт", "Бусад"];


export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function submit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector<HTMLElement>(`[name=${Object.keys(e)[0]}]`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); form.reset(); return; }
      if (res.status === 503) { setStatus("unconfigured"); return; }
      if (res.status === 422) { const j = await res.json().catch(() => ({})); setErrors(j.errors || {}); setStatus("idle"); return; }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const fallback = (
    <>
      Түргэн хариу авах бол <a href={PHONE_MAIN.href}>{PHONE_MAIN.label}</a>, <a href={PHONE_ALT.href}>{PHONE_ALT.label}</a> эсвэл{" "}
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a> хаягаар холбогдоорой.
    </>
  );

  const field = (name: keyof Errors | "subject", label: string, el: React.ReactNode) => (
    <div className={`field mb-6 ${name in errors && errors[name as keyof Errors] ? "has-error" : ""}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {el}
      {errors[name as keyof Errors] && <p className="mt-1.5 text-[12.5px] text-[#8c2f2f]" id={`e-${name}`}>{errors[name as keyof Errors]}</p>}
    </div>
  );
  const aria = (n: keyof Errors) => ({ "aria-invalid": !!errors[n] || undefined, "aria-describedby": errors[n] ? `e-${n}` : undefined });

  if (status === "success") {
    return (
      <div className="py-10" role="status">
        <p className="eyebrow text-taupe">Thank you</p>
        <p className="serif-display mt-4 text-[34px] leading-tight">Таны хүсэлт <em>хүлээн авлаа.</em></p>
        <p className="mt-3 text-muted">Бид ажлын цагаар эргэн холбогдоно.</p>
        <button className="eyebrow link-line mt-8 text-[10px]" onClick={() => setStatus("idle")}>Шинэ хүсэлт илгээх</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate aria-busy={status === "loading"}>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-px w-px opacity-0" aria-hidden />
      <div className="grid gap-x-7 sm:grid-cols-2">
        {field("name", "Нэр *", <input id="f-name" name="name" autoComplete="name" {...aria("name")} />)}
        {field("phone", "Утас *", <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" {...aria("phone")} />)}
      </div>
      <div className="grid gap-x-7 sm:grid-cols-2">
        {field("email", "И-мэйл", <input id="f-email" name="email" type="email" autoComplete="email" {...aria("email")} />)}
        {field("subject", "Сэдэв", (
          <select id="f-subject" name="subject" defaultValue={SUBJECTS[0]}>
            {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
          </select>
        ))}
      </div>
      {field("message", "Хүсэлт, асуулт *", <textarea id="f-message" name="message" rows={4} {...aria("message")} />)}

      <div aria-live="polite">
        {status === "unconfigured" && (
          <p className="mb-6 border-l border-espresso bg-espresso/5 px-5 py-4 text-[13.5px] leading-relaxed [&_a]:underline [&_a]:underline-offset-4">Онлайн хүсэлтийн холболт хараахан тохируулагдаагүй байна — таны хүсэлт илгээгдсэнгүй. {fallback}</p>
        )}
        {status === "error" && (
          <p className="mb-6 border-l border-espresso bg-espresso/5 px-5 py-4 text-[13.5px] leading-relaxed [&_a]:underline [&_a]:underline-offset-4">Илгээх үед алдаа гарлаа. Дахин оролдоно уу. {fallback}</p>
        )}
      </div>

      <button className="btn btn-dark mt-2 w-full" disabled={status === "loading"} data-magnetic>
        {status === "loading" ? <><span className="h-3.5 w-3.5 animate-spin rounded-full border border-ivory/30 border-t-ivory" aria-hidden /> Илгээж байна…</> : <>Хүсэлт илгээх <span aria-hidden>→</span></>}
      </button>
    </form>
  );
}
