import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowRight,
  lucideMic,
  lucideSquareStack,
} from '@ng-icons/lucide';
import { remixVoiceRecognitionLine } from '@ng-icons/remixicon';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-features',
  imports: [NgIcon, HlmButton],
  templateUrl: './features.html',
  styleUrl: './features.css',
  providers: [
    provideIcons({
      lucideArrowRight,
      lucideMic,
      lucideSquareStack,
      remixVoiceRecognitionLine,
    }),
  ],
})
export class Features {
  features = [
    {
      title: 'Text to Speech',
      description:
        'Convert text into lifelike speech with a wide range of voices and languages.',
      icon: 'lucideMic',
    },
    {
      title: 'Voice Cloning',
      description:
        'Create a digital version of your voice from just a few seconds of audio.',
      icon: 'lucideSquareStack',
    },
    {
      title: 'Speech to Text',
      description:
        'Transcribe audio to accurate, time-stamped text with our advanced engine.',
      icon: 'remixVoiceRecognitionLine',
    },
  ];
}
