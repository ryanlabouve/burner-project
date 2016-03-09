"use strict";define("burner-project/app",["exports","ember","burner-project/resolver","ember/load-initializers","burner-project/config/environment"],function(e,r,t,n,i){var a=void 0;r["default"].MODEL_FACTORY_INJECTIONS=!0,a=r["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:t["default"]}),(0,n["default"])(a,i["default"].modulePrefix),e["default"]=a}),define("burner-project/components/app-version",["exports","ember-cli-app-version/components/app-version","burner-project/config/environment"],function(e,r,t){var n=t["default"].APP.name,i=t["default"].APP.version;e["default"]=r["default"].extend({version:i,name:n})}),define("burner-project/controllers/array",["exports","ember"],function(e,r){e["default"]=r["default"].Controller}),define("burner-project/controllers/object",["exports","ember"],function(e,r){e["default"]=r["default"].Controller}),define("burner-project/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,r){e["default"]=r["default"]}),define("burner-project/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,r){e["default"]=r["default"]}),define("burner-project/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","burner-project/config/environment"],function(e,r,t){e["default"]={name:"App Version",initialize:(0,r["default"])(t["default"].APP.name,t["default"].APP.version)}}),define("burner-project/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,r){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",r["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("burner-project/initializers/data-adapter",["exports","ember"],function(e,r){e["default"]={name:"data-adapter",before:"store",initialize:r["default"].K}}),define("burner-project/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,r,t){e["default"]={name:"ember-data",initialize:r["default"]}}),define("burner-project/initializers/export-application-global",["exports","ember","burner-project/config/environment"],function(e,r,t){function n(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var n,i=t["default"].exportApplicationGlobal;n="string"==typeof i?i:r["default"].String.classify(t["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("burner-project/initializers/injectStore",["exports","ember"],function(e,r){e["default"]={name:"injectStore",before:"store",initialize:r["default"].K}}),define("burner-project/initializers/store",["exports","ember"],function(e,r){e["default"]={name:"store",after:"ember-data",initialize:r["default"].K}}),define("burner-project/initializers/transforms",["exports","ember"],function(e,r){e["default"]={name:"transforms",before:"store",initialize:r["default"].K}}),define("burner-project/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,r){e["default"]={name:"ember-data",initialize:r["default"]}}),define("burner-project/resolver",["exports","ember-resolver"],function(e,r){e["default"]=r["default"]}),define("burner-project/router",["exports","ember","burner-project/config/environment"],function(e,r,t){var n=r["default"].Router.extend({location:t["default"].locationType});n.map(function(){}),e["default"]=n}),define("burner-project/services/ajax",["exports","ember-ajax/services/ajax"],function(e,r){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r["default"]}})}),define("burner-project/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"burner-project/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var r=e.createDocumentFragment(),t=e.createElement("h1"),n=e.createTextNode("Hiya!");e.appendChild(t,n),e.appendChild(r,t);var t=e.createTextNode("\n");e.appendChild(r,t);var t=e.createElement("p"),n=e.createTextNode("I'm just your friendly neighborhood burner project.");e.appendChild(t,n),e.appendChild(r,t);var t=e.createTextNode("\n");e.appendChild(r,t);var t=e.createComment("");e.appendChild(r,t);var t=e.createTextNode("\n");return e.appendChild(r,t),r},buildRenderNodes:function(e,r,t){var n=new Array(1);return n[0]=e.createMorphAt(r,4,4,t),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("burner-project/config/environment",["ember"],function(e){var r="burner-project";try{var t=r+"/config/environment",n=e["default"].$('meta[name="'+t+'"]').attr("content"),i=JSON.parse(unescape(n));return{"default":i}}catch(a){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("burner-project/app")["default"].create({name:"burner-project",version:"0.0.0+672eae5c"});