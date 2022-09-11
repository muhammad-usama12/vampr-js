class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  
  addOffspring(offspring) {
    this.offspring.push(offspring);
    offspring.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  
  numberOfOffspring(offspring) {
    this.offspring.push(offspring);
    offspring.creator = this;
  }
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  
  isMoreSeniorThan(vampire) {
    for (let v = 0; v < this.numberOfOffspring; v++) {
      if (vampire.name === this.offspring[v].name)
        return true;
    }
    return false;
  }
  
  






//   /** Stretch **/

//   // Returns the closest common ancestor of two vampires.
//   // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
//   // For example:
//   // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
//   // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
//   closestCommonAncestor(vampire) {

//   }

}

module.exports = Vampire;