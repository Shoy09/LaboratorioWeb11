import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  submitForm(form: any) {
    console.log('Datos del formulario:', form.value);
    // Aquí puedes agregar la lógica para enviar los datos del formulario a tu backend o servicio
  }
}
