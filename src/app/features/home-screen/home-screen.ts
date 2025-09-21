import { Component } from '@angular/core';
import { Headers } from '../../shared/components/headers/headers';
import { Footer } from '../../shared/components/footer/footer';
import { TryApp } from './try-app/try-app';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { Features } from './features/features';
import { UnlockFeatures } from './unlock-features/unlock-features';
import { WorkingSteps } from './working-steps/working-steps';
import { Testimonials } from './testimonials/testimonials';
import { Faqs } from './faqs/faqs';
import { ApiStudio } from './api-studio/api-studio';
import { Router, RouterModule } from '@angular/router';
import { EmotionSupport } from './emotion-support/emotion-support';

@Component({
  selector: 'app-home-screen',
  imports: [
    Headers,
    Footer,
    TryApp,
    HlmButton,
    NgIcon,
    Features,
    UnlockFeatures,
    WorkingSteps,
    Testimonials,
    Faqs,
    ApiStudio,
    RouterModule,
    EmotionSupport,
  ],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css',
  providers: [provideIcons({ lucideArrowRight })],
})
export class HomeScreen {

  constructor(private router: Router) {}

  usersImage: string[] = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/63.jpg',
    'https://randomuser.me/api/portraits/men/83.jpg',
    'https://randomuser.me/api/portraits/women/21.jpg',
    'https://randomuser.me/api/portraits/men/56.jpg',
    'https://randomuser.me/api/portraits/women/75.jpg',
    'https://randomuser.me/api/portraits/men/12.jpg',
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
  ];

   navigateToSection(sectionId: string) {
    this.router.navigate([`/`]).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
