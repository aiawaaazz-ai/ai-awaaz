import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLock } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-unlock-features',
  imports: [NgIcon, HlmButton, RouterModule],
  templateUrl: './unlock-features.html',
  styleUrl: './unlock-features.css',
  providers: [provideIcons({ lucideLock })],
})
export class UnlockFeatures {}
