import { Component, Input, OnInit } from '@angular/core';
import { ComponentStructureService } from '../component-structure.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(private structure: ComponentStructureService) {}

  @Input({ required: true }) name: string = null!;
  @Input({ required: true }) parentName: string = null!;
  inputName: string = null!;

  ngOnInit(): void {
    this.inputName = this.name;
  }

  updateName() {
    this.structure.updateChildName(this.parentName, this.name, this.inputName);
  }
}
