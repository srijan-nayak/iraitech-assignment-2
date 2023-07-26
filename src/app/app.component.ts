import { Component } from '@angular/core';
import { ComponentStructureService } from './component-structure.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private structure: ComponentStructureService) {}

  addParent() {
    this.structure.addParent();
  }

  save() {
    this.structure.saveComponents();
  }

  get parents() {
    return this.structure.getParents();
  }
}
