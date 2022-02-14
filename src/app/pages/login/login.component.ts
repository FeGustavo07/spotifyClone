import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private SpotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  openLoginPage() {
    window.location.href = this.SpotifyService.getUrlLogin()
  }

}
