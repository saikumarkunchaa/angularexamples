import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   
  userForm:boolean=false;
  isNewUser:boolean;
  newUser:any={};
  editUserForm:boolean=false;
  editedUser:any={};
  constructor() { }

  ngOnInit() {
  }

}
