import { Component, signal } from '@angular/core';
import {IKnowledge} from "../../interface/IKnowledge.interface";

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public knoledges = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'icone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'icone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'icone de conhecimento de sass'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'icone de conhecimento em javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'icone de conhecimento em angular'
    }
  ])

}
