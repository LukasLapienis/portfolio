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
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="group rounded-md duration-1000 hover:bg-gray-400 hover:text-teal-600 hover:scale-110 selection:w-20 h-24 flex flex-col items-center justify-between p-1"
            >
              <h4>{skill.name}</h4>
              <div>
                <img
                  src={skill.src}
                  className=" w-16 h-16 opacity-50 group-hover:opacity-100"
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
