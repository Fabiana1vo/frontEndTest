import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected visibilityIcon = "assets/icons/eyeOpen.svg";
  protected altIcon = "Icone para visualizar";
  protected visibilityType = 'password';

  protected formBuilderService = inject(FormBuilder);
  protected router = inject(Router);

  protected formLogin = this.formBuilderService.group({
    email:['abc@gmail.com', [Validators.required, Validators.email]],
    password: ['123456',[Validators.required]]

  })


  protected logar(){
    alert("Login efetuado com sucesso!")
    const formValue = this.formLogin.value;

    if(formValue.email && formValue.password){
      const targetUrl = this.router.createUrlTree(['/home']).toString();
      window.location.href = targetUrl;
    }
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
