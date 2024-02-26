import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutriScorePage } from './nutri-score.page';

describe('NutriScorePage', () => {
  let component: NutriScorePage;
  let fixture: ComponentFixture<NutriScorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NutriScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
