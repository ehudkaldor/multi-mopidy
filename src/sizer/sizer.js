// import '../../node_modules/semantic-ui/dist/semantic.js';
// import '../resources/elements/node/node';
import { NodeModel } from '../resources/models/nodeModel';
import { NodeService } from '../resources/services/nodeService';
import {inject} from 'aurelia-framework';

@inject(NodeService)
export class Sizer{
  nodes = [];
  mynode = "";

  constructor(nodeService) {
    this.nodeService = nodeService;
  }

  created(){
    // this.nodeService.getNodes().then(nodes => {
    //   this.nodes = nodes;
    //   this.nodes.map ( node => {
    //     console.debug("initing accordion id " + "#node_model_"+node+ " with trigger " + "#node_model_trigger_"+node.id)
    //     $(".ui.accordion").onClick(alert(""));
    //     $(".ui.accordion")
    //     .accordion(
    //       {
    //       selector: {
    //         trigger: ".dropdown.icon"
    //       }
    //     }
    //     )
    //   })
    // }).catch ( err =>
    //   console.error(err)
    // )
  }
  // nnode = new Node();

  activate() {
    console.debug("activate()")
    this.nodeService.getNodes().then(nodes => {
      console.debug("getNodes returned: " + JSON.stringify(nodes))
      this.nodes = nodes
      this.nodes.map ( node => {
        console.debug("initing accordion id " + "#node_model_"+node.id + " with trigger " + "#node_model_trigger_"+node.id)
        $(".ui.accordion")
        .accordion(
          // {
          // selector: {
          //   trigger: "#node_model_trigger_"+node.id
          // }
        // }
        )
      })
    }).catch ( err =>
      console.error(err)
    )
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

  open_node_modal(node) {
    if (typeof node != NodeModel) {
      this.mynode = new NodeModel("", {}, {});
    } else {
      this.mynode = this.nodes.find(x => x.id == node.id);
      console.log(JSON.stringify(this.mynode));
    }
    console.log("opening node modal with: " + JSON.stringify(this.mynode));
    let me = this;
    $("#node_modal")
    .modal({
      onDeny    : function(){
        console.debug('node modal canceled');
        // return false;
      },
      onApprove : function() {
        console.debug('saving node');
        me.nodeService.saveNode(this.mynode);
      },
      'inverted' : true
    })
    .modal('show');
  }
}
