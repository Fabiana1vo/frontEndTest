import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  visibilityIcon = "assets/icons/eyeOpen.svg";
  altIcon = "Icone para visualizar";
  visibilityType = 'password';

  protected formBuilderService = inject(FormBuilder);



  protected formLogin = this.formBuilderService.group({
    email:['abc@gmail.com', [Validators.required, Validators.email]],
    password: ['123456',[Validators.required]]

  })


  protected logar(){

    alert("Login efetuado com sucesso!")
  }

  protected changeVisibility(){
      console.log("Mudei a visibilidade");
      if(this.visibilityType == 'password'){
        this.visibilityType = 'text'
        this.visibilityIcon = "assets/icons/eyeClose.svg";
      } else {
        this.visibilityType = 'password'
        this.visibilityIcon = "assets/icons/eyeOpen.svg";
      }
  }
}
