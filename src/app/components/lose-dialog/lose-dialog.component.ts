import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-lose-dialog',
  standalone: true,
  imports: [
    MatIcon,
    MatDialogClose
  ],
  templateUrl: './lose-dialog.component.html',
  styleUrl: './lose-dialog.component.css'
})
export class LoseDialogComponent {

  constructor(private dialogRef: MatDialogRef<LoseDialogComponent>) {
  }

}
