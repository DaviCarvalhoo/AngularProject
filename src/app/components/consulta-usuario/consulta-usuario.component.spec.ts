import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaUsuarioComponent } from './consulta-usuario.component';

describe('ConsultaUsuarioComponent', () => {
  let component: ConsultaUsuarioComponent;
  let fixture: ComponentFixture<ConsultaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaUsuarioComponent]
    });
    fixture = TestBed.createComponent(ConsultaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
