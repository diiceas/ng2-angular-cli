"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  // 'new-cmp': 'app/new-cmp'
  'dragula': 'vendor/dragula',  
  'ng2-dragula': 'vendor/ng2-dragula',
  '@angular2-material': 'vendor/@angular2-material',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'angular2-fontawesome': 'vendor/angular2-fontawesome',
  'contra': 'vendor/contra',
  'crossvent': 'vendor/crossvent/dist/crossvent.min.js',
  'atoa': 'vendor/atoa/atoa.js',
  'ticky': 'vendor/ticky/ticky.js',
  'moment': 'vendor/moment/moment.js'
};

/** User packages configuration. */
const packages: any = {
  // 'new-cmp': { main: 'new-cmp.component', defaultExtension: 'js' },
  'dragula': { main: 'dragula.js', defaultExtension: 'js' },
  'ng2-dragula': { main: 'ng2-dragula.js', defaultExtension: 'js' },
  'ng2-bootstrap': { main: 'ng2-bootstrap.js', defaultExtension: 'js' },
  'angular2-fontawesome': { defaultExtension: 'js' },
  'contra': { main: 'emitter.js', defaultExtension: 'js' } 
};

// Angular Material 2 Packages to load.
var _materialPackages = [
  'core',
  'progress-bar',
  'button',
  'checkbox',
  'input'
];

_materialPackages.forEach(function (item) {
  // All Material 2 components are prefixed with  @angular2-material and use
  // the components name as entry point.
  packages['@angular2-material/' + item] = { main: item };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  // 'dragula',
  // 'ng2-dragula',

  // App specific barrels.
  'app',
  'app/shared',
  'app/new-cmp',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
