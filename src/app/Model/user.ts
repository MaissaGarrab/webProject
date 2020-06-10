import {Answer} from './answer';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  image: string;
  answers: Answer[];


  constructor(id= 0, firstname= '', lastname= '', username= '', image= '', answers, email = '') {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.image = image;
    this.answers = answers;
    this.email = email;
  }
}