/*
Add by Dario to manage state of information in the window this.state
and improve use of REDUX.
*/

declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.scss' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.sass' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.js' {
  const resource: { [key: string]: string };
  export = resource;
}

declare global { interface Window { cordova: any; } }
window.cordova = window.cordova || false;

declare module 'jquery';
declare var $: any;
declare var dphelper: any;
declare var _dph: any;
declare var Obs: any;
