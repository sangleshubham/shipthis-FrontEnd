import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email : any = undefined
  password : any = undefined
  age : any = undefined



  constructor (private http: HttpClient , private service : SharedServiceService, private router: Router)
  {

  }

  ngOnInit(): void {

  }


  submit(){
    console.log("function Called")
    let payload = {
        "username" : this.email,
        "password" : this.password,
        "age" : this.age
    }

      this.service.registerUserUnProtected(payload).subscribe( (data:any)=> {
        console.log(data )
        if(data.message == "Success")
          {
            this.router.navigate(['login'])
          }
      })

  }

}
