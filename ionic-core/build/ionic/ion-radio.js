/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-radio",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    var classObj = {};
    return classes.split(' ')
        .reduce(function (classObj, classString) {
        classObj[classString] = true;
        if (mode) {
            classObj[classString + "-" + mode] = true;
            if (color) {
                classObj[classString + "-" + color] = true;
                classObj[classString + "-" + mode + "-" + color] = true;
            }
        }
        return classObj;
    }, classObj);
}
/**
 * Get the classes from a class list and return them as an object
 */

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Radio = /** @class */ (function () {
    function Radio() {
        /*
         * @input {boolean} If true, the radio is checked. Default false.
         */
        this.checked = false;
        /*
          * @input {boolean} If true, the user cannot interact with this element. Default false.
          */
        this.disabled = false;
    }
    Radio.prototype["componentWillLoad"] = function () {
        this.emitStyle();
    };
    Radio.prototype["componentDidLoad"] = function () {
        this.group = this.el.closest('ion-radio-group');
        var item = this.el.closest('ion-item');
        if (item) {
            // register the input inside of the item
            // reset to the item's id instead of the radiogroup id
            this.id = 'rb-' + item.registerInput('radio');
            this.labelId = 'lbl-' + item.id;
        }
        // if the value is not defined then use it's unique id
        this.value = !this.value ? this.id : this.value;
    };
    Radio.prototype.checkedChanged = function (val) {
        this.ionSelect.emit({ checked: val });
        if (this.group) {
            this.group.value = this.value;
            this.group.$instance.ionChange.emit(this);
        }
        this.emitStyle();
    };
    Radio.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Radio.prototype.emitStyle = function () {
        var _this = this;
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(function () {
            _this.ionStyle.emit(__assign({}, createThemedClasses(_this.mode, _this.color, 'radio'), { 'radio-checked': _this.checked, 'radio-disabled': _this.disabled }));
        });
    };
    Radio.prototype.onSpace = function (ev) {
        this.toggle();
        ev.stopPropagation();
        ev.preventDefault();
    };
    Radio.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    Radio.prototype.hostData = function () {
        return {
            class: {
                'radio-checked': this.checked,
                'radio-disabled': this.disabled
            }
        };
    };
    Radio.prototype.render = function () {
        var _this = this;
        var radioClasses = {
            'radio-icon': true,
            'radio-checked': this.checked
        };
        return [
            h("div", { "c": radioClasses },
                h("div", { "c": { "radio-inner": true } })),
            h("button", { "c": { "radio-cover": true }, "o": { "click": function () { return _this.toggle(); } }, "a": { "aria-checked": this.checked ? 'true' : false, "aria-disabled": this.disabled ? 'true' : false, "aria-labelledby": this.labelId, "role": 'radio' }, "p": { "id": this.id, "tabIndex": 0 } })
        ];
    };
    return Radio;
}());

//  constructor() {
//     if (_group) {
//       // register with the radiogroup
//       this.id = 'rb-' + _group.add(this);
//     }
//     if (_item) {
//       // register the input inside of the item
//       // reset to the item's id instead of the radiogroup id
//       this.id = 'rb-' + _item.registerInput('radio');
//       this._labelId = 'lbl-' + _item.id;
//       this._item.setElementClass('item-radio', true);
//     }
//   }
//   /**
//    * @internal
//    */
//   ngOnInit() {
//     if (this._group && isPresent(this._group.value)) {
//       this.checked = isCheckedProperty(this._group.value, this.value);
//     }
//     if (this._group && this._group.disabled) {
//       this.disabled = this._group.disabled;
//     }
//   }

/** @hidden */
function isCheckedProperty(a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}











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

var RadioGroup = /** @class */ (function () {
    function RadioGroup() {
        /*
         * @input {boolean} If true, the radios can be deselected. Default false.
         */
        this.allowEmptySelection = false;
        /*
         * @input {boolean} If true, the user cannot interact with this element. Default false.
         */
        this.disabled = false;
    }
    RadioGroup.prototype["componentWillLoad"] = function () {
        var radioGroupId = ++radioGroupIds;
        var radioId = 0;
        var radios = this.el.querySelectorAll('ion-radio');
        for (var i = 0; i < radios.length; i++) {
            var radio = radios[i].$instance;
            if (radio) {
                radio.id = 'rb-' + radioGroupId + '-' + (++radioId);
                if (radio.checked) {
                    this.activeId = radio.id;
                }
            }
            else {
            }
        }
        // Get the list header if it exists and set the id
        var header = this.el.querySelector('ion-list-header');
        if (header) {
            if (!header.id) {
                header.id = 'rg-hdr-' + radioGroupId;
            }
            this.headerId = header.id;
        }
    };
    /**
     * @hidden
     */
    RadioGroup.prototype.update = function () {
        var _this = this;
        // loop through each of the radios
        var hasChecked = false;
        this.radios.forEach(function (radio) {
            // check this radiobutton if its value is
            // the same as the radiogroups value
            radio.checked = isCheckedProperty(_this.value, radio.value) && !hasChecked;
            if (radio.checked) {
                // if this button is checked, then set it as
                // the radiogroup's active descendant
                _this.activeId = radio.id;
                hasChecked = true;
            }
        });
    };
    RadioGroup.prototype.hostData = function () {
        return {
            attrs: {
                'role': 'radiogroup',
                'aria-activedescendant': this.activeId,
                'aria-describedby': this.headerId
            }
        };
    };
    RadioGroup.prototype.render = function () {
        return h(0, 0);
    };
    return RadioGroup;
}());
var radioGroupIds = -1;

exports['ION-RADIO'] = Radio;
exports['ION-RADIO-GROUP'] = RadioGroup;
},


/***************** ion-radio *****************/
[
/** ion-radio: tag **/
"ION-RADIO",

/** ion-radio: members **/
[
  [ "activated", /** state **/ 5 ],
  [ "checked", /** prop mutable **/ 2, /** type boolean **/ 1 ],
  [ "disabled", /** prop mutable **/ 2, /** type boolean **/ 1 ],
  [ "el", /** element ref **/ 7 ],
  [ "id", /** state **/ 5 ],
  [ "value", /** prop mutable **/ 2 ]
],

/** ion-radio: host **/
{"theme":"radio"},

/** ion-radio: events **/
[
  [
    /*****  ion-radio ionStyle ***** /
    /* event name ***/ "ionStyle"
  ],
  [
    /*****  ion-radio ionSelect ***** /
    /* event name ***/ "ionSelect"
  ]
],

/** ion-radio: propWillChanges **/
0 /* no prop will change methods */,

/** ion-radio: propDidChanges **/
[
  [
    /*****  ion-radio prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-radio prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

],

/***************** ion-radio-group *****************/
[
/** ion-radio-group: tag **/
"ION-RADIO-GROUP",

/** ion-radio-group: members **/
[
  [ "activeId", /** state **/ 5 ],
  [ "allowEmptySelection", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "disabled", /** prop mutable **/ 2, /** type boolean **/ 1 ],
  [ "el", /** element ref **/ 7 ],
  [ "headerId", /** state **/ 5 ],
  [ "value", /** prop mutable **/ 2 ]
],

/** ion-radio-group: host **/
{},

/** ion-radio-group: events **/
[
  [
    /*****  ion-radio-group ionChange ***** /
    /* event name ***/ "ionChange"
  ]
]

]
)