import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
/* We're using the ActivatedRoute service to get the id of the card from the URL, then we're using the
DetailService to get the card from the cards array */
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
