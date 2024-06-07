import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  email: String = "";
  password: String = "";
  message: String = "";
  json: any;

  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {

  }

  async login() {

    await new Promise<void>(resolve => {
      this.userService.doLogin(this.email, this.password).subscribe(p => {this.json = p;
          resolve();
        });
    });

    if (this.json != null) {
      this.router.navigate(['/index']);
      
    }else {
      this.message = "Wrong email or password!!";
    }
  }
}
