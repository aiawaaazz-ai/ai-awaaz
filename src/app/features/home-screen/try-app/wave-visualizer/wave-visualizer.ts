import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-visualizer',
  imports: [],
  templateUrl: './wave-visualizer.html',
  styleUrl: './wave-visualizer.css',
})
export class WaveVisualizer implements OnInit, OnDestroy {
  autoStart: boolean = true;

  // Default configuration
  config = {
    barCount: 20,
    barWidth: 4,
    barSpacing: 2,
    minHeight: 4,
    maxHeight: 100,
    animationSpeed: 1.5,
    waveType: 'sine',
    frequency: 1.5,
    amplitude: 1.0,
    phase: 0,
  };

  // Animation
  private animationId: number | null = null;
  private startTime: number = 0;
  private currentHeights: number[] = [];

  // Component state
  public bars: Array<{
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    opacity: number;
  }> = [];
  public containerWidth: number = 0;
  public containerHeight: number = 0;
  public isAnimating: boolean = false;
  public gradientId: string = '';

  ngOnInit() {
    this.initializeBars();

    if (this.autoStart) {
      this.startAnimation();
    }
  }

  ngOnDestroy() {
    this.stopAnimation();
  }

  private initializeBars() {
    const barCount = this.config.barCount!;
    this.bars = Array.from({ length: barCount }, (_, i) => ({
      id: `bar-${i}`,
      x: 0,
      y: 0,
      width: this.config.barWidth!,
      height: this.config.minHeight!,
      opacity: 0.8 + Math.sin(i * 0.5) * 0.2,
    }));

    this.bars.forEach((bar, i) => {
      bar.id = `bar-${i}`;
    });
    this.currentHeights = new Array(barCount).fill(this.config.minHeight!);
    this.updateBarPositions();
  }

  private updateBarPositions() {
    if (!this.containerWidth || !this.containerHeight) return;

    const totalBarWidth = this.config.barCount! * this.config.barWidth!;
    const totalSpacing = (this.config.barCount! - 1) * this.config.barSpacing!;
    const totalWidth = totalBarWidth + totalSpacing;
    const startX = (this.containerWidth - totalWidth) / 2;

    this.bars.forEach((bar, i) => {
      bar.x = startX + i * (this.config.barWidth! + this.config.barSpacing!);
      bar.width = this.config.barWidth!;
      this.updateBarHeight(i, this.currentHeights[i]);
    });
  }

  private updateBarHeight(index: number, height: number) {
    if (this.bars[index]) {
      this.bars[index].height = height;
      this.bars[index].y = this.containerHeight - height;
    }
  }

  public toggleAnimation() {
    if (this.isAnimating) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
  }

  private startAnimation() {
    if (this.animationId) return;

    this.isAnimating = true;
    this.startTime = performance.now();

    const animate = (currentTime: number) => {
      this.updateWaveVisualization(currentTime);

      if (this.isAnimating) {
        this.animationId = requestAnimationFrame(animate);
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }

  private updateWaveVisualization(currentTime: number) {
    const elapsed = (currentTime - this.startTime) * 0.001; // Convert to seconds
    const time = elapsed * this.config.animationSpeed!;

    for (let i = 0; i < this.config.barCount!; i++) {
      const x =
        (i / this.config.barCount!) * Math.PI * 2 * this.config.frequency!;

      const height =
        this.config.minHeight! +
        (Math.sin(x + time + this.config.phase!) * 0.5 + 0.5) *
          (this.config.maxHeight! - this.config.minHeight!) *
          this.config.amplitude!;

      this.currentHeights[i] = Math.max(height, this.config.minHeight!);
      this.updateBarHeight(i, this.currentHeights[i]);
    }
  }

  private stopAnimation() {
    this.isAnimating = false;

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    // Reset bars to minimum height
    for (let i = 0; i < this.config.barCount!; i++) {
      this.currentHeights[i] = this.config.minHeight!;
      this.updateBarHeight(i, this.currentHeights[i]);
    }
  }
}
