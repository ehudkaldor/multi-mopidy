import {bindable} from 'aurelia-framework';

export class Node{
  // @bindable name = "new";
  // nics = {};
  // disks = {};
  @bindable my_node;

  constructor() {
  }

  activate (params) {
    console.log("name: " + this.my_node.name);
    console.log("params: " + params);
    this.name = my_node.name;
    // this.nics = my_node.nics;
    // this.disks = my_node.disks;
  }
}
