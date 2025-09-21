import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideDownload,
  lucideLanguages,
  lucideUpload,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-working-steps',
  imports: [NgIcon],
  templateUrl: './working-steps.html',
  styleUrl: './working-steps.css',
  providers: [provideIcons({ lucideLanguages, lucideUpload, lucideDownload })],
})
export class WorkingSteps {}
