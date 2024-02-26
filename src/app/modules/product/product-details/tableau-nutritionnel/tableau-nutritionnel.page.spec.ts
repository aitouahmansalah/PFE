import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableauNutritionnelPage } from './tableau-nutritionnel.page';

describe('TableauNutritionnelPage', () => {
  let component: TableauNutritionnelPage;
  let fixture: ComponentFixture<TableauNutritionnelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableauNutritionnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
