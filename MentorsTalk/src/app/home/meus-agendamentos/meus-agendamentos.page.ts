import { Component, OnInit } from '@angular/core';
import {Mentor, MentorsService } from 'src/app/services/mentors.service';


@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.page.html',
  styleUrls: ['./meus-agendamentos.page.scss'],
})
export class MeusAgendamentosPage implements OnInit {

  constructor(private mentorsService: MentorsService) { }

  public agendamentos = this.mentorsService.Agenda;

  public remove (id: string)
  {
    this.mentorsService.removeAgenda( id);
  }
  ngOnInit() {
  }

}