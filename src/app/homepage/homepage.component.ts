import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  homePageData: any

  currentPage = 1

  constructor(private _service: SharedServiceService, private router: Router) { }
  ngOnInit(): void {

    this._service.getMoviesProtected(this.currentPage).subscribe((data: any) => {
      if (data?.message === 'failed') {
        this.router.navigate(['login'])
        console.log('unautorised')
      }
      else {
        this.homePageData = data
        console.log(this.homePageData)
      }

    })


  }

  public log(data : any){
    console.log(data)
  }


  public nextPage()
  {
    this.currentPage++
    this._service.getMoviesProtected(this.currentPage).subscribe((data: any) => {
      if (data?.message === 'failed') {
        this.router.navigate(['login'])
        console.log('unautorised')
      }
      else {
        this.homePageData = data
        console.log(this.homePageData)
      }

    })
  }


  public oldPage()
  {
    this.currentPage--
    this._service.getMoviesProtected(this.currentPage).subscribe((data: any) => {
      if (data?.message === 'failed') {
        this.router.navigate(['login'])
        console.log('unautorised')
      }
      else {
        this.homePageData = data
        console.log(this.homePageData)
      }

    })
  }

  public openWindow(event : any){

    console.log("The current event", event)
    this._service.currentMovieId = event
    this.router.navigate(['showMovie'])

  }



}
