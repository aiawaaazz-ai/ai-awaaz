import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAudioLines } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-headers',
  imports: [RouterModule, NgIcon, HlmButton],
  templateUrl: './headers.html',
  styleUrl: './headers.css',
  providers: [provideIcons({ lucideAudioLines })],
})
export class Headers {
  constructor(private router: Router) {}

  navigateToSection(sectionId: string) {
    this.router.navigate([`/`]).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
