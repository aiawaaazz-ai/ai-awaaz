import { Component } from '@angular/core';
import { WaveVisualizer } from './wave-visualizer/wave-visualizer';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { lucidePlay } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
  selector: 'app-try-app',
  imports: [
    WaveVisualizer,
    HlmInput,
    FormsModule,
    HlmButton,
    NgIcon,
    BrnSelectImports,
    HlmSelectImports,
  ],
  templateUrl: './try-app.html',
  styleUrl: './try-app.css',
  providers: [provideIcons({ lucidePlay })],
})
export class TryApp {
  text: string = '';
  language: string = 'English';
  languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Japanese'];
  voice = 'Aria';
  voices = ['Aria', 'Emma', 'Joanna', 'Kendra', 'Kimberly', 'Salli'];
}
