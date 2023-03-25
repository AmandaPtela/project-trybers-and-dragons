import Race from './Race';

abstract class Halfling extends Race {
  private _maxLifePoints: number;
  static instancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.createdRacesInstances();
  }

  static createdRacesInstances(): void {
    this.instancesQuantity += 1;
  }

  get maxLifePoint() {
    return this._maxLifePoints;
  }
}
export default Halfling;