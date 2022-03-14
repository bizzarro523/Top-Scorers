import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballService } from './services/football.service';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { ListScorersComponent } from './list-scorers/list-scorers.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HomeComponent,
    SanitizeHtmlPipe,
    ListScorersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
