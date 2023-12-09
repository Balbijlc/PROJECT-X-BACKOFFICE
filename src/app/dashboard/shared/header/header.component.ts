import { Component, OnInit, computed, inject } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponentt {


  private authService = inject( AuthService );

  public user = computed(() => this.authService.currentUser() );



  onLogout() {
    this.authService.logout();

  }

}
