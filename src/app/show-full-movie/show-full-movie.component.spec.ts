import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFullMovieComponent } from './show-full-movie.component';

describe('ShowFullMovieComponent', () => {
  let component: ShowFullMovieComponent;
  let fixture: ComponentFixture<ShowFullMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFullMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFullMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
