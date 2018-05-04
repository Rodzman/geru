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
  nameEditMode = false
  fieldEditMode = ''
  emissor = []

  constructor(private geruService:GeruService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.gerarEmissor()
    this.geruService.userById(this.route.snapshot.params['id'])
      .subscribe(user => this.user = user)
  }

  gerarEmissor(){
    this.geruService.emissor().subscribe(emissor => this.emissor = emissor.orgao_emissor)
  }

  editMode(field:string){
    this.fieldEditMode = field
  }

  saveField(id,info){
    var value:User = this.user
    switch(this.fieldEditMode){
      case 'name':
        value.name = info
        break
      case 'gender':
        value.sexo = info
        break
      case 'rg':
        value.rg = info
        break
      case 'data_emissao':
        value.data_emissao = info
        break
      case 'orgao_emissor':
        value.orgao_emissor = info
        break
    }
    this.geruService.editUser(id,value)
      .subscribe(user => {
        this.user = user
        this.fieldEditMode = ''
      })
  }

}
