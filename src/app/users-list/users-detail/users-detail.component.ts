import { Component, OnInit } from '@angular/core';
import { GeruService } from '../../geru.service';
import { User } from '../../geru.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  user: User

  constructor(private geruService:GeruService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.geruService.userById(this.route.snapshot.params['id'])
      .subscribe(user => this.user = user)
  }

}
