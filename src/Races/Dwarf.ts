import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static instancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instancesQuantity += 1;
  }

  static createdRacesInstances(): number {
    return this.instancesQuantity;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }
}
export default Dwarf;