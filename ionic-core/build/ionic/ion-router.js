/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-router",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var Router = /** @class */ (function () {
    function Router() {
        this.root = '';
        this.routeMatch = {};
        /*
        @Prop()
        navigateTo(url, data={}) {
          window.history.pushState(null, null, url);
          this.routeMatch = {
            url: '/' + url.replace(this.root, '')
          }
          console.log('Route match', this.routeMatch);
      
          console.log('Emitting event');
          Ionic.emit(this.$instance, 'ionRouterNavigation', { detail: this.routeMatch });
        }
      
        ionViewWillLoad() {
          console.log('<ion-router> loaded');
          window.addEventListener('popstate', this.handlePopState.bind(this));
          window.addEventListener('hashchange', this.handleHashChange.bind(this));
      
          const initialPath = window.location.pathname
          const withoutBase = initialPath.replace(this.root, '')
      
          this.routeMatch = {
            url: "/" + withoutBase
          }
          console.log('Route match', this.routeMatch);
        }
      
        handlePopState(e) {
          console.log('Pop state', e)
        }
      
        handleHashChange(e) {
          console.log('Hash change', e)
        }
      
        render() {
          console.log('<ion-router> rendering')
          return (
            <slot></slot>
          );
        }
        */
    }
    Object.defineProperty(Router.prototype, "match", {
        get: function () {
            return this.routeMatch;
        },
        enumerable: true,
        configurable: true
    });
    return Router;
}());

exports['ION-ROUTER'] = Router;
},


/***************** ion-router *****************/
[
/** ion-router: tag **/
"ION-ROUTER",

/** ion-router: members **/
[
  [ "match", /** prop **/ 1 ],
  [ "root", /** prop **/ 1 ],
  [ "routeMatch", /** state **/ 5 ]
],

/** ion-router: host **/
{}

]
)