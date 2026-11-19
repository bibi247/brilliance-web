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
    <div className={`field ${name in errors && errors[name as keyof Errors] ? "has-error" : ""}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {el}
      {errors[name as keyof Errors] && <p className="field__err" id={`e-${name}`}>{errors[name as keyof Errors]}</p>}
    </div>
  );
  const aria = (n: keyof Errors) => ({ "aria-invalid": !!errors[n] || undefined, "aria-describedby": errors[n] ? `e-${n}` : undefined });

  if (status === "success") {
    return (
      <div className="form-done" role="status">
        <p className="eyebrow">Thank you</p>
        <p className="display-s">Таны хүсэлт <em>хүлээн авлаа.</em></p>
        <p>Бид ажлын цагаар эргэн холбогдоно.</p>
        <button className="link-line" onClick={() => setStatus("idle")}>Шинэ хүсэлт илгээх</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate aria-busy={status === "loading"}>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />
      <div className="form__row">
        {field("name", "Нэр *", <input id="f-name" name="name" autoComplete="name" {...aria("name")} />)}
        {field("phone", "Утас *", <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" {...aria("phone")} />)}
      </div>
      <div className="form__row">
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
          <p className="form__note form__note--warn">Онлайн хүсэлтийн холболт хараахан тохируулагдаагүй байна — таны хүсэлт илгээгдсэнгүй. {fallback}</p>
        )}
        {status === "error" && (
          <p className="form__note form__note--warn">Илгээх үед алдаа гарлаа. Дахин оролдоно уу. {fallback}</p>
        )}
      </div>

      <button className="btn btn--dark form__submit" disabled={status === "loading"} data-magnetic>
        {status === "loading" ? <><span className="spinner" aria-hidden /> Илгээж байна…</> : <>Хүсэлт илгээх <span aria-hidden>→</span></>}
      </button>
    </form>
  );
}
