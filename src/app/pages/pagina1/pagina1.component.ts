import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

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
  
  constructor() { 
    /*constructor se ocupa para poner la despendencias, incluso se puede borarr
    incluso se puede borrar el constructor, pero se implementa igual
    */
   console.log('constructor');
  }



  ngOnInit(): void {
    console.log('ngOnInit');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    /*
      Se ejecuta cuando tienes un input de un componente
      padre a un componente hijo
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
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(): void {
    /*
      Se llama cuando el componente es destruido, despues.
      Es muy utl cuando tienes observable, timmers etc.
    */
    console.log('ngOnDestroy');
    
  }

  guardar(){

  }
  
  
}
