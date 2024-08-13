import { Component, signal } from '@angular/core';
import { IProject } from "../../interface/IProject.interface";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

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
          name: '',
          href: ''
        }
      ]
    }
  ])

}
