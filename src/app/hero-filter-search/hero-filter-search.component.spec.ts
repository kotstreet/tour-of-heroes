import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFilterSearchComponent } from './hero-filter-search.component';

describe('HeroFilterSearchComponent', () => {
  let component: HeroFilterSearchComponent;
  let fixture: ComponentFixture<HeroFilterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFilterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
