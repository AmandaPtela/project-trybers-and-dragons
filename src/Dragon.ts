import Monster from './Monster';

class Dragon extends Monster {
  protected _lifePoints: number;
  constructor(name: string) {
    super(name);
    this._lifePoints = 999;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  log() {
    console.log(this.lifePoints);
  }
}
export default Dragon;