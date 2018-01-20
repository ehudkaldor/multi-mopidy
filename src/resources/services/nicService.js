import { NicTypeModel } from 'resources/models/nicTypeModel';
let latency = 200;

let id = 0;

export class NicService{
  nicTypes = [];

  getId(){
    return ++id;
  }

  constructor() {
    this.saveNicType(new NicTypeModel("10GigE", 10));
  }

  getNicTypes(){
    console.log("getNicTypes");
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.nicTypes);
        this.isRequesting = false;
      }, latency);
    });
  }

  getNicType(id) {
    console.log("getNicType(id)");
    this.isRequesting = true;
    // let me = this;
    return new Promise(resolve => {
      setTimeout(() => {
        // let found = this.nodes.filter(x => x.id == id)[0];
        // let found = this.nodes[id];
        let found = this.nicTypes.filter(x => x.id == id)[0];
        console.log("id: " + id + ", found: " + JSON.stringify(found));
        resolve(JSON.parse(JSON.stringify(found)));
        console.log("getNicType(" + id + ") found: " + JSON.stringify(found));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveNicType(newNicType) {
    console.log("saveNicType called with " + JSON.stringify(newNicType));
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(newNicType));
        let found = this.nicTypes.filter(x => x.id == newNicType.id)[0];

        if (found) {
          console.log("nic type found, replacing existing")
          let index = this.nicTypes.indexOf(found);
          this.nicTypes[index] = instance;
        } else {
          console.log("nic type not found, pushing in")
          instance.id = this.getId();
          this.nicTypes.push(instance);
        }

        this.isRequesting = false;
        console.log("this.nicTypes: " + JSON.stringify(this.nicTypes));
        resolve(instance);
      }, latency);
    });
  }
}
