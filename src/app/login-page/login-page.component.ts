import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  email : any
  password : any

  constructor(private service : SharedServiceService, private router: Router)
  {

  }

  loginUsingData()
  {
    let payload = {
      "username" : this.email,
      "password" : this.password
  }
    this.service.loginUserUnProtected(payload).subscribe( (data:any)=> {
      console.log(data )
      if(data.message == "Service is up")
        {
          this.router.navigate([''])
        }

  })
  }


}
