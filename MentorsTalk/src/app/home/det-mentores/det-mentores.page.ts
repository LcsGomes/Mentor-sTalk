import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from'@angular/router';
import {  Mentor, MentorsService } from 'src/app/services/mentors.service';

@Component({
  selector: 'app-det-mentores',
  templateUrl: './det-mentores.page.html',
  styleUrls: ['./det-mentores.page.scss'],
})

export class DetMentoresPage implements OnInit {

  constructor(private alertController : AlertController, private route: ActivatedRoute, private mentorsService: MentorsService) { }

  public mentores : Mentor[] ;

 public mentor : Mentor[];

  public Like = 147;
  public isliked = false;


  public filter(id: number){  
      this.mentor = this.mentores.filter(function(t){return t.id == id;});
      console.log(this.mentor);
  } 
  

  public Add()
  {
   
    if (this.isliked == false){
       this.Like++
       this.isliked=true
    }
    else{
      this.Like--
      this.isliked=false
    }
  }
  public async showAlert(){  
      const alert = await this.alertController.create({
      header: 'Deseja Agendar uma conversa com esse Mentor',
      buttons: ['Sim','Não']
    });
    alert.present();
  }

  ngOnInit() {
    const NmID = +this.route.snapshot.paramMap.get('id');      
    this.mentores = this.mentorsService.mentores;
    console.log(this.mentores)
    this.filter(NmID);
  }

}
