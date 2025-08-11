import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Me!",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Contact Me</h1>
      <ContactForm />
      <p className="mt-4 text-xs text-gray-400">
        Your message will be emailed to me.
      </p>
    </section>
  );
}
