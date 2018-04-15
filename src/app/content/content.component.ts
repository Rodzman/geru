import { Component, OnInit } from '@angular/core';
import { GeruService } from '../geru.service';
import { Emissor } from '../geru.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  emissor = []

  constructor(private geruService: GeruService) { }

  ngOnInit() {
    this.gerarEmissor()
  }

  gerarEmissor(){
    this.geruService.emissor().subscribe(emissor => this.emissor = emissor.orgao_emissor)
  }

}
