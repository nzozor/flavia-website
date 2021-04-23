import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flavia-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() showIcon = true;

  constructor() { }

  ngOnInit(): void {
  }
}
