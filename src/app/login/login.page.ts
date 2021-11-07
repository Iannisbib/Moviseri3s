import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public user:any
public clave:any

  constructor(private loginService:LoginService, private router:Router) { }

    
    enviardatos(){
this.loginService.check(this.user,this.clave).subscribe(data =>{
  if (data["length"]==0){
    alert("datosinvalidos")
  }
  else {this.router.navigate(['/principal'])}
})

    }

  ngOnInit() {
  }

}

