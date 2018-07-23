import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { AuthService } from './auth/services/auth/auth.service';
import { Md5 } from 'ts-md5/dist/md5';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    CoursesModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [AuthService, Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
