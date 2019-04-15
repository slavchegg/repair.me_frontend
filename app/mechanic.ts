import {User} from './user';
import {Service} from './service';

export class Mechanic extends User {
  post: string;
  about: string;
  isAdmin: boolean;
  isApproved: boolean;
  service: Service;
  serviceName: string
  makes: string[];
}
