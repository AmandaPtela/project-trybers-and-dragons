import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancesQuantity += 1;
  }

  static createdRacesInstances(): number {
    return this.instancesQuantity;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}
export default Orc;