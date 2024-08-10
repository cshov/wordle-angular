import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseDialogComponent } from './lose-dialog.component';

describe('LoseDialogComponent', () => {
  let component: LoseDialogComponent;
  let fixture: ComponentFixture<LoseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
