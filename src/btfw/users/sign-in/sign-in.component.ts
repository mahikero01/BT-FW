import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btfw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formError: string;
  submitting = false;

  constructor() { }

  ngOnInit() {
  }

}
