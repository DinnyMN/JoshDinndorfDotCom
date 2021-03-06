import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ItemsApiService } from './items-api/items-api.service';
import { ChipComponent } from './item/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemsApiService],
  bootstrap: [AppComponent],
})

export class AppModule { }
