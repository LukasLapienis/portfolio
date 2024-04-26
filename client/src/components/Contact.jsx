import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-7 pt-24">
      <h3 className="text-teal-600 text-2xl">Contact</h3>
      <ContactForm />
    </section>
  );
};
