import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProject } from "../../interface/IProject.interface";
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss'
})
export class DialogProjectComponent implements OnInit{

  constructor(
    private dialogRef: MatDialogRef<DialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProject) {
  }
  public getData = signal<IProject | null>(null)

  ngOnInit(): void {
    this.getData.set(this._data)
  }

  public closeModal() {
     return this.dialogRef.close()
  }
}
