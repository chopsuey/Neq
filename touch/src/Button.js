/**
 * {@link Ext.Button} is a simple class to display a button in Sencha Touch. There are various
 * different styles of {@link Ext.Button} you can create by using the {@link #icon},
 * {@link #iconCls}, {@link #iconAlign}, {@link #iconMask}, {@link #ui}, and {@link #text}
 * configurations.
 *
 * ## Simple Button
 *
 * Here is an {@link Ext.Button} is it's simplist form:
 *
 *     var button = Ext.create('Ext.Button', {
 *         text: 'Button'
 *     });
 *
 * ## Icons
 *
 * You can also create a {@link Ext.Button} with just an icon using the {@link #iconCls}
 * configuration:
 *
 *     var iconButton = Ext.create('Ext.Button', {
 *         iconCls: 'refresh',
 *         iconMask: true
 *     });
 *
 * Note that the {@link #iconMask} configuration is required when you want to use any of the
 * bundled Pictos icons.
 *
 * Here are the included icons available (if {@link Global_CSS#$include-default-icons $include-default-icons}
 * is set to true):
 *
 * - action
 * - add
 * - arrow_down
 * - arrow_left
 * - arrow_right
 * - arrow_up
 * - compose
 * - delete
 * - organize
 * - refresh
 * - reply
 * - search
 * - settings
 * - star
 * - trash
 * - maps
 * - locate
 * - home
 *
 * ## Badges
 *
 * Buttons can also have a badge on them, by using the {@link #badgeText} configuration:
 *
 *     var badgedButton = Ext.create('Ext.Button', {
 *         text: 'My Button',
 *         badgeText: '2'
 *     });
 *
 * ## UI
 *
 * Buttons also come with a range of different default UIs. Here are the included UIs
 * available (if {@link #$include-button-uis $include-button-uis} is set to true):
 *
 * - **normal** - a basic gray button
 * - **back** - a back button
 * - **forward** - a forward button
 * - **round** - a round button
 * - **action** - shaded using the {@link Global_CSS#$base-color $base-color} (dark blue by default)
 * - **decline** - red
 * - **confirm** - green
 *
 * And setting them is very simple:
 *
 *     var uiButton = Ext.create('Ext.Button', {
 *         text: 'My Button',
 *         ui: 'action'
 *     });
 *
 * And how they look:
 *
 *     @example miniphone preview
 *     Ext.create('Ext.Container', {
 *         fullscreen: true,
 *         padding: 4,
 *         defaults: {
 *             xtype: 'button',
 *             margin: 5
 *         },
 *         layout: {
 *             type: 'vbox',
 *             align: 'center'
 *         },
 *         items: [
 *             { ui: 'normal', text: 'normal' },
 *             { ui: 'round', text: 'round' },
 *             { ui: 'action', text: 'action' },
 *             { ui: 'decline', text: 'decline' },
 *             { ui: 'confirm', text: 'confirm' }
 *         ]
 *     });
 *
 * Note that the default {@link #ui} is **normal**.
 *
 * You can also use the {@link #sencha-button-ui sencha-button-ui} CSS Mixin to create your own UIs.
 *
 * ## Examples
 *
 * This example shows a bunch of icons on the screen in two toolbars. When you click on the center
 * button, it switches the iconCls on every button on the page.
 *
 *     @example preview
 *     Ext.createWidget('container', {
 *         fullscreen: true,
 *         layout: {
 *             type: 'vbox',
 *             pack:'center',
 *             align: 'center'
 *         },
 *         items: [
 *             {
 *                 xtype: 'button',
 *                 text: 'Change iconCls',
 *                 handler: function() {
 *                     // classes for all the icons to loop through.
 *                     var availableIconCls = [
 *                         'action', 'add', 'arrow_down', 'arrow_left',
 *                         'arrow_right', 'arrow_up', 'compose', 'delete',
 *                         'organize', 'refresh', 'reply', 'search',
 *                         'settings', 'star', 'trash', 'maps', 'locate',
 *                         'home'
 *                     ];
 *                     // get the text of this button,
 *                     // so we know which button we don't want to change
 *                     var text = this.getText();
 *
 *                     // use ComponentQuery to find all buttons on the page
 *                     // and loop through all of them
 *                     Ext.Array.forEach(Ext.ComponentQuery.query('button'), function(button) {
 *                         // if the button is the change iconCls button, continue
 *                         if (button.getText() == text) {
 *                             return;
 *                         }
 *
 *                         // get the index of the new available iconCls
 *                         var index = availableIconCls.indexOf(button.getIconCls()) + 1;
 *
 *                         // update the iconCls of the button with the next iconCls, if one exists.
 *                         // if not, use the first one
 *                         button.setIconCls(availableIconCls[(index == availableIconCls.length) ? 0 : index]);
 *                     });
 *                 }
 *             },
 *             {
 *                 xtype: 'toolbar',
 *                 docked: 'top',
 *                 defaults: {
 *                     iconMask: true
 *                 },
 *                 items: [
 *                     { xtype: 'spacer' },
 *                     { iconCls: 'action' },
 *                     { iconCls: 'add' },
 *                     { iconCls: 'arrow_down' },
 *                     { iconCls: 'arrow_left' },
 *                     { iconCls: 'arrow_up' },
 *                     { iconCls: 'compose' },
 *                     { iconCls: 'delete' },
 *                     { iconCls: 'organize' },
 *                     { iconCls: 'refresh' },
 *                     { xtype: 'spacer' }
 *                 ]
 *             },
 *             {
 *                 xtype: 'toolbar',
 *                 docked: 'bottom',
 *                 ui: 'light',
 *                 defaults: {
 *                     iconMask: true
 *                 },
 *                 items: [
 *                     { xtype: 'spacer' },
 *                     { iconCls: 'reply' },
 *                     { iconCls: 'search' },
 *                     { iconCls: 'settings' },
 *                     { iconCls: 'star' },
 *                     { iconCls: 'trash' },
 *                     { iconCls: 'maps' },
 *                     { iconCls: 'locate' },
 *                     { iconCls: 'home' },
 *                     { xtype: 'spacer' }
 *                 ]
 *             }
 *         ]
 *     });
 *
 */
Ext.define('Ext.Button', {
    extend: 'Ext.Component',

    xtype: 'button',

    cachedConfig: {
        /**
         * @cfg {String} pressedCls
         * The CSS class to add to the Button when it is pressed.
         * @accessor
         */
        pressedCls: Ext.baseCSSPrefix + 'button-pressed',

        /**
         * @cfg {String} badgeCls
         * The CSS class to add to the Button's badge, if it has one.
         * @accessor
         */
        badgeCls: Ext.baseCSSPrefix + 'badge',

        /**
         * @cfg {String} hasBadgeCls
         * The CSS class to add to the Button if it has a badge (note that this goes on the
         * Button element itself, not on the badge element).
         * @private
         * @accessor
         */
        hasBadgeCls: Ext.baseCSSPrefix + 'hasbadge',

        /**
         * @cfg {String} labelCls
         * The CSS class to add to the field's label element.
         * @accessor
         */
        labelCls: Ext.baseCSSPrefix + 'button-label',

        /**
         * @cfg {String} iconMaskCls
         * The CSS class to add to the icon element as allowed by {@link #iconMask}.
         * @accessor
         */
        iconMaskCls: Ext.baseCSSPrefix + 'icon-mask'
    },

    config: {
        /**
         * @cfg {String} badgeText
         * Optional badge text.
         * @accessor
         */
        badgeText: null,

        /**
         * @cfg {String} text
         * The Button text.
         * @accessor
         */
        text: null,

        /**
         * @cfg {String} iconCls
         * Optional CSS class to add to the icon element. This is useful if you want to use a CSS
         * background image to create your Button icon.
         * @accessor
         */
        iconCls: null,

        /**
         * @cfg {String} icon
         * Url to the icon image to use if you want an icon to appear on your button.
         * @accessor
         */
        icon: null,

        /**
         * @cfg {String} iconAlign
         * The position within the Button to render the icon Options are: top, right, botom, left.
         * If you have no {@link #text} set, the icon will be center aligned.
         * @accessor
         */
        iconAlign: 'left',

        pressedDelay: 0,

        /**
         * @cfg {Boolean} iconMask
         * Whether or not to mask the icon with the {@link #iconMaskCls} configuration.
         * This is needed if you want to use any of the bundled pictos icons in the Sencha Touch SASS.
         * @accessor
         */
        iconMask: null,

        /**
         * @cfg {Function} handler
         * The handler function to run when the Button is tapped on.
         * @accessor
         */
        handler: null,

        /**
         * @cfg {Object} scope
         * The scope to fire the configured {@link #handler} in.
         * @accessor
         */
        scope: null,

        /**
         * @cfg {String} autoEvent
         * Optional event name that will be fired instead of 'tap' when the Button is tapped on.
         * @accessor
         */
        autoEvent: null,

        baseCls: Ext.baseCSSPrefix + 'button',

        /**
         * @cfg {String} ui
         * The ui style to render this button with. The valid default options are:
         * 'normal', 'back', 'round', 'action', and 'forward'.
         * @accessor
         */
        ui: 'normal'
    },

    template: [
        {
            tag: 'span',
            reference: 'badgeElement',
            hidden: true
        },

        {
            tag: 'span',
            className: Ext.baseCSSPrefix + 'button-icon',
            reference: 'iconElement',
            hidden: true
        },
        {
            tag: 'span',
            reference: 'textElement',
            hidden: true
        }
    ],

    initialize: function() {
        this.element.on({
            scope      : this,
            tap        : 'onTap',
            touchstart : 'onPress',
            touchmove  : 'onRelease',
            touchend   : 'onRelease'
        });
    },

    /**
     * @private
     */
    updateBadgeText: function(badgeText) {
        var element = this.element,
            badgeElement = this.badgeElement;

        if (badgeText) {
            badgeElement.show();
            badgeElement.setText(badgeText);
        }
        else {
            badgeElement.hide();
        }

        element[(badgeText) ? 'addCls' : 'removeCls'](this.getHasBadgeCls());
    },

    /**
     * @private
     */
    updateText: function(text) {
        var element = this.textElement;

        if (text) {
            element.show();
            element.setText(text);
        }
        else {
            element.hide();
        }
    },

    /**
     * @private
     */
    updateBadgeCls: function(badgeCls, oldBadgeCls) {
        this.badgeElement.replaceCls(oldBadgeCls, badgeCls);
    },

    /**
     * @private
     */
    updateHasBadgeCls: function(hasBadgeCls, oldHasBadgeCls) {
        var element = this.element;

        if (element.hasCls(oldHasBadgeCls)) {
            element.replaceCls(oldHasBadgeCls, hasBadgeCls);
        }
    },

    /**
     * @private
     */
    updateLabelCls: function(labelCls, oldLabelCls) {
        this.textElement.replaceCls(oldLabelCls, labelCls);
    },

    /**
     * @private
     */
    updatePressedCls: function(pressedCls, oldPressedCls) {
        var element = this.element;

        if (element.hasCls(oldPressedCls)) {
            element.replaceCls(oldPressedCls, pressedCls);
        }
    },

    /**
     * @private
     */
    updateIcon: function(icon) {
        var element = this.iconElement;

        if (icon) {
            element.show();
            element.setStyle('background-image', icon ? 'url(' + icon + ')' : '');
            this.refreshIconAlign();
            this.refreshIconMask();
        }
        else {
            element.hide();
            this.setIconAlign(false);
        }
    },

    /**
     * @private
     */
    updateIconCls: function(iconCls, oldIconCls) {
        var element = this.iconElement;

        if (iconCls) {
            element.show();
            element.replaceCls(oldIconCls, iconCls);
            this.refreshIconAlign();
            this.refreshIconMask();
        }
        else {
            element.hide();
            this.setIconAlign(false);
        }
    },

    /**
     * @private
     */
    updateIconAlign: function(alignment, oldAlignment) {
        var element = this.element,
            baseCls = Ext.baseCSSPrefix + 'iconalign-';

        if (!this.getText()) {
            alignment = "center";
        }

        element.removeCls(baseCls + "center");
        element.removeCls(baseCls + oldAlignment);
        if (this.getIcon() || this.getIconCls()) {
            element.addCls(baseCls + alignment);
        }
    },

    refreshIconAlign: function() {
        this.updateIconAlign(this.getIconAlign());
    },

    /**
     * @private
     */
    updateIconMaskCls: function(iconMaskCls, oldIconMaskCls) {
        var element = this.iconElement;

        if (this.getIconMask()) {
            element.replaceCls(oldIconMaskCls, iconMaskCls);
        }
    },

    /**
     * @private
     */
    updateIconMask: function(iconMask) {
        this.iconElement[iconMask ? "addCls" : "removeCls"](this.getIconMaskCls());
    },

    refreshIconMask: function() {
        this.updateIconMask(this.getIconMask());
    },

    applyAutoEvent: function(autoEvent) {
        var me = this;

        if (typeof autoEvent == 'string') {
            autoEvent = {
                name : autoEvent,
                scope: me.scope || me
            };
        }

        return autoEvent;
    },

    /**
     * @private
     */
    updateAutoEvent: function(autoEvent) {
        var name  = autoEvent.name,
            scope = autoEvent.scope;

        this.setHandler(function() {
            scope.fireEvent(name, scope, this);
        });

        this.setScope(scope);
    },

    applyPressedDelay: function(delay) {
        return isNaN(delay) ? 0 : delay;
    },

    // @private
    onPress: function() {
        var element = this.element,
            pressedDelay = this.getPressedDelay(),
            pressedCls = this.getPressedCls();

        if (!this.getDisabled()) {
            this.isPressed = true;

            if (this.hasOwnProperty('releasedTimeout')) {
                clearTimeout(this.releasedTimeout);
                delete this.releasedTimeout;
            }

            if (pressedDelay > 0) {
                this.pressedTimeout = setTimeout(function() {
                    element.addCls(pressedCls);
                }, pressedDelay);
            }
            else {
                element.addCls(pressedCls);
            }
        }
    },

    // @private
    onRelease: function(e) {
        this.fireAction('release', [this, e], 'doRelease');
    },

    // @private
    doRelease: function(e) {
        var me = this;

        if (!me.isPressed) {
            return;
        }

        me.isPressed = true;

        if (this.hasOwnProperty('pressedTimeout')) {
            clearTimeout(this.pressedTimeout);
            delete this.pressedTimeout;
        }

        me.releasedTimeout = setTimeout(function() {
            if (me && me.element) {
                me.element.removeCls(me.getPressedCls());
            }
        }, 10);
    },

    // @private
    onTap: function(e) {
        if (this.getDisabled()) {
            return false;
        }

        this.fireAction('tap', [this, e], 'doTap');
    },

    /**
     * @private
     */
    doTap: function() {
        var handler = this.getHandler(),
            scope   = this.getScope() || this;

        if (!handler) {
            return;
        }

        if (typeof handler == 'string') {
            handler = scope[handler];
        }

        handler.apply(scope, arguments);
    }
}, function() {
    //<deprecated product=touch since=2.0>

    /**
     * Updates the badge text
     * @method setBadge
     * @param {String} text
     * @deprecated 2.0.0 Please use {@link #setBadgeText} instead.
     */
    Ext.deprecateClassMethod(this, 'setBadge', this.prototype.setBadgeText, "'setBadge()' is deprecated, please use setBadgeText()");

    /**
     * Updates the icon class
     * @method setIconClass
     * @param {String} iconClass
     * @deprecated 2.0.0 Please use {@link #setIconCls} instead.
     */
    Ext.deprecateClassMethod(this, 'setIconClass', this.prototype.setIconCls, "'setIconClass()' is deprecated, please use setIconCls()");

    this.override({
        constructor: function(config) {
            if (config) {
                /**
                 * @cfg {String} badge
                 * Optional badge text.
                 * @deprecated 2.0.0 Please use {@link #badgeText} instead
                 */
                if (config.hasOwnProperty('badge')) {
                    //<debug warn>
                    Ext.Logger.deprecate("'badge' config is deprecated, please use 'badgeText' config instead", this);
                    //</debug>
                    config.badgeText = config.badge;
                }

                /**
                 * @cfg {String} html
                 * The Button text.
                 * @deprecated 2.0.0 Please use {@link #text} instead
                 */
                if (config.hasOwnProperty('html')) {
                    //<debug warn>
                    Ext.Logger.deprecate("'html' config is deprecated, please use 'text' config instead", this);
                    //</debug>
                    config.text = config.html;
                }
            }

            this.callParent([config]);
        }
    });

    //</deprecated>
});
