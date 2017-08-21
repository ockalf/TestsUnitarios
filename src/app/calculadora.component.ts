import { Component } from '@angular/core';

@Component({
    selector: "calculadora",
    template: "<h1>calculadora</h1>"
})

export class Calculadora{

    comprobarUsuario(userLevel) {
        
        if(userLevel>5 || userLevel == "profesor"){
            return true;
        }else{
            return false;
        }
        
    }

}
