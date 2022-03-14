import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {}

sportsNews: any = [];
players: any = [];
leagueId!: string;
seasonId!: string;

constructor(private footballService: FootballService, private router: Router){}
  
  getTopScorers(): void {
    this.router.navigate(['/list', this.leagueId, this.seasonId]);
  }

  selectSeason(event:any){
    this.seasonId = event.target.value;
  }

  selectLeague(event:any){
    this.leagueId = event.target.value;
  }
}
