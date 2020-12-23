import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorCardViewPage } from './doctor-card-view.page';

describe('DoctorCardViewPage', () => {
  let component: DoctorCardViewPage;
  let fixture: ComponentFixture<DoctorCardViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCardViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorCardViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
