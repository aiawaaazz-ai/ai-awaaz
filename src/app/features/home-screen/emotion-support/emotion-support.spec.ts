import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionSupport } from './emotion-support';

describe('EmotionSupport', () => {
  let component: EmotionSupport;
  let fixture: ComponentFixture<EmotionSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmotionSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionSupport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
