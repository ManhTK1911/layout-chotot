import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes : Routes = [
  {
    path: '',
    component : ContentComponent,
  },
  {
    path: 'login',
    component : FormLoginComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
