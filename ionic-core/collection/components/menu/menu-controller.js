import { MenuRevealType, MenuPushType, MenuOverlayType } from './menu-types';
var MenuController = /** @class */ (function () {
    function MenuController() {
        this._menus = [];
        this._menuTypes = {};
        this.registerType('reveal', MenuRevealType);
        this.registerType('push', MenuPushType);
        this.registerType('overlay', MenuOverlayType);
    }
    /**
     * Programatically open the Menu.
     * @param {string} [menuId]  Optionally get the menu by its id, or side.
     * @return {Promise} returns a promise when the menu is fully opened
     */
    MenuController.prototype.open = function (menuId) {
        var menu = this.get(menuId);
        if (menu && !this.isAnimating()) {
            var openedMenu = this.getOpen();
            if (openedMenu && menu !== openedMenu) {
                openedMenu.setOpen(false, false);
            }
            return menu.open();
        }
        return Promise.resolve(false);
    };
    /**
     * Programatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param {string} [menuId]  Optionally get the menu by its id, or side.
     * @return {Promise} returns a promise when the menu is fully closed
     */
    MenuController.prototype.close = function (menuId) {
        var menu;
        if (menuId) {
            // find the menu by its id
            menu = this.get(menuId);
        }
        else {
            // find the menu that is open
            menu = this.getOpen();
        }
        if (menu) {
            // close the menu
            return menu.close();
        }
        return Promise.resolve(false);
    };
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param {string} [menuId]  Optionally get the menu by its id, or side.
     * @return {Promise} returns a promise when the menu has been toggled
     */
    MenuController.prototype.toggle = function (menuId) {
        var menu = this.get(menuId);
        if (menu && !this.isAnimating()) {
            var openedMenu = this.getOpen();
            if (openedMenu && menu !== openedMenu) {
                openedMenu.setOpen(false, false);
            }
            return menu.toggle();
        }
        return Promise.resolve(false);
    };
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param {string} [menuId]  Optionally get the menu by its id, or side.
     * @return {Menu}  Returns the instance of the menu, which is useful for chaining.
     */
    MenuController.prototype.enable = function (shouldEnable, menuId) {
        var menu = this.get(menuId);
        return (menu && menu.enable(shouldEnable)) || null;
    };
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param {boolean} shouldEnable  True if it should be swipe-able, false if not.
     * @param {string} [menuId]  Optionally get the menu by its id, or side.
     * @return {Menu}  Returns the instance of the menu, which is useful for chaining.
     */
    MenuController.prototype.swipeEnable = function (shouldEnable, menuId) {
        var menu = this.get(menuId);
        return (menu && menu.swipeEnable(shouldEnable)) || null;
    };
    /**
     * @param {string} [menuId] Optionally get the menu by its id, or side.
     * @return {boolean} Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    MenuController.prototype.isOpen = function (menuId) {
        if (menuId) {
            var menu = this.get(menuId);
            return menu && menu.isOpen || false;
        }
        else {
            return !!this.getOpen();
        }
    };
    /**
     * @param {string} [menuId]  Optionally get the menu by its id, or side.
     * @return {boolean} Returns true if the menu is currently enabled, otherwise false.
     */
    MenuController.prototype.isEnabled = function (menuId) {
        var menu = this.get(menuId);
        return menu && menu.enabled || false;
    };
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param {string} [menuId]  Optionally get the menu by its id, or side.
     * @return {Menu} Returns the instance of the menu if found, otherwise `null`.
     */
    MenuController.prototype.get = function (menuId) {
        var menu;
        if (menuId === 'left' || menuId === 'right') {
            // there could be more than one menu on the same side
            // so first try to get the enabled one
            menu = this._menus.find(function (m) { return m.side === menuId && m.enabled; });
            if (menu) {
                return menu;
            }
            // didn't find a menu side that is enabled
            // so try to get the first menu side found
            return this._menus.find(function (m) { return m.side === menuId; }) || null;
        }
        else if (menuId) {
            // the menuId was not left or right
            // so try to get the menu by its "id"
            return this._menus.find(function (m) { return m.id === menuId; }) || null;
        }
        // return the first enabled menu
        menu = this._menus.find(function (m) { return m.enabled; });
        if (menu) {
            return menu;
        }
        // get the first menu in the array, if one exists
        return (this._menus.length ? this._menus[0] : null);
    };
    /**
     * @return {Menu} Returns the instance of the menu already opened, otherwise `null`.
     */
    MenuController.prototype.getOpen = function () {
        return this._menus.find(function (m) { return m.isOpen; });
    };
    /**
     * @return {Array<Menu>}  Returns an array of all menu instances.
     */
    MenuController.prototype.getMenus = function () {
        return this._menus;
    };
    /**
     * @hidden
     * @return {boolean} if any menu is currently animating
     */
    MenuController.prototype.isAnimating = function () {
        return this._menus.some(function (menu) { return menu.isAnimating; });
    };
    /**
     * @hidden
     */
    MenuController.prototype._register = function (menu) {
        if (this._menus.indexOf(menu) < 0) {
            this._menus.push(menu);
        }
    };
    /**
     * @hidden
     */
    MenuController.prototype._unregister = function (menu) {
        var index = this._menus.indexOf(menu);
        if (index > -1) {
            this._menus.splice(index, 1);
        }
    };
    /**
     * @hidden
     */
    MenuController.prototype._setActiveMenu = function (menu) {
        // if this menu should be enabled
        // then find all the other menus on this same side
        // and automatically disable other same side menus
        var side = menu.side;
        this._menus
            .filter(function (m) { return m.side === side && m !== menu; })
            .map(function (m) { return m.enable(false); });
    };
    /**
     * @hidden
     */
    MenuController.prototype.registerType = function (name, cls) {
        this._menuTypes[name] = cls;
    };
    /**
     * @hidden
     */
    MenuController.prototype.create = function (type, menuCmp) {
        return new this._menuTypes[type](menuCmp);
    };
    return MenuController;
}());
export { MenuController };
