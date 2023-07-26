import { Component, Input, OnInit } from '@angular/core';
import { ComponentStructureService } from '../component-structure.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private structure: ComponentStructureService) {}

  @Input({ required: true }) name: string = null!;
  inputName: string = null!;

  ngOnInit(): void {
    this.inputName = this.name;
  }

  addChild() {
    this.structure.addChild(this.name);
  }

  updateName() {
    this.structure.updateParentName(this.name, this.inputName);
  }

  get children() {
    return this.structure.getChildren(this.name);
  }
}
