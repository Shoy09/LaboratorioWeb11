import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  correo: string = ''; // Variable para almacenar el correo
  contrasena: string = ''; // Variable para almacenar la contraseña

  constructor(private router: Router, private toastr: ToastrService) {}

  inicioSesion() {
    // Simulación de datos de inicio de sesión
    const usuario = 'Dioses';
    const contraseña = '123456';
     // Imprimir los datos de correo y contraseña en la consola
     console.log('Correo:', this.correo);
     console.log('Contraseña:', this.contrasena);

    // Verifica si el correo y la contraseña coinciden con los datos simulados
    if (this.correo === usuario && this.contrasena === contraseña) {
      console.log('Inicio de sesión exitoso');
      this.toastr.success('Inicio de sesión exitoso', 'Bienvenido');

      this.router.navigate(['/home']); // Redirecciona a la ruta '/Dashboard'

      // Aquí puedes agregar la lógica para redirigir al usuario a la página de inicio o a cualquier otra página después del inicio de sesión
    } else {
      console.log('Credenciales incorrectas');
      this.toastr.error('Error al iniciar sesión', 'Error de inicio de sesión');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}