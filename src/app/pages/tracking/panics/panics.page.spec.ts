import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanicsPage } from './panics.page';

describe('PanicsPage', () => {
  let component: PanicsPage;
  let fixture: ComponentFixture<PanicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
