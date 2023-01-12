import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatedComponent } from './post-created.component';

describe('PostCreatedComponent', () => {
  let component: PostCreatedComponent;
  let fixture: ComponentFixture<PostCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
