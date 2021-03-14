import { Gender } from "./gender";
import { Address } from './address'
import { Career } from './career';

export type Profile = {
  name: String;
  description: string;
  birthday: string;
  gender: Gender;
  address: Address;
  careers: Career[];
}
