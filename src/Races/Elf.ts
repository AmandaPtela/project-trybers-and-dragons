import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instancesQuantity += 1;
  }

  static createdRacesInstances(): number {
    return this.instancesQuantity;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }
}
export default Elf;