import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from '*./hero.service';
import {HeroDetailComponents} from './hero-detail.Component';
import {Hero} from '*./hero';

@Component({
select:'my.heroes',
templateurl:'app/heroes.component.html'
styleUrl:['app/heroes.component.css']
directives:[HeroDetailComponent]
})

export class HeroDetailComponent implement OnInit{
heroes:Heri[];
selectedHero:Hero;
constructor(private_heroService:HeroService,
private_router:Router{}

getHeroes(){

this._heroService.getHeroes().them(heroes=>this.heroes=heroes);

}

gotoDetail(){
this._router.navigate(['HeroDetail',{id:this.selectedHero.id}]);
}

ngOnInit(){this.getHeroes();}

onSelected(hero :Hero)
this.selectedHero=hero;
	
}
}
}

}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/