# Mock App Front-end

## Install needed binaries

### npm

```bash
npm install
```

### Angular CLI

```bash
npm install -g @angular/cli
```

## Generate code from scratch

### Initialize Angular project

```bash
ng new mock-app-front
```

### Setup Bootstrap (incl. ngx-bootstrap)

#### Install the needed NPM dependencies

```bash
cd mock-app-front
npm install jquery popper.js ajv bootstrap ngx-bootstrap ng-event-source --save
```

#### Import CSS

In the file .\.angular-cli.json, add the following path to the array apps.styles :

```text
../node_modules/bootstrap/dist/css/bootstrap.min.css
```

#### Import module

Open ./src/app/app.module.ts and the modules you need to "@NgModule.imports".
e.g. :

```angular
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
//...
@NgModule({
  //...,
  imports: [
    //...,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  //...
})
export class AppModule { }
```

### Setup Smart Table

#### Install the needed NPM dependencies

```bash
cd mock-app-front
npm install ng2-smart-table --save
```

### Setup Font Awesome

#### Install the needed NPM dependency

```bash
cd mock-app-front
npm install font-awesome angular-font-awesome --save
```

#### Import module

Open ./src/app/app.module.ts and add the following :

```angular
import { Ng2SmartTableModule } from 'ng2-smart-table';
//...
@NgModule({
  //...
  imports: [
    //...,
    Ng2SmartTableModule,
  ],
  //...
})
export class AppModule { }
```

#### Import CSS

In the file .\.angular-cli.json, add the following path to the array apps.styles :

```text
../node_modules/font-awesome/css/font-awesome.css
```

#### Import module

Open ./src/app/app.module.ts and add the following :

```angular
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//...
@NgModule({
  //...
  imports: [
    //...,
    AngularFontAwesomeModule
  ],
  //...
})
export class AppModule { }
```

### Setup OIDC

#### Install the needed NPM dependency

```bash
cd mock-app-front
npm install angular-oauth2-oidc --save
```

#### Import module

Open ./src/app/app.module.ts and add the following :

```angular
import { OAuthModule } from 'angular-oauth2-oidc';
//...
@NgModule({
  //...
  imports: [
    //...,
    OAuthModule.forRoot()
  ],
  //...
})
export class AppModule { }
```

#### Keycloack configuration

* Create a new realm called "mock_realm".
* In this realm, create a new user. Assign him a password.
* In this realm, create a new client called "mock-app".
* In this client...
  * Set "Valid Redirect URIs" to [http://localhost:4200](http://localhost:4200)
  * Enable "Implicit Flow"

If needed, adapt src/app/auth.config.ts.

## Internationalization

### Generate the translation file

```angular
cd mock-app-front
ng xi18n --locale en --outputPath src/locale
```

It generates the file ./src/locale/messages.xlf.

### Translate the file

Copy messages.xlf to messages.fr.xlf. Open it, create a new <target/> node after each <source/> node containing the translated version.

### Run the application in a given language

```bash
cd mock-app-front
ng serve -aot --i18nFile=src/locale/messages.fr.xlf --i18nFormat=xlf --locale=fr --open
```

## Add a new component

```bash
cd mock-app-front
ng generate component name-of-your-component
```

Then add the component in src\app\app.component.spec.ts :

```angular
...
import { NameOfYourComponentComponent } from './name-of-your-component/name-of-your-component.component';
...
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ...,
        NameOfYourComponentComponent
      ],
    }).compileComponents();
  }));
...
```

## Build

No build needed.

## Run

```bash
cd mock-app-front
ng serve --open
```

For OIDC to work at ELCA, don't forget to connect to IAP!

## Run Jasmine unit tests with Karma

```bash
cd mock-app-front
ng test
```

## Bibliography

* [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)
* [ng2-smart-table](https://akveo.github.io/ng2-smart-table/)
* [angular-font-awesome](https://github.com/baruchvlz/angular-font-awesome)
* [How to Add Bootstrap to an Angular CLI project](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/)
* [Angular Internationalization (i18n)](https://angular.io/guide/i18n)
