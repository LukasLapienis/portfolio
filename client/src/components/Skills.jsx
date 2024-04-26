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

export const Skills = () => {
  // function getAllSubsets(array) {
  //   const target = 10000;
  //   const subsets = [[]];
  //   let counter = 1;
  //   let isTrue = false;
  //   for (let i = 0; i < array.length; i++) {
  //     const currentLength = subsets.length;
  //     const currentCount = counter;
  //     for (let j = 0; j < currentLength; j++) {
  //       const subset = subsets[j].concat(array[i]);
  //       subsets.push(subset);
  //       counter = counter + 1;
  //       let sum = 0;

  //       for (let numberCount = 0; numberCount < subset.length; numberCount++) {
  //         sum += subset[numberCount];
  //       }
  //       // console.log(sum);
  //       if (sum === target) {
  //         isTrue = true;
  //         break;
  //       }
  //     }
  //     if (isTrue) {
  //       break;
  //     }
  //   }
  //   console.log(subsets);
  //   console.log(counter);
  //   return subsets;
  // }

  // const inputArray = [1, 2, 3];
  // const combinations = getAllSubsets(inputArray);
  // // console.log(combinations);

  function getCombinations(valuesArray) {
    var combi = [];
    var temp = [];
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
      temp = [];
      for (var j = 0; j < valuesArray.length; j++) {
        if (i & Math.pow(2, j)) {
          temp.push(valuesArray[j]);
        }
      }
      if (temp.length > 0) {
        combi.push(temp);
      }
    }

    // combi.sort((a, b) => a.length - b.length);
    // console.log(combi.join('\n'));
    return combi;
  }

  console.log(getCombinations([3, 2, 1]));

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
  ];

  return (
    <section id="skills" className="flex flex-col gap-4 ">
      <h3 className="text-teal-600 text-2xl">Skills</h3>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {skills.map((img) => {
          return (
            <div
              key={img.name}
              className="rounded-md duration-1000 hover:bg-gray-400 hover:text-teal-600 hover:scale-110 selection:w-20 h-24 flex flex-col items-center justify-between p-1"
            >
              <h4>{img.name}</h4>
              <div>
                <img src={img.src} className="w-16 h-16"></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
