import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from './../../../../libs/material/src/lib/material.module';
import { MaterialModule } from '@workspace/material';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
