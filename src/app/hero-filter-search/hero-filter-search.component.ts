import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

const maxMessageCount = [1000000, 15, 30, 1000000];
const minMessageCount = [0, 0, 15, 30];

@Component({
  selector: 'app-hero-filter-search',
  templateUrl: './hero-filter-search.component.html',
  styleUrls: ['./hero-filter-search.component.css']
})
export class HeroFilterSearchComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  search(name: string, startAge: string, finishAge: string, messageLevel: string): void {
    console.log(`name=${name}, age:${startAge}-${finishAge}, messagelevel=${messageLevel}`);
    let lowerName = name.toLowerCase();
    let start: number = +startAge;
    let finish: number = +finishAge;
    let index: number = +messageLevel;
    let minMessageCountValue = minMessageCount[index];
    let maxMessageCountValue = maxMessageCount[index];

    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.filter(hero =>
          hero.age > start
          && hero.age < finish
          && (hero.firstName.toLowerCase().includes(lowerName) || hero.secondName.toLowerCase().includes(lowerName))
          && (hero.countOfMessages >= minMessageCountValue && hero.countOfMessages <= maxMessageCountValue)
        );
        console.log(heroes);
        console.log(this.heroes);
      });
  }
}
