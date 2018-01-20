export class DiskTypeModel {

  constructor(name, capacity, disk_type_index, capacity_unit_index){
    this.name = name;
    this.capacity = capacity;
    this.disk_type_index = disk_type_index;
    this.capacity_unit_index = capacity_unit_index;
    this.id = "";
  }

  activate() {
    $(".selection.dropdown")
    .dropdown()
  }
}
