import Monster from './Monster';

class Dragon extends Monster {
  name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
    this._lifePoints = 999;
  }
}
export default Dragon;