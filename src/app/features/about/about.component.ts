import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1a9TtAwZZjFjS5VRWDCwsjp1cIriyJ4up/view?usp=drive_link';
    link.download = 'Alexis_Pinel_CV.pdf';
    link.click();
  }
}