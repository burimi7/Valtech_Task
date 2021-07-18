import { Component } from '@angular/core';
import {Users} from './users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ValtechApp';
  mailtoo = '#';
  Article1 = '';
  Article2 = '';
  Article3 = '';
  Article4 = '';
  RandomBackgroundForm='';
  Users=Users;
  SelectedUser={
    first_name:'',
    lasst_name:'',
    email:'',
    gender:'',
    age:''
  }
  UsersFiltered=[];
  CurrentAnchor='';
  MenuClicked=false;


  ngOnInit() {
    this.Article1 = "https://www.picsum.photos/id/" + this.getRandomInt(1000) + "/200/100.jpg";
    this.Article2 = "https://www.picsum.photos/id/" + this.getRandomInt(1000) + "/200/100.jpg";
    this.Article3 = "https://www.picsum.photos/id/" + this.getRandomInt(1000) + "/200/100.jpg";
    this.Article4 = "https://www.picsum.photos/id/" + this.getRandomInt(1000) + "/200/100.jpg";
    this.RandomBackgroundForm = "https://www.picsum.photos/id/" + this.getRandomInt(1000) + "/1000/1000.jpg";

    this.UsersFiltered=this.Users
  }

  DecodeMailto() {
    const emailAddress = atob("bWFpbHRvOm1rLmNvbnRhY3RAdmFsdGVjaC5jb20=");

    // Select all links with the attribute 'data-gen-email'
    const emailLinks = document.querySelectorAll('data-gen-email');

    this.mailtoo = emailAddress
    console.log(emailAddress)
    console.log(emailLinks)

  }


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  FilterUsers(SearchValue){
    console.log(SearchValue.target.value)
    if(SearchValue.target.value.length<3) return;

    this.UsersFiltered = this.Users.filter(user=> JSON.stringify(user).includes(SearchValue.target.value))
  }

  SortUsers(){
    this.UsersFiltered.sort((a, b) => a.age - b.age);

  }

  scrollToElement($element, elementName): void {

    this.CurrentAnchor=elementName;
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
