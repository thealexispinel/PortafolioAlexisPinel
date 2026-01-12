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
    link.href = '/resources/AlexisPinel_HVyC.pdf';
    link.download = 'Alexis_Pinel_CV.pdf';
    link.click();
  }
}