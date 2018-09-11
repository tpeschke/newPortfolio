import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  constructor() { }
  
  ngOnInit() { }

  public skills = [{image: require("../../images/javascript.svg"), name: "Javascript"}, {image: require("../../images/react.svg"), name: "React"}, {image: require("../../images/Angular.png"), name: "Angular"}, {image: require("../../images/reactNative.jpg"), name: "React Native", large: true}, {image: require("../../images/redux.svg"), name: "Redux"}, {image: require("../../images/node.png"), name: "Node.js"}, {image: require("../../images/express.png"), name: "express"}, {image: require("../../images/socket-io.svg"), name: "socket.io"}, {image: require("../../images/postgresql.svg"), name: "postgresql", large: true}, {image: require("../../images/auth0.png"), name: "Auth0", large: true}, {image: require("../../images/jest.svg"), name: "jest"}, {image: require("../../images/chai.png"), name: "Chai", large: true},  {image: require("../../images/GraphQL.png"), name: "GraphQL"}, {image: require("../../images/php.png"), name: "php"}, {image: require("../../images/postman.png"), name: "postman", large: true},  {image: require("../../images/Wamp.png"), name: "WampServer", large: true}, {image: require("../../images/git.svg"), name: "git"},  {image: require("../../images/mysql.png"), name: "mysql Workbench", large: true},{image: require("../../images/massive.png"), name: "Massive", large: true}, {image: require("../../images/css.svg"), name: "CSS", large: true}, {image: require("../../images/sass.png"), name: "Sass"}, {image: require("../../images/html5.svg"), name: "HTML 5", large: true}, {image: require("../../images/api.svg"), name: "Restful API", large: true}, {image: require("../../images/WordPress.png"), name: "WordPress"}]

}
