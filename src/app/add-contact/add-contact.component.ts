import { Component, OnInit } from '@angular/core';
import { ContactService } from './../services/contact.service';
import { Contact } from './../model.contact';
import {Router} from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  name:string;
  phone:number;
  email:string;
  gender:string;
  constructor(public contactService:ContactService ,public router:Router ,public fashMessagesService : FlashMessagesService )  { 
   }

  ngOnInit() {
  }

  click(ev){
    this.gender = (ev.target.defaultValue);
  }
    mySubmit({value,valid}:{value:Contact,valid:boolean}){
      if (!valid) { 
      this.fashMessagesService.show('Name and number Phone is required Please',{cssClass:'alert-danger',timeout:4000});
        this.router.navigate(['add']);
      }else{
        this.contactService.addContact(this.name,this.phone,this.email,this.gender );
        this.router.navigate(['/']);
      }
    }

}
