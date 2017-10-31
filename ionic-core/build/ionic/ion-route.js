/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-route",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var Route = /** @class */ (function () {
    function Route() {
        this.componentProps = {};
        //@Prop() match: any;
        this.match = {};
    }
    Route.prototype["componentWillLoad"] = function () {
        /*
            this.routerInstance = document.querySelector(this.router)
        
            // HACK
            this.routerInstance.addEventListener('ionRouterNavigation', (e) => {
              this.match = e.detail;
            })
        */
    };
    Route.prototype.render = function () {
        /*
            this.match.url = this.routerInstance.$instance.routeMatch.url;
            const match = this.match
            const ChildComponent = this.component
        
            console.log('Does match match?', match.url, this.url)
        
            //return <p></p>;
        
            if(match.url == this.url) {
              console.log(`  <ion-route> Rendering route ${this.url}`, router, match);
              return (<ChildComponent props={this.componentProps} />);
            } else {
              return null;
            }
        */
    };
    return Route;
}());

exports['ION-ROUTE'] = Route;
},


/***************** ion-route *****************/
[
/** ion-route: tag **/
"ION-ROUTE",

/** ion-route: members **/
[
  [ "component", /** prop **/ 1 ],
  [ "componentProps", /** prop **/ 1 ],
  [ "match", /** state **/ 5 ],
  [ "router", /** prop **/ 1 ],
  [ "url", /** prop **/ 1 ]
],

/** ion-route: host **/
{}

]
)