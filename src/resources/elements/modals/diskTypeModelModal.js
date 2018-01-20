import { bindable, inject } from 'aurelia-framework';
import {DiskService} from 'resources/services/diskService';

@inject(DiskService)
export class DiskTypeModelModal{
  @bindable my_disk_type_model;
  @bindable activity_word;

  constructor (diskService) {
    this.diskService = diskService
    console.debug("disk capacity types: " + this.diskService.getDiskCapacityUnits())
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

  capacityUnits() {
    return this.diskService.getDiskCapacityUnits()
  }

  mediaTypes() {
    return this.diskService.getMediaTypes()
  }

  getIndex(arr, o){
    return arr.indexOf(o)
  }
}
