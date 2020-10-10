import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetMentoresPage } from './det-mentores.page';

describe('DetMentoresPage', () => {
  let component: DetMentoresPage;
  let fixture: ComponentFixture<DetMentoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetMentoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetMentoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
