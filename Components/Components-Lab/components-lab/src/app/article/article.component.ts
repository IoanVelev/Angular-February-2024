import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDesc: string = '';
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show image';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }


  readMore() {
    this.articleDescLen = this.symbols;
    this.descToShow += this.article.description.substring(0, this.articleDescLen);


    if (this.descToShow.length >= this.article.description.length) {
      this.showReadMoreBtn = !this.showReadMoreBtn;
      this.showHideBtn = !this.showHideBtn;
    }
  }

  hideDesc() {
    this.descToShow = '';
    
    this.showReadMoreBtn = !this.showReadMoreBtn;
    this.showHideBtn = !this.showHideBtn;
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;

    if (this.imageIsShown) {
      this.imageButtonTitle = 'Hide image';
    } else {
      this.imageButtonTitle = 'Show image';
    }
  }
}
