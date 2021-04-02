import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthTipsPage } from './health-tips.page';

describe('HealthTipsPage', () => {
  let component: HealthTipsPage;
  let fixture: ComponentFixture<HealthTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthTipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
