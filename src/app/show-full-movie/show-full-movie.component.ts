import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-show-full-movie',
  templateUrl: './show-full-movie.component.html',
  styleUrls: ['./show-full-movie.component.scss']
})
export class ShowFullMovieComponent {

  item : any

  constructor(private service : SharedServiceService, private router : Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    if(!this.service.currentMovieId)
    {
      this.router.navigate([''])
    }
    else{
      this.item = this.service.currentMovieId
      console.log(this.item)
    }

  }

}
