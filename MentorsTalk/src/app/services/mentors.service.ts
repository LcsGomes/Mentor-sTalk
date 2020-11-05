import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';




@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor (private storage: Storage) {
   this.loadMentores();
   this.loadFavoritos();
 
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
 

  public mentores = [ ];

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
  
  
}
