/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-route-link",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var RouteLink = /** @class */ (function () {
    function RouteLink() {
    }
    RouteLink.prototype.handleClick = function (e) {
        console.log('Route link click', e);
        /*
        router.navigateTo(this.url)
        */
    };
    RouteLink.prototype.render = function () {
        /*
        const router = document.querySelector(this.router);
        const match = router.match
        console.log(`  <ion-route-link> Rendering route ${this.url}`, router, match);
    
        return (
          <a onClick={this.handleClick.bind(this)}><slot></slot></a>
        );
        */
    };
    return RouteLink;
}());

exports['ION-ROUTE-LINK'] = RouteLink;
},


/***************** ion-route-link *****************/
[
/** ion-route-link: tag **/
"ION-ROUTE-LINK",

/** ion-route-link: members **/
[
  [ "router", /** prop **/ 1 ],
  [ "url", /** prop **/ 1 ]
],

/** ion-route-link: host **/
{}

]
)