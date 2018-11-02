import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightComponent } from './basic-highlight/basic-highlight.component';
import { BasicHighlight.directiveComponent } from './basic-highlight.directive/basic-highlight.directive.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightComponent,
    BasicHighlight.directiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
