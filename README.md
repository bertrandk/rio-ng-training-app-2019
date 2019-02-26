# RioNgTrainingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)

## Initial Setup

Project was generated with the CLI. Initial scaffolding was generated with the following commands:

### Core and Shared Modules

```bash
ng g module core --flat=false --m=app
ng g module shared --flat=false --m=app
```

### Feature Modules

```bash
ng generate module profile/profile --flat --routing
ng generate module games/games --flat --routing
ng generate module dashboard/dashboard --flat --routing
```

### Entry Components for each feature module

```bash
ng g component games/games --flat=true --m=games
ng g component profile/profile --flat=true --m=profile
ng g component dashboard/dashboard --flat=true --m=dashboard
```

### Application Header Setup

```bash
ng g component core/site-header --m=core --export=true
```

### Application Home Setup

```
ng g component components/home --m=app --export=false
```

## Profile Form Setup

- Generate Profile Route Landing

```bash
ng g component profile/profile --flat=true --m=profile
```

- Add Router Outlet to Template

```html
<router-outlet></router-outlet>
```

- Create Profile Edit Form

```bash
ng g component profile/components/profile-edit-form --flat=true --m=profile
```

- Profile: Setup Routing to Compomnent

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileEditFormComponent } from './components/profile-edit-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'edit',
        component: ProfileEditFormComponent
      },
      {
        path: '',
        redirectTo: 'edit'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
```

- Have the `Profile` component in the `ProfileModule`

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileEditFormComponent } from './components/profile-edit-form.component';

@NgModule({
  declarations: [ProfileEditFormComponent, ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule],
  entryComponents: []
})
export class ProfileModule {}
``

- App: Setup Profile Route

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```
