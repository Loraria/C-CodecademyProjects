// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Specimen factory function that takes two parameters
const pAequorFactory =(specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
      //select random base in dna property
      const randDnaBase = Math.floor(Math.random() * 15);
      //change current base to random different base
      let mutatedDnaBase = '';
        do {
          mutatedDnaBase = returnRandBase();
        } while (dna[randDnaBase] === mutatedDnaBase);
      //return mutated dna
      dna.splice(randDnaBase,1,mutatedDnaBase);
      return this.dna;
    },

    compareDNA(pAequor){
      const ex1 = pAequor.dna;
      const ex2 = this.dna;
      let identicalBases = 0;
      for(let i=0; i<ex1.length-1;i++){
        if (ex2[i]===ex1[i]){
          identicalBases ++;
        }
      }
      const percentage = Math.floor((identicalBases/15)*100) ;
      console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common`);
    },

    willLikelySurvive(){
      let numOfcandG = 0;
      for(let i=0; i<this.dna.length -1; i++){
        if(this.dna[i]=== 'C'|| this.dna[i]==='G'){
          numOfcandG ++;
        }
      }
      const survivalPercentage = Math.floor((numOfcandG/15)*100);
      let likelyhood = false;
      if(survivalPercentage>=60){
        likelyhood = true;
      } else {
        likelyhood = false;
      }
      return likelyhood;
    },
    complementStrand(){
      let complementDnaStrand = [];
      for(let i=0; i<this.dna.length -1; i++){
        switch(this.dna[i]){
          case 'A':
            complementDnaStrand.push('T');
            break;
          case 'T':
            complementDnaStrand.push('A');
            break;
          case 'C':
            complementDnaStrand.push('G');
            break;
          case 'G':
            complementDnaStrand.push('C');
            break;
        }
      }
      return complementDnaStrand;
    }

  }
};
//create array with 30 amount of specimen instances
const studyArray = [];
for(i=0; i<=30; i++){
  let newDna = mockUpStrand();
  let newSpecimen = pAequorFactory(i,newDna);
  studyArray.push(newSpecimen);
}
console.log(studyArray);

//extra challenge!: use the .compareDNA() to find the two most related instances of pAequor



//stuff to test functionality:
//const newDna = ['C','G','C','C','C','G','C','C','C','G','C','C','C','G','C'];
//const newOrganism = pAequorFactory(1, newDna);
//const anotherDna = mockUpStrand();
//const anotherOrganism = pAequorFactory(2, anotherDna);
//anotherOrganism.compareDNA(newOrganism);
//console.log(newOrganism.willLikelySurvive());


