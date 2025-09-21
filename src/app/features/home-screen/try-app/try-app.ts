import { Component } from '@angular/core';
import { WaveVisualizer } from './wave-visualizer/wave-visualizer';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { lucidePlay } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { VOICES } from '../../../shared/constants/voices.constant';

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

  languages = [
    { locale: 'en-US', language: 'English (US)' },
    { locale: 'en-IN', language: 'English (India)' },
    { locale: 'hi-IN', language: 'Hindi' },
    { locale: 'bn-IN', language: 'Bengali' },
    { locale: 'mr-IN', language: 'Marathi' },
    { locale: 'gu-IN', language: 'Gujarati' },
    { locale: 'ta-IN', language: 'Tamil' },
    { locale: 'te-IN', language: 'Telugu' }
  ];
  selectedLanguage = this.languages[0];
  selectedVoice = VOICES[this.selectedLanguage.locale.toString()][0];
  voices = VOICES;

  playAudio(audioElement: HTMLMediaElement, voice: any): void {
    audioElement.pause();
    console.log(voice);
    audioElement.src = voice.preview_audio;
    audioElement.play();
  }
}
