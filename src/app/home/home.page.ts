import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController, IonModal } from '@ionic/angular';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal;
  profile = null;
  title: string;
  subTitle: string;
  imageURL: string;
  content: string;

  public cards = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private detailService: DetailService
  ) {}

  ngOnInit() {
    this.cards = this.detailService.cards;
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
