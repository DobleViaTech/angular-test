import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  //Para enviar informacion a otros formulaios o componentes o modulos
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {name:'', power:0};


  emitCharacter():void{

    debugger;

    console.log(this.character);
    if(this.character.name.length ===0) return;

    this.onNewCharacter.emit(this.character);

    this.character={name:'', power:0};

    // this.character.name='';
    // this.character.power=0;
  }


}
