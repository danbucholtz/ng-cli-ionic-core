var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { createThemedClasses } from '../../utils/theme';
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
export { Radio };
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
