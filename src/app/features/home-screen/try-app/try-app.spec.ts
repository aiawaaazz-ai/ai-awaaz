import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryApp } from './try-app';

describe('TryApp', () => {
  let component: TryApp;
  let fixture: ComponentFixture<TryApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
