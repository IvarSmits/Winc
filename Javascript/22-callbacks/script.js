const huiswerkMaken = (vak, callback) => {
  console.log(`ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
  setTimeout(function () {
    callback();
  }, 2000);
};

const klaarMetHuiswerk = () => {
  console.log("kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskune", klaarMetHuiswerk);
