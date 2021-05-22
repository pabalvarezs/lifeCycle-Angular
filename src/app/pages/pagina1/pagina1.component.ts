import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy{
  
  nombre : string = 'Pablo';
  segundos : number = 0;
  timerSubscription! : Subscription;
  
  constructor() { 
    /*constructor se ocupa para poner la despendencias, incluso se puede borarr
    incluso se puede borrar el constructor, pero se implementa igual
    */
   console.log('constructor');
  }
  
  
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe(i => {
      this.segundos = i
      
    })
  }
  
  ngOnDestroy(): void {
    /*
      Se llama cuando el componente es destruido, despues.
      Es muy utl cuando tienes observable, timmers etc.
    */
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
    
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    /*
    Se ejecuta cuando tienes un input de un componente
    padre a un componente hijo
    Cada vez que cambia el valor que el componente padre
    envia al hijo, se ejecuta el onChanges
    */
   console.log('ngOnChanges');
   
  }
  ngDoCheck(): void {
    /*
      Verifica si hay que hacer algun cambio en el template html
      luego viene afterContentChecked
      y afterViewChecked
    */
   console.log('ngDoCheck');
   
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(): void {
    /*
      Es parte del proceso donde se redibuja el html, cuando hacemos una 
      asociacion entre el componente ts  y html del componente
      el ciclo es:
      1.-doCheck
      2.- afterContentChecked
      3.- afterViewChecked
    */
   console.log('ngAfterContentChecked');
   
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(): void {
    /*
      Es parte del proceso donde se redibuja el html, cuando hacemos una 
      asociacion entre el componente ts  y html del componente
      el ciclo es:
      1.-doCheck
      2.- afterContentChecked
      3.- afterViewChecked
    */
    console.log('ngAfterViewChecked');
    
  }

  guardar(){

  }
  
  
}
