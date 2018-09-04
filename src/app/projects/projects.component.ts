import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public projects = [{name: "HMA COMBAT COUNTER", tech: ['React', 'Redux', 'Socket.io'], description: "This award-winning tool is used to keep track of multiple different variables at once. This app uses unique automatically set up Socket paths to keep everyone on the same page instantly. It uses Redux for its sorting algorithms and intercomponent communications.", link: "http://hmcombat.tpeschke.com", video: null, git: "https://github.com/tpeschke/portfolio-hmcombat", image: require("../../images/combatCounter.png")},
    {name: "YARDSCHTICK", tech: ['Jest', 'Chai', 'React', 'Redux'], description: "This app is designed to connect sellers to potential clients. Designed with unit testing first for the fastest and most efficent experiance. It also uses the GoogleMaps API and an algorithmic search to to display sellers by their distance from the user.", link: "https://yard-schtick.devmtn-projects.com", video: null, git: "https://github.com/yardSchtick/yard-schtick", image: require("../../images/yardschtick.png")},
    {name: "OKC EAR PRO", tech: ['Sass', 'React', 'NodeMailer'], description: "An e-commerce site focusing on displaying products in an easy to navigator and visually pleasing way. Focuses on the use of Sass over CSS and a dynamic entry page to draw customers in. Uses NodeMailer in the backend to contect customer to seller.", link: "http://tpeschke.com:3030/", video: null, git: "https://github.com/tpeschke/portfolioOKCEarPro", image: require("../../images/okcEarPro.png")},]
}
