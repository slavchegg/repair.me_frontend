import {User} from './user';
import {Car} from './car' ;

export class Rrequest {
  car: Car;
  modification: string
  content: string;
  vin: number;
  sender: string;
  requestID: string;
}
