import Race from './Race';

abstract class Orc extends Race {
  private _maxLifePoints: number;
  static instancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.createdRacesInstances();
  }

  static createdRacesInstances(): void {
    this.instancesQuantity += 1;
  }

  get maxLifePoint() {
    return this._maxLifePoints;
  }
}
export default Orc;