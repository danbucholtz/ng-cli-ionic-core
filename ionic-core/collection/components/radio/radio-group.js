import { isCheckedProperty } from '../../utils/helpers';
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
export { RadioGroup };
var radioGroupIds = -1;
