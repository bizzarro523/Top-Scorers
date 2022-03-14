import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerId: any;
  seasonId: any;
  response: any = [];
  playerInfo: any = [];
  playerStats: any =[];
  flagResponse: any = [];
  videos:any = [];
  video:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private footballService: FootballService) { }

  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('playerId');
    this.seasonId = this.activatedRoute.snapshot.paramMap.get('seasonId');

    this.footballService.getPlayer(this.playerId,this.seasonId).subscribe((response) => {
      this.response = response
      console.log(response)
      this.playerInfo = this.response.response[0].player;
      this.playerStats = this.response.response[0].statistics;

    for(let i = 0; i < this.playerStats.length; i++){
      if(this.playerStats[i].goals.assists === null){
        this.playerStats[i].goals.assists = "N/A";
      }
    }

    this.footballService.getFlag(this.playerInfo.nationality).subscribe((response2)=>{
      this.flagResponse = response2;
    })

    this.footballService.getVideos().subscribe((response3)=>{
      this.videos = response3;
      this.video = "(No highlights available at this time.)"
      for(let i = 0; i < this.videos.response.length; i++){
      if(this.videos.response[i].title.includes(this.playerStats[0].team.name)){
        this.video = this.videos.response[i].videos[0].embed;
        break;
      }

    }
      console.log(this.videos);
    })
   })
  }
  
}
