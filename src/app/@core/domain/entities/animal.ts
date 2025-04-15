
export type AnimalProps = {
  animals: Animal[];
};

export class Animal {
  constructor(public props: AnimalProps) {}

  addAnimal(Animal: Animal) {
    this.props.animals.push(Animal);
  }

  clear() {
    this.props.animals = [];
  }

  get total() {
    return this.props.animals.reduce((total, Animal) => {
      return total + Animal.price;
    }, 0);
  }

  get animals() {
    return this.props.animals;
  }
}