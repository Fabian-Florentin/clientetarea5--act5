import { Component } from '@angular/core'; 
import { ProvinciasService } from 'src/app/services/provincias.service'; 
import { Router } from '@angular/router'; 
import { AppComponent } from 'src/app/app.component'; 
 
@Component({ 
  selector: 'app-navigation', 
  templateUrl: './navigation.component.html', 
  styleUrls: ['./navigation.component.css'] 
}) 
export class NavigationComponent { 
  UserLogeado = false; 
 
  constructor( private provinciasService: ProvinciasService, private router: Router, public AppComponent: AppComponent) {  
    this.UserLogeado = this.AppComponent.UserLogeado; 
  } 
 
  logout() { 
 
    this.provinciasService.logOut(); 
    console.log("Cerrando sesion!!!"); 
    this.AppComponent.UserLogeado = false; 
    this.router.navigate(['usuarios/principal']); 
  } 
 
}