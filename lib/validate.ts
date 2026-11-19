export type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function validate(d: Record<string, string>): Errors {
  const e: Errors = {};
  if (!d.name || d.name.trim().length < 2) e.name = "Нэрээ оруулна уу.";
  const digits = (d.phone || "").replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 12) e.phone = "Зөв утасны дугаар оруулна уу (8 оронтой).";
  if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) e.email = "И-мэйл хаяг буруу байна.";
  if (!d.message || d.message.trim().length < 10) e.message = "Хүсэлтээ дор хаяж 10 тэмдэгтээр бичнэ үү.";
  return e;
}
