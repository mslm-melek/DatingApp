import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import your components, services, etc. here
import { NavComponent } from './nav/nav.component';
import { AcountService } from './_services/acount.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';

@NgModule({
    declarations: [
        NavComponent,
        AppComponent,
        HomeComponent,
        RegisterComponent,
        MemberListComponent,
        MemberDetailComponent,
        ListsComponent,
        MessagesComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule
     
    ],
    providers: [
        AcountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }