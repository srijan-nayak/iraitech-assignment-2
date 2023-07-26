import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComponentStructureService {
  constructor(private http: HttpClient) {}

  structure = new Map<string, string[]>([
    ['X1', ['Y1', 'Y2']],
    ['X2', ['Y1']],
  ]);

  saveComponents() {
    const data = Object.fromEntries(this.structure.entries());
    this.http
      .post<{ message: string }>('http://localhost:3000/structure', data)
      .subscribe((value) => {
        alert(value.message);
      });
  }

  addParent() {
    const keyName = `X${this.structure.size + 1}`;
    this.structure.set(keyName, []);
  }

  addChild(parentName: string) {
    const children = this.structure.get(parentName);

    if (children == undefined) {
      return;
    }

    const keyName = `Y${children.length + 1}`;
    children.push(keyName);
  }

  getChildren(parentName: string) {
    const children = this.structure.get(parentName);
    return children == undefined ? [] : [...children];
  }

  getParents() {
    return [...this.structure.keys()];
  }

  updateParentName(oldName: string, newName: string) {
    const children = this.structure.get(oldName);
    if (children == undefined) {
      return;
    }
    this.structure.delete(oldName);
    this.structure.set(newName, children);
  }

  updateChildName(parentName: string, oldName: string, newName: string) {
    const children = this.structure.get(parentName);
    if (children == undefined) {
      return;
    }
    const childIndex = children.indexOf(oldName);
    children[childIndex] = newName;
  }
}
