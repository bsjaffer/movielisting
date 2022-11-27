import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardItemComponent } from './movie-card-item.component';

describe('MovieCardItemComponent', () => {
  let component: MovieCardItemComponent;
  let fixture: ComponentFixture<MovieCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
