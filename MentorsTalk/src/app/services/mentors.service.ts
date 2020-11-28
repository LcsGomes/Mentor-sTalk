import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';

export interface Mentor{
  id:number ; 
  Nome:string ; 
  IdadeUf:string ;
  Imagem:string  ; 
  Desc:string ;  
  Linguagem:string; 
  liked:boolean;
  sobre:string;
  imgsobre:string;
  UltimaExp:string; 
  Cargo:string;
  Empresa: string; 
  novo: boolean; 
  Likes: number
}


@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor (private storage: Storage) {
   this.loadFavoritos();
   this.loadMentores();
 
  }

  private StoreMentores(){
    this.storage.set('mentors', this.mentores);
  }

  private StoreFavoritos(){
    this.storage.set('fav', this.Favoritos);
  }

  private async loadFavoritos(){
    const loadedfavoritos = await this.storage.get('fav');
    this.Favoritos.push(...loadedfavoritos)

  }

  private async loadMentores(){
    const loadedMentors = await this.storage.get('mentors');
    this.mentores.push(...loadedMentors)

  }
 

  public mentores: Mentor[] = [];

  public Favoritos = [];


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
  
}
