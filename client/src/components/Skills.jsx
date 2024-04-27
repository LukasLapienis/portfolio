import css from './../assets/skillsImages/css.png';
import javascript from './../assets/skillsImages/javascript.png';
import python from './../assets/skillsImages/python.png';
import react from './../assets/skillsImages/react.png';
import agile from './../assets/skillsImages/agile.png';
import node from './../assets/skillsImages/node.png';
import mongodb from './../assets/skillsImages/mongodb.png';
import mysql from './../assets/skillsImages/mysql.png';
import html from './../assets/skillsImages/html.png';
import firebase from './../assets/skillsImages/firebase.png';
import git from './../assets/skillsImages/git.png';

export const Skills = () => {
   const skills = [
      { src: css, name: 'css' },
      { src: javascript, name: 'Javascript' },
      { src: python, name: 'Python' },
      { src: react, name: 'React' },
      { src: agile, name: 'Agile' },
      { src: node, name: 'Node' },
      { src: mongodb, name: 'mongoDB' },
      { src: mysql, name: 'MySQL' },
      { src: html, name: 'html' },
      { src: firebase, name: 'firebase' },
      { src: git, name: 'git' },
   ];

   return (
      <section id="skills">
         <h3>Skills</h3>
         <div className="flex flex-wrap items-center justify-center gap-4">
            {skills.map((skill) => {
               return (
                  <div
                     key={skill.name}
                     className="group flex h-24 flex-col items-center justify-between rounded-md p-1 duration-1000 selection:w-20 hover:scale-110 hover:bg-gray-400 hover:text-teal-600"
                  >
                     <h4>{skill.name}</h4>
                     <div>
                        <img
                           src={skill.src}
                           className=" h-16 w-16 opacity-80 group-hover:opacity-100"
                        ></img>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};
