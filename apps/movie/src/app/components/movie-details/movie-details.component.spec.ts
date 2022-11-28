import { Router, ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsComponent, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
    router = TestBed.inject(Router);
    activatedRoute= TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
