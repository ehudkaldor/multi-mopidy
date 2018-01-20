import { bindable } from 'aurelia-framework';

export class NodeTypeModelModal{
  // @bindable name = "new";
  // nics = {};
  // disks = {};
    @bindable my_node_type_model;
    @bindable activity_word;

    constructor() {
    }

    toJson(jsVal){
      console.log("convertin " + JSON.stringify(jsVal) + " to JSON");
      return JSON.stringify(jsVal);
    }

    activate() {
      console.debug("activate")
    }

    created () {
      console.log("created");
      // alert(JSON.stringify(my_node));
      // this.name = my_node.name;
      // this.nics = my_node.nics;
      // this.disks = my_node.disks;
    }
  }
