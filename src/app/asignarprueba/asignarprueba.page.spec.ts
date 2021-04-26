import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsignarpruebaPage } from './asignarprueba.page';

describe('AsignarpruebaPage', () => {
  let component: AsignarpruebaPage;
  let fixture: ComponentFixture<AsignarpruebaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarpruebaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsignarpruebaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
