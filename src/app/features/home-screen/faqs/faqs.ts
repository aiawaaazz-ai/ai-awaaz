import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import {
  HlmAccordionContent,
  HlmAccordion,
  HlmAccordionIcon,
  HlmAccordionItem,
  HlmAccordionTrigger,
} from '@spartan-ng/helm/accordion';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
  selector: 'app-faqs',
  imports: [
    HlmAccordion,
    HlmAccordionItem,
    HlmAccordionTrigger,
    HlmAccordionContent,
    HlmAccordionIcon,
    HlmIcon,
    NgIcon,
  ],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
  viewProviders: [provideIcons({ lucideChevronDown })],
})
export class Faqs {
  faqList = [
    {
      question: 'How does voice cloning work?',
      answer:
        'Our advanced AI analyzes a short audio sample of your voice to capture its unique characteristics. It then generates a digital model that can articulate any text you provide, maintaining your vocal identity, intonation, and style.',
    },
    {
      question: 'Is my data private and secure?',
      answer:
        'Absolutely. We prioritize your privacy and data security. All data is encrypted in transit and at rest. Your voice data is used exclusively for your own projects and is never shared without your explicit consent.',
    },
    {
      question: 'What languages are supported?',
      answer:
        'We support over 10 languages and a wide variety of accents for Text to Speech. Our Voice Cloning and Speech to Text services are continuously expanding their language support. Please check our documentation for the most up-to-date list.',
    },
    {
      question: 'Can I use the generated audio commercially?',
      answer:
        'Yes, with our paid plans, you have full commercial rights to the audio you generate. This includes use in videos, podcasts, advertising, e-learning, and any other commercial application.',
    },
  ];
}
