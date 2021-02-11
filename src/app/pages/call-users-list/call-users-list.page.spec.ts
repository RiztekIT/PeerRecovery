import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallUsersListPage } from './call-users-list.page';

describe('CallUsersListPage', () => {
  let component: CallUsersListPage;
  let fixture: ComponentFixture<CallUsersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallUsersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallUsersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
