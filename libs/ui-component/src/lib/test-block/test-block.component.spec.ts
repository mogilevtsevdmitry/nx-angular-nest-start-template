import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBlockComponent } from '@mda/ui-component';

describe('TestBlockComponent', () => {
  let component: TestBlockComponent;
  let fixture: ComponentFixture<TestBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
