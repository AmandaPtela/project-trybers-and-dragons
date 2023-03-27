import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  type_: EnergyType;
  static instancesQuantity = 0;

  constructor(name: string) {
    super(name);
    this.type_ = 'stamina';
    Ranger.instancesQuantity += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instancesQuantity;
  }

  get energyType() {
    return this.type_;
  }
}
export default Ranger;