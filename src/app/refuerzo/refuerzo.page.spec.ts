import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefuerzoPage } from './refuerzo.page';

describe('RefuerzoPage', () => {
  let component: RefuerzoPage;
  let fixture: ComponentFixture<RefuerzoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuerzoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefuerzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
