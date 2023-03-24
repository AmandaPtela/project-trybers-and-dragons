abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number){ 
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(newRace: Race) {
    const instances = []
    instances.push(newRace);
    const instancesQuantity = instances.length;
    if(!newRace) throw new Error('Not implemented');
    return instancesQuantity;
  }

  abstract get maxLifePoints(): number;
};
export default Race;