import { Component, OnInit } from '@angular/core';
import { GeruService } from '../geru.service';
import { User } from '../geru.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User

  constructor(private geruService: GeruService) { }

  ngOnInit() {
    this.gerarLista()
  }

  gerarLista(){
    this.geruService.listUsers().subscribe(user => this.users = user)
  }

  editarUser(id: number){
    console.log(id)
  }

  excluirUser(id: number){
    this.geruService.deleteUser(id)
      .subscribe(res => {
        alert("Usuário "+ res.id + " excluído!")
        this.gerarLista()
      })
  }

}
