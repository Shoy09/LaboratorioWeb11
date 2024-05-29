import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent {
  correo: string = ''; // Variable para almacenar el correo
  contrasena: string = ''; // Variable para almacenar la contraseña
  nombre: string = ''; // Variable para almacenar el nombre

  constructor(private router: Router) {}

  registrar() {
    // Imprimir los datos ingresados en el formulario en la consola
    console.log('Correo:', this.correo);
    console.log('Contraseña:', this.contrasena);
    console.log('Nombre:', this.nombre);

    // Aquí puedes agregar la lógica para enviar los datos de registro al servidor

    // Redirige al usuario a la página de inicio después del registro
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
