import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.page.html',
  styleUrls: ['./quemsomos.page.scss'],
})
export class QuemsomosPage implements OnInit {

  public equipe = [
  {
    Nome:'Lucas Gomes',
    RA:'21290877'
  },
  {
    Nome:'Andrey Henrique',
    RA:'21163712'
  },
  {
    Nome:'Paulo Ricardo',
    RA:'21081948'
  },
  {
    Nome:'Gilmar Victor',
    RA:'21174800'
  },
  {
    Nome:'Vitor Martins',
    RA:'21112568'
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
