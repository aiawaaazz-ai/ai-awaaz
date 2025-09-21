import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideClapperboard,
  lucideCode,
  lucideHeart,
  lucideMessageSquare,
  lucideShare2,
  lucideUsers,
} from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-api-studio',
  imports: [NgIcon, HlmButton, RouterModule],
  templateUrl: './api-studio.html',
  styleUrl: './api-studio.css',
  viewProviders: [
    provideIcons({
      lucideCode,
      lucideClapperboard,
      lucideUsers,
      lucideMessageSquare,
      lucideHeart,
      lucideShare2,
    }),
  ],
})
export class ApiStudio {}
