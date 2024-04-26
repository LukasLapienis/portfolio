import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skills } from './Skills';

export const Main = () => {
  return (
    <main className="bg-gray-200 p-10 flex flex-col gap-6 top-7 pt-20">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};
