import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyMedicinePage } from './buy-medicine.page';

describe('BuyMedicinePage', () => {
  let component: BuyMedicinePage;
  let fixture: ComponentFixture<BuyMedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyMedicinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
