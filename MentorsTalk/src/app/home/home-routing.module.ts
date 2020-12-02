import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'quemsomos',
        loadChildren: () => import('./quemsomos/quemsomos.module').then( m => m.QuemsomosPageModule)
      },
      {
        path: 'cat-mentores',
        loadChildren: () => import('./cat-mentores/cat-mentores.module').then( m => m.CatMentoresPageModule)
      },
      {
        path: 'det-mentores',
        loadChildren: () => import('./det-mentores/det-mentores.module').then( m => m.DetMentoresPageModule)
      },
      {
        path: 'agenda',
        loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
      },
      {
        path: 'meus-agendamentos',
        loadChildren: () => import('./meus-agendamentos/meus-agendamentos.module').then( m => m.MeusAgendamentosPageModule)
      },   
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
