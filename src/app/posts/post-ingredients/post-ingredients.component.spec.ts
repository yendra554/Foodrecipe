import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIngredientsComponent } from './post-ingredients.component';

describe('PostIngredientsComponent', () => {
  let component: PostIngredientsComponent;
  let fixture: ComponentFixture<PostIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
