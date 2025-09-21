import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHeart } from '@ng-icons/lucide';

@Component({
  selector: 'app-emotion-support',
  imports: [NgIcon],
  templateUrl: './emotion-support.html',
  styleUrl: './emotion-support.css',
  viewProviders: [provideIcons({ lucideHeart })],
})
export class EmotionSupport {}
