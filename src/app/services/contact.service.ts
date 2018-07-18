import { Injectable } from '@angular/core';
import {Contact} from'../model.contact';

@Injectable()
export class ContactService {
   constructor() { 
  }
  getContact(): Contact[]{
    let localsrotegeItem = JSON.parse(localStorage.getItem('names'));
    return localsrotegeItem ==null ? [] : localsrotegeItem.names;    
    }
  runo(){
    return this.getContact()
   }

  public addContact(name: string , phone:number , email:string ,gender:string) {
    let contact = new Contact(name , phone , email ,gender);
    let names =this.getContact(); 
    names.push(contact);
    this.setLocalStorageTodos(names); 
    return this.runo();
  }
  
  setLocalStorageTodos(names:Contact[]){
    localStorage.setItem('names', JSON.stringify({names:names}));
   }

  private getname(name:string){
    let names =this.getContact(); 
    for (let index = 0; index < names.length; index++) {
    if (names[index].name == name) {
    return index ;
    } 
    }
    return -1;
    }
    public remove(name:string){
    let names =this.getContact(); 
    var i = this.getname(name);
    names.splice(i , 1);
    this.setLocalStorageTodos(names);
   } 
}
