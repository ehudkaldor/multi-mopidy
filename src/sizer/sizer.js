import '../../node_modules/semantic-ui/dist/semantic.js';
import '../resources/elements/node/node';
import { NodeModel } from '../resources/models/nodeModel';

export class Sizer{
  // nodes = [];

  constructor() {
    this.nodes = [
      new NodeModel("ehud", {}, {})
    ];
  }
  // nnode = new Node();
  mynode = "";

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

  open_node_modal(id) {
    if (id < 0) {
      this.mynode = new NodeModel("", {}, {});
    } else {
      this.mynode = this.nodes[id];
    }
    // alert("name: " + this.mynode.name);
    $("#node_modal")
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
