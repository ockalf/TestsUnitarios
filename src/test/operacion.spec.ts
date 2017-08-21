import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Operacion } from '../app/operacion.component';

describe('Tipo de dato ingresado en operacion', ()=>{
    let component : Operacion;
    let fixture : ComponentFixture<Operacion>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ Operacion ]
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent( Operacion );
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('Se ingresa una operacion de manera correcta', () =>{
        let operacion = "raíz cuadrada de doce";
        expect(component.verificarOperacion(operacion)).toBeFalsy();
      })
})