import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TareascompletadasPage } from './tareascompletadas.page';

describe('TareascompletadasPage', () => {
  let component: TareascompletadasPage;
  let fixture: ComponentFixture<TareascompletadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareascompletadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TareascompletadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
