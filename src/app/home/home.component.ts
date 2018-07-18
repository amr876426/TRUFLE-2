import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core'; 
import { Contact } from './../model.contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contacts:Contact[];
  searchContact:Contact[];
  name:string;
  phone:number;
  email:string;
  gender:string;
  constructor(public contactService:ContactService) { }
  ngOnInit() {
     this.searchContact = this.contacts = this.contactService.getContact();
    }
 search(query:any){
   this.searchContact = (query) ? this.contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()) || contact.phone.toString().includes(query.toLowerCase()) ) : this.contacts;
    }
    removeTodo(name:string){
    this.contactService.remove(name);
   }
}
