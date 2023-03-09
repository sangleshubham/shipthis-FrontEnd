import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http:HttpClient) { }


  currentMovieId : any

  public getMoviesProtected(page : number){


    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",page);

    return this.http.get('https://muddy-teal-waders.cyclic.app/movies', {
      observe:'body',
      withCredentials : true,
      params: queryParams,
      headers : new HttpHeaders().append('Content-Type' , 'application/json')
    } )

  }


  public registerUserUnProtected(payload : any) {

    return this.http.post("https://muddy-teal-waders.cyclic.app/register" , payload , {
      observe:'body',
      withCredentials : true,
      headers : new HttpHeaders().append('Content-Type' , 'application/json')
  })

  }

  public loginUserUnProtected(payload : any) {

    return this.http.post("https://muddy-teal-waders.cyclic.app/login" , payload , {
      observe:'body',
      withCredentials : true,
      headers : new HttpHeaders().append('Content-Type' , 'application/json')
  })

  }


}
