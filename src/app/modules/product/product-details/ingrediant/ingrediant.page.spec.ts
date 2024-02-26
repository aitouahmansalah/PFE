import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngrediantPage } from './ingrediant.page';

describe('IngrediantPage', () => {
  let component: IngrediantPage;
  let fixture: ComponentFixture<IngrediantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngrediantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
