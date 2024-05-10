import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var google: any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  protected visibilityIcon = "assets/icons/eyeOpen.svg";
  protected altIcon = "Icone para visualizar";
  protected visibilityType = 'password';

  protected formBuilderService = inject(FormBuilder);
  protected router = inject(Router);
  protected responseGoogleAPI: any = null;


  ngOnInit(): void {
    //  this.fazerLoginComGoogle()
  }

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


//  protected fazerLoginComGoogle() : void{
//   console.log("Estou chegando dentro da função")
//     google.accounts.id.initialize({
//       client_id:'77492481205-atbf6c8aefun4pu3oaiibcqoaslpeivc.apps.googleusercontent.com',
//       callback:(resp:any) => {
//         console.log(resp)
//         this.responseGoogleAPI = resp

//       const token = resp.credential.toString()
//       // this.cookieStorageService.armazenarCookie(token)
//       this.router.navigateByUrl('/home');
//       }
//     })

//     google.accounts.id.renderButton(document.getElementById("google-btn"), {
//       theme:'filled_blue',
//       size:'large',
//       shape: 'rectangle',
//       width: 500,
//     })
//    }
}
