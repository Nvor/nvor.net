import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tor',
  templateUrl: './tor.component.html',
  styleUrls: ['./tor.component.scss']
})
export class TorComponent implements OnInit {
  relays: string[];
  onions: string[];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.relays = [
      "https://metrics.torproject.org/rs.html#details/E26635F9ED41CDA8467C2AA992D81074337602EF"
    ];

    this.onions = [
      "wx33das87876dad97bsdla5mal2mxn2uz66od5vtzd5qozslagrfzachha3f3id.onion"
    ];
  }

}
