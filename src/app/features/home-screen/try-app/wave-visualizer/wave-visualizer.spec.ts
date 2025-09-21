import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveVisualizer } from './wave-visualizer';

describe('WaveVisualizer', () => {
  let component: WaveVisualizer;
  let fixture: ComponentFixture<WaveVisualizer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveVisualizer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveVisualizer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
