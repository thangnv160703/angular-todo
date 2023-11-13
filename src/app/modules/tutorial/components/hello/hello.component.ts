import { Component } from '@angular/core';

@Component({
  selector: 'tutorial-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  private count = 0;
  protected user = {
    name: 'Hello world',
    age: 19
  }

  public handleButtonClick(){
    console.log("Button clicked", this.count++);
  }
}
