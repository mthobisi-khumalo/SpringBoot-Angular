import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  
  json:any;

  constructor(private userService: UserService) {}

  async ngOnInit() {

    await new Promise<void>(resolve => {
      this.userService.doLogin("", "").subscribe((p: any) => {this.json = p;
          resolve();
        });
    });

    if (this.json != null) {
    }else {
    }
  }

}
