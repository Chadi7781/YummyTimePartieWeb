import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantService} from '../../../Service/restaurant.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   id;
   restaurant;
  constructor(private  router:ActivatedRoute,private restService:RestaurantService) {


     this.id=this.router.snapshot.params["id"];

     console.log(this.id)

  }

  ngOnInit() {


    this.restService.getAllRestaurantByID(this.id).subscribe(res=>{
      console.log(res)
      this.restaurant=res;

    })
  }


}
