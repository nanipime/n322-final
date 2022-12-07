import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  public cards = [
    {
      id: '0',
      cardImg: 'assets/dogpic1.jpg',
      subTitle: 'New York City',
      title: 'Akita',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis, officia porro nulla obcaecati veritatis ducimus dolor? Unde officiis animi ipsam esse mollitia, deleniti consequatur maiores quidem aut tempore laudantium fugit aperiam quasi!',
    },
    {
      id: '1',
      cardImg: 'assets/dogpic2.jpg',
      subTitle: 'Washington, D.C.',
      title: 'Bella',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis, officia porro nulla obcaecati veritatis ducimus dolor? Unde officiis animi ipsam esse mollitia, deleniti consequatur maiores quidem aut tempore laudantium fugit aperiam quasi!',
    },
    {
      id: '2',
      cardImg: 'assets/dogpic3.jpg',
      subTitle: 'Washington, D.C.',
      title: 'Teacup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis, officia porro nulla obcaecati veritatis ducimus dolor? Unde officiis animi ipsam esse mollitia, deleniti consequatur maiores quidem aut tempore laudantium fugit aperiam quasi!',
    },
    {
      id: '3',
      cardImg: 'assets/dogpic4.jpg',
      subTitle: 'Washington, D.C.',
      title: 'Teddy',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis, officia porro nulla obcaecati veritatis ducimus dolor? Unde officiis animi ipsam esse mollitia, deleniti consequatur maiores quidem aut tempore laudantium fugit aperiam quasi!',
    },
    {
      id: '4',
      cardImg: 'assets/dogpic5.jpeg',
      subTitle: 'Washington, D.C.',
      title: 'Bolt',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis, officia porro nulla obcaecati veritatis ducimus dolor? Unde officiis animi ipsam esse mollitia, deleniti consequatur maiores quidem aut tempore laudantium fugit aperiam quasi!',
    },
  ];
  constructor() {}

  getCard(cardId: String) {
    for (let i = 0; i < this.cards.length; i++) {
      const element = this.cards[i];
      if (element.id == cardId) {
        return element;
      }
    }
  }
}
