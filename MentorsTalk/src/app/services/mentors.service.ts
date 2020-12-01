import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';

export interface Mentor{
  id:number ,
  Nome:string , 
  IdadeUf:string ,
  Imagem:string  , 
  Desc:string ,
  Linguagem:string, 
  liked:boolean,
  sobre:string,
  imgsobre:string,
  UltimaExp:string, 
  Cargo:string,
  Empresa: string, 
  novo: boolean, 
  Likes: number,
}


@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor (private storage: Storage) {
   this.loadFavoritos();
   this.loadMentores();
   this.loadAgenda();
  }

  private StoreMentores(){
    this.storage.set('mentors', this.mentores);
  }

  private StoreFavoritos(){
    this.storage.set('fav', this.Favoritos);
  }

  
  private StoreAgenda(){
    this.storage.set('Agenda', this.Agenda);
  }

  private async loadFavoritos(){
    const loadedfavoritos = await this.storage.get('fav') ?? [];
    this.Favoritos.push(...loadedfavoritos)

  }

  private async loadMentores(){
    const loadedMentors = await this.storage.get('mentors') ?? [];
    this.mentores.push(...loadedMentors)

  }

  private async loadAgenda(){
    const loadedAgenda = await this.storage.get('Agenda') ?? [];
    this.Agenda.push(...loadedAgenda)

  }
 

  public mentores: Mentor[] = [];
  public Favoritos = [];
  public Agenda = [];


  public addlistFavorito (id: number) {    
    const index = this.mentores.findIndex(function (t){
      return t.id == id;
    });  
    
    if(this.mentores[index].liked == false)  
    {
      this.mentores[index].liked = true;
      this.Favoritos.push(this.mentores[index])
    }
    else
    {
      this.mentores[index].liked = false;  
      const index2  = this.Favoritos.findIndex(function (t){
        return t.id == id;
      });  
      this.Favoritos.splice(index2,1)
    }
    this.StoreMentores();
    this.StoreFavoritos();
  }
  
  public addLike (id: number) { 
      const index = this.mentores.findIndex(function (t){
      return t.id == id;
    }); 
    this.mentores[index].Likes = this.mentores[index].Likes +1
    this.StoreMentores();
  }

  public addAgenda(id: string,nome: string, Linguagem:string , date: string)
  { 
    this.Agenda.push({
      nameMonitor: nome,
      title: Linguagem,
      date: date      
    })
    this.StoreAgenda();
  }

  public removeAgenda(id: string)
  {  
      const index  = this.Agenda.findIndex(function (t){
        return t.id == id;
      });  
      this.Agenda.splice(index,1)
      this.StoreAgenda();
  }
  
}
