import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  protected username:string = '';
  protected password:string = '';
  protected rememberMe: boolean = false;

  public handleSubmitForm(): void{
    console.log({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    })
  }
}
