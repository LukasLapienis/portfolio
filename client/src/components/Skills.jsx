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
    { src: './src/assets/skillsImages/css.png', name: 'css' },
    { src: './src/assets/skillsImages/javascript.png', name: 'Javascript' },
    { src: './src/assets/skillsImages/python.png', name: 'Python' },
    { src: './src/assets/skillsImages/react.png', name: 'React' },
    { src: './src/assets/skillsImages/agile.png', name: 'Agile' },
    { src: './src/assets/skillsImages/node.png', name: 'Node' },
    { src: './src/assets/skillsImages/mongodb.png', name: 'mongoDB' },
    { src: './src/assets/skillsImages/mysql.png', name: 'MySQL' },
    { src: './src/assets/skillsImages/html.png', name: 'html' },
    { src: './src/assets/skillsImages/firebase.png', name: 'firebase' },
  ];

  return (
    <section id="skills" className="flex flex-col gap-4 ">
      <h3 className="text-teal-600 text-2xl">Skills</h3>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {skills.map((img) => {
          return (
            <div className="rounded-md duration-1000 hover:bg-gray-400 hover:text-teal-600 hover:scale-110 selection:w-20 h-24 flex flex-col items-center justify-between p-1">
              <h4>{img.name}</h4>
              <div>
                <img key={img.name} src={img.src} className="w-16 h-16"></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
