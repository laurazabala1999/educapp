import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearpruebaPage } from './crearprueba.page';

describe('CrearpruebaPage', () => {
  let component: CrearpruebaPage;
  let fixture: ComponentFixture<CrearpruebaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpruebaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearpruebaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
