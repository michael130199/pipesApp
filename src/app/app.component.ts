import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipesApp';

  public titulo: string = '';
  public descrip: string = '';
  public num: string = '';

  public json: any = [{
    'id': 1,
    'titulo': 'hola',
    'descrip': 'qwerty',
    'num': '4'
  },{
    'id': 2,
    'titulo': 'como',
    'descrip': 'uiop',
    'num': '4'
  },{
    'id': 3,
    'titulo': 'estas',
    'descrip': 'uiop',
    'num': '5'
  },{
    'id': 4,
    'titulo': '?',
    'descrip': 'asdf',
    'num': '1'
  }
];

  constructor(){

  }


}
