import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiledatasheetPage } from './profiledatasheet.page';

describe('ProfiledatasheetPage', () => {
  let component: ProfiledatasheetPage;
  let fixture: ComponentFixture<ProfiledatasheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiledatasheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiledatasheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
