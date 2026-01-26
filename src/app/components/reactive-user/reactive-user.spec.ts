import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUSer } from './reactive-user';

describe('ReactiveUSer', () => {
  let component: ReactiveUSer;
  let fixture: ComponentFixture<ReactiveUSer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveUSer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveUSer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
