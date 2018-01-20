import { DiskTypeModel } from 'resources/models/diskTypeModel';
let latency = 200;

let id = 0;

let capacityUnits = ["GB (GigaBytes)", "Gb (GigaBits)", "TB (TeraBytes)", "TB (TeraBits)"]
let mediaTypes = ["SATA 7.2k", "SAS 10k", "SAS 15k", "SSD"]

export class DiskService{

  diskTypes = [];

  constructor() {
    this.saveDiskType(new DiskTypeModel("10TB SATA", "7200", "10", 2));
    this.saveDiskType(new DiskTypeModel("8TB SATA", "7200", "8", 2));
    this.saveDiskType(new DiskTypeModel("6TB SATA", "7200", "6", 2));
  }

  getId(){
    return ++id;
  }

  getDiskTypes() {
    return this.diskTypes;
  }

  getMediaTypes() {
    return mediaTypes
  }

  getDiskCapacityUnits() {
    return capacityUnits
  }

  getDiskType(id) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = this.diskTypes.filter(x => x.id == id)[0];
        if (found) {
          resolve(JSON.parse(JSON.stringify(found)));
        }
        else {
          resolve();
        }
        this.isRequesting = false;
      }, latency);
    });

    // return this.diskTypes[id];
  }

  saveDiskType(newDiskType){
    let instance = JSON.parse(JSON.stringify(newDiskType));
    let found = this.diskTypes.filter(x => x.id == newDiskType.id)[0];
    if (found) {
      let index = this.diskTypes.indexOf(found);
      this.diskTypes[index] = instance;
    } else {
      instance.id = this.getId();
      this.diskTypes.push(instance);
    }
  }
}
