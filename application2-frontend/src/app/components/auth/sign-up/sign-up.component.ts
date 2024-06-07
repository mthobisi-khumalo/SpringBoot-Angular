import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userData: User = new User("", "", "", "", "");
  submitted = false;
  message:any;

  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  public signUp() {
    let resp=this.userService.doRegistration(this.userData);
    resp.subscribe((data)=>this.message=data);
    this.submitted = true;
    this.router.navigate(['/login']);
  }

}