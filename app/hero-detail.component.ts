import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '*./hero';
import {HeroService} from '*./hero.service';

@Component({
	Selector: 'my-hero-detal'
	templateUrl: 'app/hero-detail.component.html'

    
    
    styleUrls:['app/hero-detail.component.css']

})

export class HeroDetailComponent implement OnInit{@Input() hero:Hero;
constructor(private_heroService:heroService, 
private _routeParams=routeParas){};

ngOnInit(){
	
let id= +this. routeParams.get('id');
this._heroService.getHero(id).then(hero=>this.hero=hero);

}

goBack(){
	Window.history.back();

}

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/