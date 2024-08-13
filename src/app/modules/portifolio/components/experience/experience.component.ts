import { Component, signal } from '@angular/core';
import { IExperience } from "../../interface/IExperience.interface";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
 public experiences = signal<IExperience[]>([{
   summary: {
     strong: "Desenvolvedor Front end Angular 2+",
     p: "B2ML Sistemas"
   },
   text: "<p>Desenvolvimento front end utilizando o framework Angular 16 para um projeto de saúde pública </p>"
 },
   {
     summary: {
       strong: "Desenvolvedor Front end Angular 2+ | ReactJs",
       p: "CWI Software"
     },
     text: "<p>Desenvolvimento front end utilizando o framework Angular 2+ para um projeto de uma agenda de escala de trabalho.. </p>"
   }
 ])
}
