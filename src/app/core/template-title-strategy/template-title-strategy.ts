import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  appName = 'AI Awaaz';
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title} | ${this.appName}`);
    } else {
      this.title.setTitle('AI Awaaz - Best Text To Speech AI');
    }
  }
}
