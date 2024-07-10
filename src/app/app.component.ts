import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  public title: string = '';
  public counter:number=10;

  // increaseBy():void{
  //   this.counter +=1;
  // }

  //asi serviria para la suma y resta
  // increaseBy(value: number):void{
  //   this.counter +=value;
  // }

  // resetCounter(){
  //   this.counter =10;
  // }



}
