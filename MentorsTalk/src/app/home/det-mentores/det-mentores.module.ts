import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetMentoresPageRoutingModule } from './det-mentores-routing.module';

import { DetMentoresPage } from './det-mentores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetMentoresPageRoutingModule
  ],
  declarations: [DetMentoresPage]
})
export class DetMentoresPageModule {}
