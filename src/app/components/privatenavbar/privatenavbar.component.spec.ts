import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatenavbarComponent } from './privatenavbar.component';

describe('PrivatenavbarComponent', () => {
  let component: PrivatenavbarComponent;
  let fixture: ComponentFixture<PrivatenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
