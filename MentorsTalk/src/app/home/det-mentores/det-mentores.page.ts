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



  public Add(id: number)
  {
   this.mentorsService.addLike(id)
   
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
    this.mentor = this.mentores.filter(function(t){return t.id == NmID;})
    console.log(this.mentor)
    
  }

}
