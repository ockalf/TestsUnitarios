import { Component } from '@angular/core';

@Component({
    selector: "op",
    template: "<h1>Operacion</h1>"
})

export class Operacion{

    verificarOperacion(operacion) {
        
        if( typeof operacion === "number" ){
            return true;
        }else{
            return false;
        }
        
    }

}
