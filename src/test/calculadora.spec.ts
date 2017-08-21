import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculadora } from '../app/calculadora.component';

describe('acceso a la calculadora', ()=>{
    let component : Calculadora;
    let fixture : ComponentFixture<Calculadora>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ Calculadora ]
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent( Calculadora );
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('Alumno de bajo nivel intenta usar la calculadora', () =>{
        let userLevel = 3;
        expect(component.comprobarUsuario(userLevel)).toBeFalsy();
      })
})