import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TareaspendientesPage } from './tareaspendientes.page';

describe('TareaspendientesPage', () => {
  let component: TareaspendientesPage;
  let fixture: ComponentFixture<TareaspendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaspendientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TareaspendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
