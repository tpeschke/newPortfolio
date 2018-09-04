import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit() {
  }
  
  public skills = [{image: require("../../images/javascript.svg"), name: "Javascript ES6"}, {image: require("../../images/react.svg"), name: "React"}, {image: require("../../images/redux.svg"), name: "Redux"}, {image: require("../../images/node.png"), name: "Node.js"}, {image: require("../../images/express.png"), name: "express"}, {image: require("../../images/socket-io.svg"), name: "socket.io"}, {image: require("../../images/jest.svg"), name: "jest"}, {image: require("../../images/api.svg"), name: "Restful API"}]

}
