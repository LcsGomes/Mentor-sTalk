import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatMentoresPage } from './cat-mentores.page';

describe('CatMentoresPage', () => {
  let component: CatMentoresPage;
  let fixture: ComponentFixture<CatMentoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatMentoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatMentoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
