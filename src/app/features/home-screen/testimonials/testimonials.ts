import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  data = [
    {
      quote:
        'AI Awaaz has revolutionized our workflow. The voice quality is indistinguishable from human speech.',
      author: 'Aisha Khan',
      title: 'Podcast Producer',
      avatar_src: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      quote:
        'The API is robust and easy to integrate. Our students love the natural-sounding voices for their courses.',
      author: 'Ben Carter',
      title: 'E-Learning Developer',
      avatar_src: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      quote:
        'Voice cloning saved us thousands on voice acting. The results are stunningly realistic for our game characters.',
      author: 'Chloe Garcia',
      title: 'Indie Game Developer',
      avatar_src: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
  ];
}
