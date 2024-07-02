import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


public name: string = 'ironman';
public age: number = 45;

//Getter
get capitalizedName():string {
  //return 'Hola mundo'.toUpperCase();
  return this.name.toUpperCase();

}

//metodo

getHeroDescription():string {

  return `${this.name} - ${this.age}`;
}

changeHero():void{
this.name = 'Spiderman';


}

changeAge(){
this.age = 25;

}

resetForm(): void{
  this.name='ironman';
  this.age=45;
}



}
