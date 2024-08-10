import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-win-dialog',
  standalone: true,
  imports: [
    MatIcon,
    MatDialogClose
  ],
  templateUrl: './win-dialog.component.html',
  styleUrl: './win-dialog.component.css'
})
export class WinDialogComponent {

  constructor(private dialogRef: MatDialogRef<WinDialogComponent>) {
  }

}
