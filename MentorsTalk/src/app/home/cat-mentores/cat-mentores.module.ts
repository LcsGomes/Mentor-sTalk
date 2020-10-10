import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatMentoresPageRoutingModule } from './cat-mentores-routing.module';

import { CatMentoresPage } from './cat-mentores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatMentoresPageRoutingModule
  ],
  declarations: [CatMentoresPage]
})
export class CatMentoresPageModule {}
