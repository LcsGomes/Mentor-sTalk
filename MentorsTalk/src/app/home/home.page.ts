import { Component } from '@angular/core';
import {  MentorsService } from 'src/app/services/mentors.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private mentorsService: MentorsService ) { }

}
