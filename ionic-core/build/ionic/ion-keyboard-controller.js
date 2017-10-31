/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-keyboard-controller",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
/** @hidden */












/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */

/** @hidden */



/** @hidden */

function getWindow() {
    return window;
}
function getDocument() {
    return document;
}
function getActiveElement() {
    return getDocument()['activeElement'];
}
function focusOutActiveElement() {
    var activeElement = getActiveElement();
    activeElement && activeElement.blur && activeElement.blur();
}
function isTextInput(ele) {
    return !!ele &&
        (ele.tagName === 'TEXTAREA'
            || ele.contentEditable === 'true'
            || (ele.tagName === 'INPUT' && !(NON_TEXT_INPUT_REGEX.test(ele.type))));
}
var NON_TEXT_INPUT_REGEX = /^(radio|checkbox|range|file|submit|reset|color|image|button)$/i;
function hasFocusedTextInput() {
    var activeElement = getActiveElement();
    if (isTextInput(activeElement)) {
        return activeElement.parentElement.querySelector(':focus') === activeElement;
    }
    return false;
}

var KEY_TAB = 9;

var v2KeyboardWillShowHandler = null;
var v2KeyboardWillHideHandler = null;
var v2KeyboardDidShowHandler = null;
var v2KeyboardDidHideHandler = null;
var v1keyboardHide = null;
var v1keyboardShow = null;
var timeoutValue = null;
var IonKeyboardController = /** @class */ (function () {
    function IonKeyboardController() {
    }
    IonKeyboardController.prototype.componentDidLoad = function () {
        componentDidLoadImpl(this);
    };
    IonKeyboardController.prototype.isOpen = function () {
        return hasFocusedTextInput();
    };
    IonKeyboardController.prototype.onClose = function (callback, pollingInterval, maxPollingChecks) {
        if (pollingInterval === void 0) { pollingInterval = KEYBOARD_CLOSE_POLLING; }
        if (maxPollingChecks === void 0) { maxPollingChecks = KEYBOARD_POLLING_CHECKS_MAX; }
        return onCloseImpl(this, callback, pollingInterval, maxPollingChecks);
    };
    return IonKeyboardController;
}());
function onCloseImpl(keyboardController, callback, pollingInterval, maxPollingChecks) {
    var numChecks = 0;
    var promise = callback ? null : new Promise(function (resolve) {
        callback = resolve;
    });
    var checkKeyBoard = function () {
        if (!keyboardController.isOpen() || numChecks > maxPollingChecks) {
            setTimeout(function () {
                callback();
            }, 400);
        }
        else {
            setTimeout(checkKeyBoard, pollingInterval);
        }
        numChecks++;
    };
    setTimeout(checkKeyBoard, pollingInterval);
    return promise;
}
function componentDidLoadImpl(keyboardController) {
    focusOutline(getDocument(), keyboardController.config.get('focusOutline'), keyboardController);
    if (keyboardController.config.getBoolean('keyboardResizes', false)) {
        listenV2(getWindow(), keyboardController);
    }
    else {
        listenV1(getWindow(), keyboardController);
    }
}
function listenV2(win, keyboardController) {
    v2KeyboardWillShowHandler = function () {
        keyboardController.keyboardWillShow.emit();
    };
    win.addEventListener('keyboardWillShow', v2KeyboardWillShowHandler);
    v2KeyboardWillHideHandler = function () {
        keyboardController.keyboardWillHide.emit();
    };
    win.addEventListener('keyboardWillHide', v2KeyboardWillHideHandler);
    v2KeyboardDidShowHandler = function () {
        keyboardController.keyboardDidShow.emit();
    };
    win.addEventListener('keyboardDidShow', v2KeyboardDidShowHandler);
    v2KeyboardDidHideHandler = function () {
        keyboardController.keyboardDidHide.emit();
    };
    win.addEventListener('keyboardDidHide', v2KeyboardDidHideHandler);
}
function listenV1(win, keyboardController) {
    v1keyboardHide = function () {
        blurActiveInput(true, keyboardController);
    };
    win.addEventListener('native.keyboardhide', v1keyboardHide);
    v1keyboardShow = function () {
        blurActiveInput(false, keyboardController);
    };
    win.addEventListener('native.keyboardshow', v1keyboardShow);
}
function blurActiveInput(shouldBlur, keyboardController) {
    clearTimeout(timeoutValue);
    if (shouldBlur) {
        timeoutValue = setTimeout(function () {
            if (keyboardController.isOpen()) {
                focusOutActiveElement();
            }
        }, 80);
    }
}
function focusOutline(doc, value, keyboardController) {
    /* Focus Outline
    * --------------------------------------------------
    * By default, when a keydown event happens from a tab key, then
    * the 'focus-outline' css class is added to the body element
    * so focusable elements have an outline. On a mousedown or
    * touchstart event, then the 'focus-outline' css class is removed.
    *
    * Config default overrides:
    * focusOutline: true     - Always add the focus-outline
    * focusOutline: false    - Do not add the focus-outline
    */
    var isKeyInputEnabled = false;
    var cssClass = function () {
        keyboardController.dom.write(function () {
            doc.body.classList[isKeyInputEnabled ? 'add' : 'remove']('focus-outline');
        });
    };
    if (value === true) {
        isKeyInputEnabled = true;
        return cssClass();
    }
    else if (value === false) {
        return;
    }
    var keyDownHandler = function (event) {
        if (!isKeyInputEnabled && event.keyCode === KEY_TAB) {
            isKeyInputEnabled = true;
            enableKeyInput();
        }
    };
    var pointerDown = function () {
        isKeyInputEnabled = false;
        enableKeyInput();
    };
    var enableKeyInput = function () {
        cssClass();
        doc.removeEventListener('mousedown', pointerDown);
        doc.removeEventListener('touchstart', pointerDown);
        if (isKeyInputEnabled) {
            doc.addEventListener('mousedown', pointerDown);
            doc.addEventListener('touchstart', pointerDown);
        }
    };
    doc.addEventListener('keydown', keyDownHandler);
}
var KEYBOARD_CLOSE_POLLING = 150;
var KEYBOARD_POLLING_CHECKS_MAX = 100;

exports['ION-KEYBOARD-CONTROLLER'] = IonKeyboardController;
},


/***************** ion-keyboard-controller *****************/
[
/** ion-keyboard-controller: tag **/
"ION-KEYBOARD-CONTROLLER",

/** ion-keyboard-controller: members **/
[
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "domController", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "dom" ]
],

/** ion-keyboard-controller: host **/
{},

/** ion-keyboard-controller: events **/
[
  [
    /*****  ion-keyboard-controller keyboardWillShow ***** /
    /* event name ***/ "keyboardWillShow"
  ],
  [
    /*****  ion-keyboard-controller keyboardDidShow ***** /
    /* event name ***/ "keyboardDidShow"
  ],
  [
    /*****  ion-keyboard-controller keyboardWillHide ***** /
    /* event name ***/ "keyboardWillHide"
  ],
  [
    /*****  ion-keyboard-controller keyboardDidHide ***** /
    /* event name ***/ "keyboardDidHide"
  ]
]

]
)