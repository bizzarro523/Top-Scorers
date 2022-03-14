import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


const sportsUrl = 'http://localhost:5005';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

   getTopScorers(leagueId: any, seasonId:any) {
    return this.http.get(sportsUrl + "/sports/" + leagueId + "/" + seasonId);
  }

  getPlayer(playerId: any, seasonId:any){
    return this.http.get(sportsUrl + "/sports2/" + playerId + "/" + seasonId);
  }

  getFlag(nationality: any){
    return this.http.get(sportsUrl + "/sports3/" + nationality);
  }

  getVideos(){
    return this.http.get(sportsUrl + "/sports4/");
  }
}
