// export interface Contact {
//     name:string;
//     phone:number;
//     email:string;
//     // gender?:string;
// }

export class Contact {
    name:string;
    phone:number;
    email:string;
    gender:string;
  
    constructor(name:string, phone: number , email:string , gender:string) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.gender= gender;
    }
  }