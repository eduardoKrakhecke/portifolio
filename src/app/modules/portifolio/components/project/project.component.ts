import { Component, inject, signal } from '@angular/core';
import { IProject } from "../../interface/IProject.interface";

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from "../../enum/EDialogPanelClass.enum";
import { DialogProjectComponent } from "../dialog-project/dialog-project.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  #dialog = inject(MatDialog)
  public projects = signal<IProject[]>([
    {
      img: 'assets/imgs/projects/lista-de-tarefas.png',
      alt: 'imagem logo projeto',
      title: 'Lista de tarefas',
      width: '100px',
      height: '51px',
      description: '<p>Agende as suas tarefas diárias</p>',
      links: [
        {
          name: 'Projeto de lista de tarefas',
          href: ''
        }
      ]
    }
  ])

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectComponent, {
      data: data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
