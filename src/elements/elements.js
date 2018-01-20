import { NicModel } from "resources/models/nicModel.js";
import { DiskModel } from "resources/models/diskModel.js";
import { DiskTypeModelModal } from "resources/elements/modals/diskTypeModelModal.js";
import { NodeTypeModel } from "resources/models/nodeTypeModel.js";
import { DiskTypeModel } from "resources/models/diskTypeModel.js";
import { NicService } from "resources/services/nicService.js";
import { DiskService } from "resources/services/diskService.js";
import { NodeService } from "resources/services/nodeService.js";
import { inject } from 'aurelia-framework';

@inject(NicService, DiskService, NodeService)
export class Elements{
  constructor(nicService, diskService, nodeService){
    this.nicService = nicService;
    this.diskService = diskService;
    this.nodeService = nodeService;
  }

  nodeTypes = [];

  activate() {
    console.log("activated");

    // this.nodeService.getNodeTypes().then ( nodeTypes => {
    //   console.log("my nodeTypes: " + JSON.stringify(nodeTypes));
    //   this.nodeTypes = nodeTypes;
    // });
    // console.log(this.nodeService.getNodeTypes());//.then (x => {
    //   console.log("nodeService.getNodeTypes() is");
    //   console.log(x);
    // });
  }

  created(){
    // this.nodeService.getNodeTypes().then ( nodeTypes => {
    //   console.log("my nodeTypes: " + JSON.stringify(nodeTypes));
    //   this.nodeTypes = nodeTypes;
    // });
    // console.log("created. nodeTypes: " + JSON.stringify(this.nodeTypes));

    // $("#node_type_modal_nics")
    // .accordion({
    //   selector: {
    //     trigger: '.page.disks'
    //   }
    // });
    this.nodeService.getNodeTypes().then(nodeTypes => {
      this.nodeTypes = nodeTypes;
      console.log("my nodeTypes: " + JSON.stringify(nodeTypes));
    });
  }

  getKeys(my_map) {
    console.log("my_map: " + JSON.stringify(my_map));
    console.log("my_map type: " + typeof(my_map));
    if (typeof my_map === "object") {
      return Object.keys(my_map);
    }
    if (typeof my_map !== 'undefined') {
      return my_map.then ( m => {
        console.log("digging keys of my_map:");
        console.log(m);
        Object.keys(m);
      })
    }
    else {
      console.log("my_map was undefined. returning empty array")
      return [];
    }
  }

  toJson(jsVal){
    console.log("convertin " + JSON.stringify(jsVal) + " to JSON");
    return JSON.stringify(jsVal);
  }

  open_nic_modal() {
    // alert("clicked");
    $("#nic_modal")
    .modal({
      onDeny    : function(){
        // alert('Wait not yet!');
        return false;
      },
      onApprove : function() {
        // window.alert('Approved!');
      },
      'inverted' : true
    })
    .modal('show');
  }

  open_disk_modal(diskType) {
    // alert("clicked");
    if (typeof diskType == 'undefined') {
      this.myDiskTypeModel = new DiskTypeModel("", "", "", "");
      this.activity_word = "Add";
      console.log("new disk");
    } else {
      this.myDiskTypeModel = this.diskService.getDiskTypes.then (disks => {
        console.debug("in getDiskTypes promise")
        this.myDiskTypeModel = disks.find( x => x.id == diskType.id)
        console.debug("found disk: " + JSON.stringify(this.myDiskTypeModel))
        this.activity_word = "Edit";
      })
    }
    $("#disk_type_modal")
    .modal({
      // onDeny    : function(){
      //   // alert('Wait not yet!');
      //   return false;
      // },
      // onApprove : function() {
      //   // window.alert('Approved!');
      // },
      'inverted' : true
    })
    .modal('show');
  }

  open_node_modal(nodeType) {
    // console.log("nodeType: " + JSON.stringify(nodeType));
    if (typeof nodeType == 'undefined') {
      this.myNodeTypeModel = new NodeTypeModel("", {}, {});
      this.activity_word = "Add";
      console.log("new node");
    } else {
      this.myNodeTypeModel = this.nodeTypes.find( x => x.id == nodeType.id);
      this.activity_word = "Edit";
      console.log("editing node: " + JSON.stringify(this.myNodeTypeModel));
    }
    $("#node_type_modal_nics")
    .accordion({
      selector: {
        trigger: '.title .icon'
      }
    });
    $("#node_type_modal")
    .modal({
      // onDeny    : function(){
      //   // alert('Wait not yet!');
      //   return false;
      // },
      // onApprove : function() {
      //   // window.alert('Approved!');
      // },
      'inverted' : true
    })
    .modal('show');
  }
}
