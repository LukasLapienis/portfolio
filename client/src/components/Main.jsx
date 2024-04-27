import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skills } from './Skills';

export const Main = () => {
  return (
    <main className="bg-gray-100 p-10 flex flex-col gap-6 w-full">
      <h2 className="pt-20 place-self-center text-2xl">
        Hello I'm Lukas Lapienis, Software Developer
      </h2>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};
