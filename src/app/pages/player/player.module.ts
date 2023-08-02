import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { PlayerContentComponent } from 'src/app/components/player-content/player-content.component';
import { PlaylistButtonComponent } from 'src/app/components/playlist-button/playlist-button.component';

@NgModule({
  declarations: [
    PlayerComponent,
    SideBarComponent,
    FooterComponent,
    PlayerContentComponent,
    PlaylistButtonComponent,
  ],
  imports: [CommonModule, PlayerRoutingModule],
})
export class PlayerModule {}
