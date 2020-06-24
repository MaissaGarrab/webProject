import {Answer} from './answer';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
  password: string;
  answers: Answer[];


  constructor(id= 0, first_name= '', last_name= '', username= '', image= '', answers, email = ''
  , password = '') {
    this.id = id;
    this.firstName = first_name;
    this.lastName = last_name;
    this.username = username;
    this.image = image;
    this.answers = answers;
    this.email = email;
    this.password = password;
  }
}
