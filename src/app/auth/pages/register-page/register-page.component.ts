import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router )

  // public myForm: FormGroup = this.fb.group({
  public myForm: FormGroup = this.fb.group({
    name:     ['', [Validators.required]], // Campo "name" agregado
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });


  register() {
    const { name, email, password } = this.myForm.value;

    this.authService.register(name, email, password)
      .subscribe({
        next: () => {
          // Registro exitoso, puedes redirigir al usuario a la página de inicio de sesión o a otra página de tu elección
          this.router.navigateByUrl('/dashboard');
        


        }});
  }




}
