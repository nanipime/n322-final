import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public card = {};
  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.card = this.detailService.getCard(id);
  }
}
