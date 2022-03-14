import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-scorers',
  templateUrl: './list-scorers.component.html',
  styleUrls: ['./list-scorers.component.css']
})
export class ListScorersComponent implements OnInit {
  leagueId:any;
  seasonId:any;
  sportsNews: any = [];
  players: any = [];

  constructor(private activatedRoute: ActivatedRoute, private footballService: FootballService, private router: Router) { }

  ngOnInit(): void {
    this.leagueId = this.activatedRoute.snapshot.paramMap.get('leagueId');
    this.seasonId = this.activatedRoute.snapshot.paramMap.get('seasonId');

    this.footballService.getTopScorers(this.leagueId,this.seasonId).subscribe((response) => {
      this.sportsNews = response;
      this.players = this.sportsNews.response;
      console.log(this.players);
    })
  }

  getPlayer(playerId: any){
    this.router.navigate(['/player', playerId, this.seasonId]);
  }
}
