import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gatti-tombola';
  numeriUsciti: Array<number>=[];
  ultimoNumero:string="...";
  generaNumero(){
    var check=false;
    //ciclo per far uscire un numero ancora non estratto
    //il ciclo viene ripetuto finché non si trova un numero diverso
    while(check==false){
      var numero= Math.round(Math.random()*99+1);
      check=true;
      for (var i=0; i< this.numeriUsciti.length; i++){
        if (numero==this.numeriUsciti[i]){
          check=false;
        }
      }
      if (check){
        this.numeriUsciti.push(numero);
        console.log(numero); //limiti inclusi
        var riga=document.getElementById("visuaNumero");
        riga.innerHTML=""+numero;
        this.ultimoNumero=""+numero;
        if (this.numeriUsciti.length==100){
          //tutti i numeri sono stati estratti
          console.log("numeri finit!");
          var bottone= document.getElementById("bottone");
          bottone.setAttribute("disabled","disabled");
          alert("Tutti i numeri sono stati estratti!");
          return false;
        }
      }
    }
    return false;
  }
}
