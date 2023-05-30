import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsfwComponent } from './nsfw.component';

describe('NsfwComponent', () => {
  let component: NsfwComponent;
  let fixture: ComponentFixture<NsfwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NsfwComponent]
    });
    fixture = TestBed.createComponent(NsfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
