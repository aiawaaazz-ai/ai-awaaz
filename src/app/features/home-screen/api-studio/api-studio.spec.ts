import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStudio } from './api-studio';

describe('ApiStudio', () => {
  let component: ApiStudio;
  let fixture: ComponentFixture<ApiStudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiStudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiStudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
