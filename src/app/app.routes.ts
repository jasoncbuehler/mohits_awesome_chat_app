import { provideRouter, RouterConfig } from '@angular/router';

import {TodolistRoutes} from './todolist/index';
import {SimplebindRoutes} from './simplebind/index';
import {UserComponent} from "./user/user.component";

const routes: RouterConfig = [
  { path: '', component: UserComponent },
  ...TodolistRoutes,
  ...SimplebindRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
