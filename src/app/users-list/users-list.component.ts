import { Component, OnInit } from '@angular/core';
import { GeruService } from '../geru.service';
import { User } from '../geru.model';
import { NotificationService } from '../notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User

  constructor(private geruService: GeruService,
              private router: Router,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.gerarLista()
  }

  gerarLista(){
    this.geruService.listUsers().subscribe(user => this.users = user)
  }

  excluirUser(id: number){
    this.geruService.deleteUser(id)
      .subscribe(res => {
        this.notificationService.notify(`Cadastro em nome de ${res.name} excluído com sucesso!`)
        this.router.navigate(['/users'])
        this.gerarLista()
      })
  }

}
