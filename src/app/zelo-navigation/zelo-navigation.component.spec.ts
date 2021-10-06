import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeloNavigationComponent } from './zelo-navigation.component';

describe('ZeloNavigationComponent', () => {
  let component: ZeloNavigationComponent;
  let fixture: ComponentFixture<ZeloNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeloNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeloNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
