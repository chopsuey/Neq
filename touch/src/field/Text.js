/**
 * The text field is the basis for most of the input fields in Sencha Touch. It provides a baseline of shared
 * functionality such as input validation, standard events, state management and look and feel. Typically we create
 * text fields inside a form, like this:
 *
 *     Ext.create('Ext.form.Panel', {
 *         tbar: {
 *             text: 'Enter your name'
 *         },
 *
 *         items: [
 *             {
 *                 xtype: 'textfield',
 *                 label: 'First Name',
 *                 name: 'firstName'
 *             },
 *             {
 *                 xtype: 'textfield',
 *                 label: 'Last Name',
 *                 name: 'lastName'
 *             }
 *         ]
 *     });
 *
 * This creates two text fields inside a form. Text Fields can also be created outside of a Form, like this:
 *
 *     Ext.create('Ext.field.Text', {
 *         label: 'Your Name',
 *         value: 'Ed Spencer'
 *     });
 *
 * ## Configuring
 *
 * Text field offers several configuration options, including {@link #placeHolder}, {@link #maxLength},
 * {@link #autoComplete}, {@link #autoCapitalize} and {@link #autoCorrect}. For example, here is how we would configure
 * a text field to have a maximum length of 10 characters, with placeholder text that disappears when the field is
 * focused:
 *
 *     Ext.create('Ext.field.Text', {
 *         label: 'Username',
 *         maxLength: 10,
 *         placeHolder: 'Enter your username'
 *     });
 *
 * The autoComplete, autoCapitalize and autoCorrect configs simply set those attributes on the text field and allow the
 * native browser to provide those capabilities. For example, to enable auto complete and auto correct, simply
 * configure your text field like this:
 *
 *     Ext.create('Ext.field.Text', {
 *         label: 'Username',
 *         autoComplete: true,
 *         autoCorrect: true
 *     });
 *
 * These configurations will be picked up by the native browser, which will enable the options at the OS level.
 *
 * Text field inherits from {@link Ext.field.Field}, which is the base class for all fields in Sencha Touch and provides
 * a lot of shared functionality for all fields, including setting values, clearing and basic validation. See the
 * {@link Ext.field.Field} documentation to see how to leverage its capabilities.
 */
Ext.define('Ext.field.Text', {
    extend: 'Ext.field.Field',
    alias : 'widget.textfield',
    alternateClassName: 'Ext.form.Text',

    /**
     * @event focus
     * Fires when this field receives input focus.
     * @param {Ext.field.Text} this This field
     * @param {Ext.event.Event} e
     */

    /**
     * @event blur
     * Fires when this field loses input focus.
     * @param {Ext.field.Text} this This field
     * @param {Ext.event.Event} e
     */

    /**
     * @event keyup
     * Fires when a key is released on the input element.
     * @param {Ext.field.Text} this This field
     * @param {Ext.event.Event} e
     */

    /**
     * @event change
     * Fires just before the field blurs if the field value has changed.
     * @param {Ext.field.Text} this This field
     * @param {Mixed} newValue The new value
     * @param {Mixed} oldValue The original value
     */

    /**
     * @event action
     * Fires whenever the return key or go is pressed. FormPanel listeners
     * for this event, and submits itself whenever it fires. Also note
     * that this event bubbles up to parent containers.
     * @param {Ext.field.Text} this This field
     * @param {Mixed} e The key event object
     */

    config: {
        // @inherit
        ui: 'text',

        // @inherit
        input: {
            type: 'text'
        },

        // @inherit
        clearIcon: true,

        /**
         * @cfg {String} placeHolder A string value displayed in the input (if supported) when the control is empty.
         * @deprecated 2.0
         * @accessor
         */
        placeHolder: null,

        /**
         * @cfg {Number} maxLength The maximum number of permitted input characters.
         * @accessor
         */
        maxLength: null,

        /**
         * True to set the field's DOM element autocomplete attribute to "on", false to set to "off".
         * @cfg {Boolean} autoComplete
         * @accessor
         */
        autoComplete: null,

        /**
         * True to set the field's DOM element autocapitalize attribute to "on", false to set to "off".
         * @cfg {Boolean} autoCapitalize
         * @accessor
         */
        autoCapitalize: null,

        /**
         * True to set the field DOM element autocorrect attribute to "on", false to set to "off".
         * @cfg {Boolean} autoCorrect
         * @accessor
         */
        autoCorrect: null
    },

    // @private
    initialize: function() {
        this.enableBubble('action');
        this.callParent(arguments);

        var me = this;

        me.callParent(arguments);

        me.on({
            scope: me,

            keyup : 'doKeyUp',
            change: 'doChange'
        });

        me.on({
            scope   : me,
            delegate: 'clearicon',

            tap: 'onClearIconTap'
        });

        this.relayEvents(me.getInput(), [
            'keyup',
            'change',
            'focus',
            'blur',
            'paste',
            'mousedown'
        ]);
    },

    // @inherit
    updateValue: function(newValue) {
        this.callParent(arguments);
        this[newValue ? 'showClearIcon' : 'hideClearIcon']();
    },

    // @private
    updatePlaceHolder: function(newPlaceHolder) {
        this.getInput().setPlaceHolder(newPlaceHolder);
    },

    // @private
    updateMaxLength: function(newMaxLength) {
        this.getInput().setMaxLength(newMaxLength);
    },

    // @private
    updateAutoComplete: function(newAutoComplete) {
        this.getInput().setAutoComplete(newAutoComplete);
    },

    // @private
    updateAutoCapitalize: function(newAutoCapitalize) {
        this.getInput().setAutoCapitalize(newAutoCapitalize);
    },

    // @private
    updateAutoCorrect: function(newAutoCorrect) {
        this.getInput().setAutoCorrect(newAutoCorrect);
    },

    // @private
    doSetDisabled: function(disabled) {
        this.callParent(arguments);

        if (disabled) {
            this.hideClearIcon();
        } else {
            this.showClearIcon();
        }
    },

    // @private
    onClearIconTap: function() {
        this.setValue('');
    },

    // @private
    showClearIcon: function() {
        var me = this,
            clearIcon = this.getClearIcon();

        if (!me.getDisabled() && me.getValue() && clearIcon) {
            clearIcon.show();

            this.element.addCls(Ext.baseCSSPrefix + 'field-clearable');
        }

        return this;
    },

    // @private
    hideClearIcon: function() {
        var clearIcon = this.getClearIcon();
        if (clearIcon) {
            clearIcon.hide();
            this.element.removeCls(Ext.baseCSSPrefix + 'field-clearable');
        }
    },

    doChange: Ext.emptyFn,

    /**
     * Called when a key has been pressed in the {@link #input}
     * @private
     */
    doKeyUp: function(e) {
        // getValue to ensure that we are in sync with the dom
        var me = this,
            value = me.getValue();

        // show the {@link #clearIcon} if it is being used
        this[value ? 'showClearIcon' : 'hideClearIcon']();

        if (e.browserEvent.keyCode === 13) {
            me.getInput().blur();
            me.fireAction('action', [me, e], 'doAction');
        }
    },

    doAction: Ext.emptyFn,

    /**
     * Attempts to set the field as the active input focus.
     * @return {Ext.field.Text} This field
     */
    focus: function() {
        this.getInput().focus();
        return this;
    },

    /**
     * Attempts to forcefully blur input focus for the field.
     * @return {Ext.field.Text} This field
     */
    blur: function() {
        this.getInput().blur();
        return this;
    },

    // @inherit
    reset: function() {
        this.callParent(arguments);
        this[this._value ? 'showClearIcon' : 'hideClearIcon']();
    }
});

//<deprecated product=touch since=2.0>
/**
 * @property startValue
 * @type String/Number
 * Deprecated, used to contain the previous value of the field before the edit
 * @deprecated 2.0.0
 * @member Ext.field.Text
 */
//</deprecated>
