import { Component, OnInit } from '@angular/core';
import { GeruService } from '../geru.service';
import { Emissor, User } from '../geru.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  emissor = []
  users: User
  userForm: FormGroup
  datePattern = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/


  constructor(private geruService: GeruService, 
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.gerarEmissor()
    this.gerarLista()
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('Rodrigo Souza'),
      rg: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      data_emissao: this.formBuilder.control('', [Validators.required, Validators.pattern(this.datePattern)]),
      orgao_emissor: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      sexo: this.formBuilder.control('')
    })
  }

  gerarEmissor(){
    this.geruService.emissor().subscribe(emissor => this.emissor = emissor.orgao_emissor)
  }

  gerarLista(){
    this.geruService.listUsers().subscribe(user => this.users = user)
  }

  sendForm(user: User){
    this.geruService.addUser(user)
      .subscribe(res => {
        alert("Usuário com o id='"+ res + "' foi adicionado!")
      })
  }

  editarUser(id: number){
    alert(id)
  }

  excluirUser(id: number){
    this.geruService.deleteUser(id)
      .subscribe(res => {
        alert("Usuário "+ res.id + " excluído!")
        this.gerarLista()
      })
  }


}
