import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePlayingSongComponent } from './image-playing-song.component';

describe('ImagePlayingSongComponent', () => {
  let component: ImagePlayingSongComponent;
  let fixture: ComponentFixture<ImagePlayingSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePlayingSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePlayingSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
