import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetMentoresPage } from './det-mentores.page';

const routes: Routes = [
  {
    path: '',
    component: DetMentoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetMentoresPageRoutingModule {}
