import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousformationComponent } from './tousformation.component';

describe('TousformationComponent', () => {
  let component: TousformationComponent;
  let fixture: ComponentFixture<TousformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
