import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skills } from './Skills';

export const Main = () => {
  return (
    <main className="flex w-full flex-col gap-6 bg-gray-100 p-10">
      <h2 className="place-self-center pt-20 text-2xl">
        Hello I'm Lukas Lapienis, Software Developer
      </h2>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};
