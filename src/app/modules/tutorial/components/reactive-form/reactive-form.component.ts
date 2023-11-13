import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  protected username = new FormControl<string>('');
  protected password = new FormControl<string>('');
  protected rememberMe = new FormControl<boolean>(false);

  protected numberControl = new FormControl<number>(0);

  protected userInfo = new FormGroup({
    username: new FormControl<string>('', [Validators.required, this.isDuplicated]),
    password: new FormControl<string>('', [Validators.required]),
    rememberMe: new FormControl<boolean>(false)
  })

  private isDuplicated(control: AbstractControl<string>): ValidationErrors {
    const value: string = control.value;
    if (value.length > 3) return {}
    return {
      duplicated: true,
      test: true
    }
  }

  public handleSubmitForm() {
    console.log(this.userInfo.value);
  }
}
