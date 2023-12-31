import { Router } from "express";

import ProjectCtrl from '../controllers/project.controller.js';

export default class ProjectRoute {

  constructor() {
    this.router = Router();

    this.router.route("/")
      .get(ProjectCtrl.getProjects)
      .post(ProjectCtrl.addProject);

    this.router.route("/:id")
      .get(ProjectCtrl.getProject)
      .put(ProjectCtrl.updateProject)
      .delete(ProjectCtrl.deleteProject);


    this.router.route("/:id/tasks")
      .get(ProjectCtrl.getProjectTasks);

    this.router.route('/:id/members')
      .get(ProjectCtrl.getProjectMembers);
  }
}
