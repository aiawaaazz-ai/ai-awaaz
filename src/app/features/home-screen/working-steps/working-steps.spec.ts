import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingSteps } from './working-steps';

describe('WorkingSteps', () => {
  let component: WorkingSteps;
  let fixture: ComponentFixture<WorkingSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingSteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingSteps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
