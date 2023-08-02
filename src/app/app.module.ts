import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRouter } from './app.routes';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlayerContentComponent } from './components/player-content/player-content.component';
import { PlaylistButtonComponent } from './components/playlist-button/playlist-button.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRouter)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
