import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatMentoresPage } from './cat-mentores.page';

const routes: Routes = [
  {
    path: '',
    component: CatMentoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatMentoresPageRoutingModule {}
