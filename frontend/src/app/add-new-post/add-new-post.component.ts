import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormdialogComponent } from '../formdialog/formdialog.component';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.css',
})
export class AddNewPostComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(FormdialogComponent);
    dialogRef.afterClosed().subscribe(
      result => console.log(`Dialog result: ${result}`)
    )
  }
}

