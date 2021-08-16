import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResourceDirPage } from './resource-dir.page';

describe('ResourceDirPage', () => {
  let component: ResourceDirPage;
  let fixture: ComponentFixture<ResourceDirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceDirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceDirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
