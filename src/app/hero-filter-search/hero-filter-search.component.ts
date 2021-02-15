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
  }

  search(name: string, startAge: number, finishAge: number, messageLevel: number): void {
    console.log(`name=${name}, age:${startAge}-${finishAge}, messagelevel=${messageLevel}`);
    let lowerName = name.toLowerCase();
    let minMessageCountValue = minMessageCount[messageLevel];
    let maxMessageCountValue = maxMessageCount[messageLevel];

    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.filter(hero => hero.age > startAge
          && hero.age < finishAge
          && (hero.firstName.toLowerCase().includes(lowerName) || hero.secondName.toLowerCase().includes(lowerName))
          && (hero.countOfMessages >= minMessageCountValue && hero.countOfMessages <= maxMessageCountValue));
        console.log(heroes);
        console.log(this.heroes);
      });

  }
}
