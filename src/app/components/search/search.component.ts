import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router:Router ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters => {
      this.termino = parameters['term'];
      this.heroes = this._heroesService.buscarHeroes(parameters['term']);
    });
  }
  
}
