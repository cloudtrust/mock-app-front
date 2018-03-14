Mock App Front-end
==================

## Install Angular CLI
```
npm install -g @angular/cli
```

## Generate code from scratch
### Initialize Angular project
```
ng new mock-app-front
```
### Add Bootstrap to the project
#### Install the needed NPM dependencies
```
cd mock-app-front
npm install jquery popper.js ajv bootstrap ngx-bootstrap --save
```
#### Import bootstrap CSS
In the file .\.angular-cli.json, add the following path to the array apps.styles :
```
../node_modules/bootstrap/dist/css/bootstrap.min.css
```
#### Import the bootstrap modules you'll need
Open ./src/app/app.module.ts and the modules you need to "@NgModule.imports".
e.g. :
```
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
...
@NgModule({
  ...,
  imports: [
    ...,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  ...
})
export class AppModule { }
```

### Add a component
```
cd mock-app-front
ng generate component name-of-your-component
```

## Build
```
```

## Run
```
cd mock-app-front
ng serve --open
```

## Bibliography
* [How to Add Bootstrap to an Angular CLI project](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/)
* [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)
