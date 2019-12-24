import { Component, OnDestroy } from '@angular/core';
import { countries, Country, State, Region } from 'typed-countries';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})

export class GraphicsComponent implements OnDestroy {

  public country = countries[Math.floor(Math.random() * countries.length)];

  results: any[] = [
    {
      "name": "Animal Crossing: New Horizons",
      "value": 20
    },
    {
      "name": "Bleeding Edge",
      "value": 25
    },
    {
      "name": "Carrion",
      "value": 15
    },
    {
      "name": "Cyberpunk 2077",
      "value": 30
    },
    {
      "name": "Doom Eternal",
      "value": 50
    },
    {
      "name": "Dragon Ball Z Kakarot",
      "value": 10
    },
    {
      "name": "Dying Light 2",
      "value": 20
    },
    {
      "name": "Empire of Sin",
      "value": 35
    },
    {
      "name": "Final Fantasy 7 Remake",
      "value": 45
    },
    {
      "name": "Half-Life: Alyx",
      "value": 25
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Games';

  colorScheme = 'nightLights';
  interval;

  constructor() {

    const newResults = [...this.results];

    this.interval = setInterval(() => {
      for (let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 100000);
        
      }
      this.results = [...newResults];
      this.country = countries[Math.floor(Math.random() * countries.length)];
    }, 5000);

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
