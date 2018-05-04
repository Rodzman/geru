import { Component, OnInit } from '@angular/core';
import { GeruService } from '../geru.service';
import { Emissor, User } from '../geru.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgModel, FormControlName } from '@angular/forms'
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  emissor = []
  gender:string
  users: User
  input: any
  userForm: FormGroup
  model: NgModel
  control: FormControlName
  formValidation:boolean
  datePattern = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/

  constructor(private geruService: GeruService, 
              private router: Router,
              private formBuilder: FormBuilder,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.gerarEmissor()
    this.generateForm()
  }

  gerarEmissor(){
    this.geruService.emissor().subscribe(emissor => this.emissor = emissor.orgao_emissor)
  }

  generateForm(){
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('Paul Irish'),
      rg: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      data_emissao: this.formBuilder.control('', [Validators.required, Validators.pattern(this.datePattern)]),
      orgao_emissor: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      sexo: this.formBuilder.control('', [Validators.required])
    })
  }

  validation(){
    if(this.userForm.valid){
      this.formValidation = true
    } else {
      this.formValidation = false
    }
  }

  sendForm(user: User){
    this.formValidation = true
    this.geruService.addUser(user)
    .subscribe(res => {
      this.notificationService.notify(`Você adicionou um cadastro com id ${res}`)
      this.router.navigate(['/users'])
      this.generateForm()
    })
  }

  setGender(gender:string){
    this.gender = gender
  }

  activeGender(gender:string){
    return this.gender === gender
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
