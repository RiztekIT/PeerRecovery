import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddeditnotesPage } from './addeditnotes.page';

describe('AddeditnotesPage', () => {
  let component: AddeditnotesPage;
  let fixture: ComponentFixture<AddeditnotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditnotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddeditnotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
