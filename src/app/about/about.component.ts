import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public headImage = require('../../images/headShot.jpg')

  public contacts = [{link: "https://www.linkedin.com/in/trent-peschke-118a24158/", image: require("../../images/linkedin.png"), name: "LinkedIn"}, {link: "https://github.com/tpeschke", image: require("../../images/githubicon.svg"), name: "GitHub"}, {link: "mailto:mr.peschke@gmail.com", image: require("../../images/email.png"), name: "Email"}]
}
