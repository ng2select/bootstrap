/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'jquery': 'vendor/jquery/dist/jquery.min.js',
  'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.min.js',
  'selectpicker': 'vendor/bootstrap-select/dist/js/bootstrap-select.min.js',
  'highlight.js': 'vendor/highlight.js/lib/highlight.js'
};

/** User packages configuration. */
const packages: any = {

};

const paths: any = {
  // 'benchmark': 'vendor/benchmark/benchmark.js',
  // 'lodash': 'vendor/benchmark/node_modules/lodash/lodash.js',
  // 'platform': 'vendor/benchmark/node_modules/platform/platform.js'
}

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

  // App specific barrels.
  'app',
  'app/shared',
  'app/shared/layout',
  'app/custom',
  'app/http',
  'app/ui-ux',
  'app/playground',

  // Module specific barrels
  'core',
  'core/shared',
  'bootstrap',
  'bootstrap/select',
  'bootstrap/multi-select',
  'combo',
  'combo/select',
  'jquery',
  //'benchmark'

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
System.config({ map, packages, paths });
