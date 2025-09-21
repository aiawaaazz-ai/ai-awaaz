import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockFeatures } from './unlock-features';

describe('UnlockFeatures', () => {
  let component: UnlockFeatures;
  let fixture: ComponentFixture<UnlockFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
