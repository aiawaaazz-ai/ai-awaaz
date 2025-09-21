import { Component } from '@angular/core';
import { Headers } from '../../shared/components/headers/headers';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-terms-conditions',
  imports: [Headers, Footer],
  templateUrl: './terms-conditions.html',
  styleUrl: './terms-conditions.css',
})
export class TermsConditions {}
