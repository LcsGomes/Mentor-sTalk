import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public Mentoresnovos = [
    {
      id:1,
      Nome:'Ana Maria',
      Cargo:'Cientista de Dados',
      liked:false
    },
    {
      id:2,
      Nome:'Adriana Gomes',
      Cargo:'Full Stack',
      liked:false
    },
    {
      id:3,
      Nome:'Luisa Lopes',
      Cargo:'Programador C#',
      liked:false
    },
    {
      id:4,
      Nome:'Tayna Oliveira',
      Cargo:'Scrum Master',
      liked:false
    },
    {
      id:5,
      Nome:'Tamires Santos',
      Cargo:'Desenvolvedora de Apps',
      liked:false
    }
  ]


  public favoritos = [ 
  ] 


  public addFavoritos(id: number){
    const index = this.Mentoresnovos.findIndex(function (t){
      return t.id == id;
    });  
    
    if(this.Mentoresnovos[index].liked == false)  
    {
      this.Mentoresnovos[index].liked = true;
      this.favoritos.push(this.Mentoresnovos[index])
    }
    else
    {
      this.Mentoresnovos[index].liked = false;  
      const index2  = this.favoritos.findIndex(function (t){
        return t.id == id;
      });  
      this.favoritos.splice(index2,1)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
