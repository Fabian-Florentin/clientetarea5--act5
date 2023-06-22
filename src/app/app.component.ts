import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { UsuariosService } from './services/usuarios.service'; 
 
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
  title = 'cliente01'; 
  UserLogeado = false; 
 
  constructor(private usuariosService:UsuariosService,private router:Router) { 
 
  } 
}