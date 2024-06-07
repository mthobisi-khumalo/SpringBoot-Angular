import { Component } from '@angular/core';
import { UserTopic } from 'src/app/models/user-topic.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css']
})
export class IndexComponent {
  
  userTopics: Array<UserTopic> = new Array<UserTopic>();
  rowReturned = false;
  message:any;
  json:any;
  searchText:String="";

  constructor(private userService: UserService) { }

  ngOnInit(){}

  async getTopics() {

    await new Promise<void>(resolve => {
      this.userService.getTopics(this.searchText).subscribe(p => {this.json = p;
          resolve();
        });
    });

    this.userTopics =this.json;

    if (this.userTopics.length != 0) 
    {
      this.message = "";
    }else 
    {
      this.message = "No matching results found!!! Try to narrow-down your search.";
    }
  }
}

