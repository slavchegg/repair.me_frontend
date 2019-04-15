export class User {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  mail: string;
  phone: string;
  password: string;
  photoHref: string = 'image/users/Default avatar.png';
  role: string = 'guest';
}
