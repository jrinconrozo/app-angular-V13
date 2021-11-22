import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  starships:any;
  iconname = 'rocket'
  constructor(private obtenServ3:SwapiService) { }

  ngOnInit() {
    this.starships= this.obtenServ3.getSwapi('starships')
  }

}
