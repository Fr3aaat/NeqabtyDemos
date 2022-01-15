import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  serviceUrl = 'https://trips.ese.et3.co/api/cities';
  buildingsUrl = 'https://trips.ese.et3.co/api/destinations';

  cities : any;
  filteredBuildings : any;

  filterData = new FormGroup({
    city : new FormControl(''),
    checkin : new FormControl('' , Validators.required),
    checkout : new FormControl('' , Validators.required)
  })

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getCities();
  }

  // get all cities
  getCities(){
    this.http.get(this.serviceUrl).subscribe(
      (res : any)=>{
        console.log(res);
        this.cities = res.cities;
      },
      (err : any ) => {
        console.log("Error: " , err);
      }
    )
  }

  // get all buildings filtered by checkin and checkout date
  // getAllBuildings(checkinDate:any , checkoutDate:any){
  //   this.http.get(this.buildingsUrl + '/?filter{buildings.unit_features_classes.pricings.period.start_date}=' + checkinDate + '&filter{buildings.unit_features_classes.pricings.period.end_date}=' + checkoutDate).subscribe(
  //     (res:any) => {
  //       this.filteredBuildings = res;
  //       console.log("Filtered Buildings: " , this.filteredBuildings);
  //     },
  //     (err : any) => {
  //       console.log("Error: " , err);
  //     }
  //   )
  // }

  // show all results, when click on search btn
  // showResults(){
  //   let city = this.filterData.get("city")?.value;
  //   let checkinDate = this.filterData.get("checkin")?.value;
  //   let checkoutDate = this.filterData.get("checkout")?.value;
  //   console.log("checkin date: " , checkinDate , "& checkout date: " , checkoutDate);

  //   this.getAllBuildings(checkinDate , checkoutDate);
  // }
}
