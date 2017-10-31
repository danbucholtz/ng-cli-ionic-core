/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-utils",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var IonUtils = /** @class */ (function () {
    function IonUtils() {
    }
    IonUtils.prototype.setTitle = function (newTitle) {
        if (document.title !== newTitle) {
            document.title = newTitle;
        }
    };
    return IonUtils;
}());

exports['ION-UTILS'] = IonUtils;
},


/***************** ion-utils *****************/
[
/** ion-utils: tag **/
"ION-UTILS",

/** ion-utils: members **/
0 /* no members */,

/** ion-utils: host **/
{}

]
)