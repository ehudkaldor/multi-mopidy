import {NodeModel} from 'resources/models/nodeModel';
import {DiskModel} from 'resources/models/diskModel';
import {NicModel} from 'resources/models/nicModel';
import {NodeTypeModel} from 'resources/models/nodeTypeModel';
import {DiskTypeModel} from 'resources/models/diskTypeModel';
import {NicTypeModel} from 'resources/models/nicTypeModel';
import {DiskService} from 'resources/services/diskService';
import {NicService} from 'resources/services/nicService';
import {inject} from 'aurelia-framework';


let latency = 200;
let id = 0;

@inject(NicService, DiskService)
export class NodeService  {
  isRequesting = false;

  nodeTypes = [];
  nodes = [];

  getId(){
    return ++id;
  }

  constructor(nicService, diskService) {
    this.nicService = nicService;
    this.diskService = diskService;

    this.diskService.getDiskType(1).then ( diskType =>
      this.nicService.getNicType(1).then ( nicType => {
        // console.log("in inner ring")
        this.saveNodeType(new NodeTypeModel(
          "test node",
          [ new DiskModel(diskType, 60) ],
          [ new NicModel(nicType, 2) ]
        )).then (ndtp => {
          console.log("ndtp: " + JSON.stringify(ndtp));
          this.saveNode(new NodeModel(ndtp, "4"));
        });
        this.saveNodeType(new NodeTypeModel(
          "test node 3",
          [ new DiskModel(diskType, 24) ],
          [ new NicModel(nicType, 2) ]
        )).then (ndtp => {
          console.log("ndtp: " + JSON.stringify(ndtp));
          this.saveNode(new NodeModel(ndtp, "2"));
        });
        // let node = new NodeModel(this.nodeTypes[0], "4");
        // this.nodeTypes[0] = nodeType;
        console.log("in nodeService. nodeTypes: " + JSON.stringify(this.nodeTypes));
        console.log("in nodeService. nodes: " + JSON.stringify(this.nodes));
      })
    );
  }

  saveNode(newNode) {
    console.log("saveNode called with " + JSON.stringify(newNode));
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(newNode));
        let found = this.nodes.filter(x => x.id == newNode.id)[0];

        if (found) {
          console.log("node found, replacing existing")
          let index = this.nodes.indexOf(found);
          this.nodes[index] = instance;
        } else {
          console.log("node not found, pushing in")
          instance.id = this.getId();
          this.nodes.push(instance);
        }

        this.isRequesting = false;
        console.log("this.nodes: " + JSON.stringify(this.nodes));
        resolve(instance);
      }, latency);
    });
  }

  saveNodeType(newNodeType) {
    console.log("saveNodeType called with " + JSON.stringify(newNodeType));
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(newNodeType));
        let found = this.nodeTypes.filter(x => x.id == newNodeType.id)[0];

        if (found) {
          console.log("node type found, replacing existing")
          let index = this.nodeTypes.indexOf(found);
          this.nodeTypes[index] = instance;
        } else {
          console.log("node type not found, pushing in")
          instance.id = this.getId();
          this.nodeTypes.push(instance);
        }

        this.isRequesting = false;
        console.log("this.nodeTypes: " + JSON.stringify(this.nodeTypes));
        resolve(instance);
      }, latency);
    });
  }

  getNodes() {
    console.log("getNodes");
    // return this.nodes;
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.nodes);
        this.isRequesting = false;
      }, latency);
    });
  }

  getNode(id){
    console.log("getNode(id)");
    this.isRequesting = true;
    // let me = this;
    return new Promise(resolve => {
      setTimeout(() => {
        // let found = this.nodes.filter(x => x.id == id)[0];
        // let found = this.nodes[id];
        let found = this.nodes.find(x => x.id == id);
        console.log("getNode(" + id + ") found: " + JSON.stringify(found))
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  getNodeTypes() {
    console.log("getNodeTypes");
    // return this.nodeTypes;
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.nodeTypes);
        this.isRequesting = false;
      }, latency);
    });
  }

  getNodeType(id){
    console.log("getNodeType(id)");
    this.isRequesting = true;
    // let me = this;
    return new Promise(resolve => {
      setTimeout(() => {
        // let found = this.nodes.filter(x => x.id == id)[0];
        // let found = this.nodes[id];
        let found = this.nodeTypes.find(x => x.id == id);
        console.log("id: " + id + ", found: " + JSON.stringify(found));
        resolve(JSON.parse(JSON.stringify(found)));
        console.log("getNodeType(" + id + ") found: " + JSON.stringify(found));
        this.isRequesting = false;
      }, latency);
    });
  }

}
