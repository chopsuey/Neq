(function(clsPrefix) {

/**
 * Most of the visual classes you interact with in Sencha Touch are Components. Every Component in Sencha Touch is a
 * subclass of Ext.Component, which means they can all:
 *
 * * Render themselves onto the page using a template
 * * Show and hide themselves at any time
 * * Center themselves on the screen
 * * Enable and disable themselves
 *
 * They can also do a few more advanced things:
 *
 * * Float above other components (windows, message boxes and overlays)
 * * Change size and position on the screen with animation
 * * Dock other Components inside itself (useful for toolbars)
 * * Align to other components, allow themselves to be dragged around, make their content scrollable & more
 *
 * ## Available Components
 *
 * There are many components available in Sencha Touch, separated into 4 main groups:
 *
 * ### Navigation components
 * * {@link Ext.Toolbar}
 * * {@link Ext.Button}
 * * {@link Ext.NavigationBar}
 * * {@link Ext.SegmentedButton}
 * * {@link Ext.Title}
 * * {@link Ext.Spacer}
 *
 * ### Store-bound components
 * * {@link Ext.dataview.DataView}
 * * {@link Ext.dataview.ComponentView}
 * * {@link Ext.Carousel}
 * * {@link Ext.List}
 * * {@link Ext.NestedList}
 *
 * ### Form components
 * * {@link Ext.form.Panel}
 * * {@link Ext.form.FieldSet}
 * * {@link Ext.field.Checkbox}
 * * {@link Ext.field.Hidden}
 * * {@link Ext.field.Slider}
 * * {@link Ext.field.Text}
 * * {@link Ext.picker.Picker}
 * * {@link Ext.picker.Date}
 *
 * ### General components
 * * {@link Ext.Panel}
 * * {@link Ext.tab.Panel}
 * * {@link Ext.viewport.Viewport Ext.Viewport}
 * * {@link Ext.Img}
 * * {@link Ext.Map}
 * * {@link Ext.Audio}
 * * {@link Ext.Video}
 * * {@link Ext.Sheet}
 * * {@link Ext.ActionSheet}
 * * {@link Ext.MessageBox}
 *
 *
 * ## Instantiating Components
 *
 * Components are created the same way as all other classes in Sencha Touch - using Ext.create. Here's how we can
 * create a Text field:
 *
 *     var panel = Ext.create('Ext.Panel', {
 *         html: 'This is my panel'
 *     });
 *
 * This will create a {@link Ext.Panel Panel} instance, configured with some basic HTML content. A Panel is just a
 * simple Component that can render HTML and also contain other items. In this case we've created a Panel instance but
 * it won't show up on the screen yet because items are not rendered immediately after being instantiated. This allows
 * us to create some components and move them around before rendering and laying them out, which is a good deal faster
 * than moving them after rendering.
 *
 * To show this panel on the screen now we can simply add it to the global Viewport:
 *
 *     Ext.Viewport.add(panel);
 *
 * Panels are also Containers, which means they can contain other Components, arranged by a layout. Let's revisit the
 * above example now, this time creating a panel with two child Components and a hbox layout:
 *
 *     @example
 *     var panel = Ext.create('Ext.Panel', {
 *         layout: 'hbox',
 *
 *         items: [
 *             {
 *                 xtype: 'panel',
 *                 flex: 1,
 *                 html: 'Left Panel, 1/3rd of total size',
 *                  style: 'background-color: #5E99CC;'
 *             },
 *             {
 *                 xtype: 'panel',
 *                 flex: 2,
 *                 html: 'Right Panel, 2/3rds of total size',
 *                  style: 'background-color: #759E60;'
 *             }
 *         ]
 *     });
 *
 *     Ext.Viewport.add(panel);
 *
 * This time we created 3 Panels - the first one is created just as before but the inner two are declared inline using
 * an xtype. Xtype is a convenient way of creating Components without having to go through the process of using
 * Ext.create and specifying the full class name, instead you can just provide the xtype for the class inside an object
 * and the framework will create the components for you.
 *
 * We also specified a layout for the top level panel - in this case hbox, which splits the horizontal width of the
 * parent panel based on the 'flex' of each child. For example, if the parent Panel above is 300px wide then the first
 * child will be flexed to 100px wide and the second to 200px because the first one was given flex: 1 and the second
 * flex: 2.
 *
 * ## Configuring Components
 *
 * Whenever you create a new Component you can pass in configuration options. All of the configurations for a given
 * Component are listed in the "Config options" section of its class docs page. You can pass in any number of
 * configuration options when you instantiate the Component, and modify any of them at any point later. For example, we
 *  can easily modify the {@link Ext.Panel#html html content} of a Panel after creating it:
 *
 *     @example miniphone
 *     //we can configure the HTML when we instantiate the Component
 *     var panel = Ext.create('Ext.Panel', {
 *         fullscreen: true,
 *         html: 'This is a Panel'
 *     });
 *
 *     //we can update the HTML later using the setHtml method:
 *     panel.setHtml('Some new HTML');
 *
 *     //we can retrieve the current HTML using the getHtml method:
 *     alert(panel.getHtml()); //alerts "Some new HTML"
 *
 * Every config has a getter method and a setter method - these are automatically generated and always follow the same
 * pattern. For example, a config called 'html' will receive getHtml and setHtml methods, a config called defaultType
 * will receive getDefaultType and setDefaultType methods, and so on.
 *
 * ## Further Reading
 *
 * See the [Component & Container Guide](#!/guide/components) for more information, and check out the
 * {@link Ext.Container} class docs also.
 *
 */
Ext.define('Ext.Component', {

    extend: 'Ext.AbstractComponent',

    alternateClassName: 'Ext.lib.Component',

    mixins: ['Ext.mixin.Traversable'],

    requires: [
        'Ext.ComponentManager',
        'Ext.XTemplate',
        'Ext.dom.Element',
        'Ext.behavior.Draggable'
    ],

    xtype: 'component',

    observableType: 'component',

    cachedConfig: {
        /**
         * @cfg {Number} flex
         */

        /**
         * @cfg {String} baseCls
         * The base CSS class to apply to this components's element. This will also be prepended to
         * other elements within this component. To add specific styling for sub-classes, use the `cls` config.
         * @accessor
         */
        baseCls: null,

        /**
         * @cfg {String} cls the CSS class to add to this component's element, in addition to the `baseCls`
         * @accessor
         */
        cls: null,

        /**
         * @cfg {String} ui The ui to be used on this Component
         */
        ui: null,

        /**
         * @cfg {Number/String} margin The margin to use on this Component. Can be specified as a number (in which case
         * all edges get the same margin) or a CSS string like '5 10 10 10'
         * @accessor
         */
        margin: null,

        /**
         * @cfg {Number/String} padding The padding to use on this Component. Can be specified as a number (in which
         * case all edges get the same padding) or a CSS string like '5 10 10 10'
         * @accessor
         */
        padding: null,

        /**
         * @cfg {Number/String} border The border to use on this Component. Can be specified as a number (in which
         * case all edges get the same border width) or a CSS string like '5 10 10 10'
         * @accessor
         */
        border: null,

        /**
         * @cfg {String} styleHtmlCls
         * The class that is added to the content target when you set styleHtmlContent to true.
         * @accessor
         */
        styleHtmlCls: clsPrefix + 'html',

        /**
         * @cfg {Boolean} styleHtmlContent
         * True to automatically style the html inside the content target of this component (body for panels).
         * @accessor
         */
        styleHtmlContent: null,

        /**
         * @cfg {Boolean} masked
         * True to mask this component.
         * @accessor
         */
        masked: null,

        /**
         * @cfg {Boolean} hidden
         * True to hide this component
         * @accessor
         */
        hidden: false
    },

    eventedConfig: {
        /**
         * @cfg {Number/Boolean} left
         * @accessor
         * @evented
         */
        left: null,

        /**
         * @cfg {Number/Boolean} top
         * @accessor
         * @evented
         */
        top: null,

        /**
         * @cfg {Number/Boolean} right
         * @accessor
         * @evented
         */
        right: null,

        /**
         * @cfg {Number/Boolean} bottom
         * @accessor
         * @evented
         */
        bottom: null,

        /**
         * @cfg {Number} width
         * The width of this component in pixels.
         * @accessor
         * @evented
         */
        width: null,

        /**
         * @cfg {Number} height
         * The height of this component in pixels.
         * @accessor
         * @evented
         */
        height: null,

        /**
         * @cfg {String} docked
         * The dock position of this component in its container. Can be 'left', 'top', 'right' or 'bottom'.
         * @accessor
         * @evented
         */
        docked: null,

        /**
         * @cfg {Boolean} centered
         * Whether or not this component is absolutely centered inside its container
         * @accessor
         * @evented
         */
        centered: null,

        /**
         * @cfg {Boolean} hidden
         * Whether or not this component is hidden
         * @accessor
         * @evented
         */
        hidden: null,

        /**
         * @cfg {Boolean} disabled
         * Whether or not this component is disabled
         * @accessor
         * @evented
         */
        disabled: null
    },

    config: {
        /**
         * @cfg {String/Object} style Optional CSS styles that will be rendered into an inline style attribute when the
         * Component is rendered
         * @accessor
         */
        style: null,

        /**
         * @cfg {String/Ext.Element/HTMLElement} html Optional HTML content to render inside this Component, or a reference
         * to an existing element on the page.
         * @accessor
         */
        html: null,

        /**
         * @cfg {Object} draggable Configuration options to make this Component draggable
         * @accessor
         */
        draggable: null,

        /**
         * @cfg {Object} droppable Configuration options to make this Component droppable
         * @accessor
         */
        droppable: null,

        /**
         * @cfg {Ext.Element} renderTo Optional element to render this Component to. Usually this is not needed because
         * a Component is normally full screen or automatically rendered inside another {@link Ext.Container Container}
         * @accessor
         */
        renderTo: null,

        /**
         * @cfg {Number} zIndex The z-index to give this Component when it is rendered
         * @accessor
         */
        zIndex: null,

        /**
         * @cfg {Mixed} tpl
         * An <bold>{@link Ext.Template}</bold>, <bold>{@link Ext.XTemplate}</bold>
         * or an array of strings to form an Ext.XTemplate.
         * Used in conjunction with the <code>{@link #data}</code> and
         * <code>{@link #tplWriteMode}</code> configurations.
         * @accessor
         */
        tpl: null,

        /**
         * @cfg {Mixed} renderTpl
         * <p>An {@link Ext.XTemplate XTemplate} used to create the internal structure inside this Component's
         * encapsulating Element.</p>
         * <p>You do not normally need to specify this. For the base classes {@link Ext.Component}
         * and {@link Ext.Container}, this defaults to <b><code>null</code></b> which means that they will be initially rendered
         * with no internal structure; they render their {@link #getEl Element} empty. The more specialized ExtJS and Touch classes
         * which use a more complex DOM structure, provide their own template definitions.</p>
         * <p>This is intended to allow the developer to create application-specific utility Components with customized
         * internal structure.</p>
         * @accessor
         */

        /**
         * @cfg {String} tplWriteMode The Ext.(X)Template method to use when
         * updating the content area of the Component. Defaults to <code>'overwrite'</code>
         * (see <code>{@link Ext.XTemplate#overwrite}</code>).
         * @accessor
         */
        tplWriteMode: 'overwrite',

        /**
         * @cfg {Mixed} data
         * The initial set of data to apply to the <code>{@link #tpl}</code> to
         * update the content area of the Component.
         * @accessor
         */
        data: null,

        /**
         * @cfg {String} disabledCls The CSS class to add to the component when it is disabled
         * @accessor
         */
        disabledCls: clsPrefix + 'item-disabled',

        /**
         * @cfg {Boolean} modal True to make this Component modal. This will create a mask underneath the Component
         * that covers the whole page and does not allow the user to interact with any other Components until this
         * Component is dismissed
         * @accessor
         */
        modal: null,

        /**
         * @cfg {Boolean} hideOnMaskTap When using a {@link #modal} Component, setting this to true (the default) will
         * hide the modal mask and the Component when the mask is tapped on
         * @accessor
         */
        hideOnMaskTap: true,

        /**
         * @cfg {Ext.Element/HTMLElement/String} contentEl The configured element will automatically be added as the content of this
         * component. When you pass a string, we expect it to be an element id. If the content element is hidden, we will automatically
         * show it.
         * @accessor
         */
        contentEl: null,

        /**
         * @private
         * @cfg {String} itemId
         * @accessor
         */
        itemId: undefined
    },

    /**
     * @event painted
     * Fires whenever the Component is moved into to the DOM body
     * @param {Ext.Component} this The component instance
     */

    /**
     * @event erased
     * Fires whenever the Component is moved out of the DOM body
     * @param {Ext.Component} this The component instance
     */

    /**
     * @event show
     * Fires whenever the Component is shown
     * @param {Ext.Component} this The component instance
     */

    /**
     * @event hide
     * Fires whenever the Component is hidden
     * @param {Ext.Component} this The component instance
     */

    /**
     * @private
     */
    alignPositionMap: [
        'tl-bl',
        't-b',
        'tr-br',
        'l-r',
        'l-r',
        'r-l',
        'bl-tl',
        'b-t',
        'br-tr'
    ],

    /**
     * @private
     */
    isComponent: true,

    /**
     * @private
     */
    floating: false,

    /**
     * @private
     */
    rendered: false,

    /**
     * @private
     */
    maskText: null,

    /**
     * @private
     */
    maskTextCls: clsPrefix + 'mask-msg',

    /**
     * @private
     */
    loadingMask: false,

    /**
     * @readonly
     */
    dockPositions: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },

    innerElement: null,

    element: null,

    template: [],

    /**
     * Creates new Component.
     * @param {Object} config The standard configuration object.
     */
    constructor: function(config) {
        if (config && config.id) {
            this.id = config.id;
            delete config.id;
        }
        else {
            this.getId();
        }

        Ext.ComponentManager.register(this);

        this.callParent(arguments);

        /**
         * Force the component to take up 100% width and height available, by adding it to {@link Ext.viewport.Viewport}.
         * @cfg {Boolean} fullscren
         * @deprecated 2.0.0 Please use Ext.Viewport.add instead
         */
        if ('fullscreen' in this.config) {
            this.fireEvent('fullscreen', this);
        }
    },

    getTemplate: function() {
        return this.template;
    },

    getElementConfig: function() {
        return {
            reference: 'element',
            children: this.getTemplate()
        };
    },

    /**
     * Retrieves the top level element representing this component.
     * @return {Ext.dom.Element}
     */
    getEl: function() {
        return this.renderElement;
    },

    renderTo: function(container, insertBeforeElement) {
        var dom = this.renderElement.dom,
            containerDom = Ext.getDom(container),
            insertBeforeChildDom = Ext.getDom(insertBeforeElement);

        if (containerDom) {
            if (insertBeforeChildDom) {
                containerDom.insertBefore(dom, insertBeforeChildDom);
            }
            else {
                containerDom.appendChild(dom);
            }

            this.setRendered(Boolean(dom.offsetParent));
        }
    },

    setParent: function(parent) {
        var currentParent = this.parent;

        if (parent && currentParent && currentParent !== parent) {
            currentParent.remove(this, false);
        }

        this.parent = parent;

        return this;
    },

    updateRenderTo: function(newContainer) {
        this.renderTo(newContainer);
    },

    updateStyle: function(style) {
        this.element.dom.setAttribute('style', style);
    },

    updateBorder: function(border) {
        this.element.setBorder(border);
    },

    updatePadding: function(padding) {
       this.innerElement.setPadding(padding);
    },

    updateMargin: function(margin) {
        this.element.setMargin(margin);
    },

    updateUi: function(newUi, oldUi) {
        var baseCls = this.getBaseCls();

        if (baseCls) {
            if (newUi) {
                this.addCls(newUi, baseCls);
            }

            if (oldUi) {
                this.removeCls(oldUi, baseCls);
            }
        }
    },

    applyBaseCls: function(baseCls) {
        return baseCls || clsPrefix + this.xtype;
    },

    updateBaseCls: function(newBaseCls, oldBaseCls) {
        var me = this,
            ui = me.getUi();

        if (newBaseCls) {
            this.addCls(newBaseCls);

            if (ui) {
                this.addCls(newBaseCls, null, ui);
            }
        }

        if (oldBaseCls) {
            this.removeCls(oldBaseCls);

            if (ui) {
                this.removeCls(oldBaseCls, null, ui);
            }
        }
    },

    updateCls: function(cls, oldCls) {
        this.replaceCls(oldCls, cls);
    },

    /**
     * Updates the {@link #styleHtmlCls} configuration
     */
    updateStyleHtmlCls: function(newHtmlCls, oldHtmlCls) {
        var innerHtmlElement = this.innerHtmlElement,
            innerElement = this.innerElement;

        if (this.getStyleHtmlContent() && oldHtmlCls) {
            if (innerHtmlElement) {
                innerHtmlElement.replaceCls(oldHtmlCls, newHtmlCls);
            } else {
                innerElement.replaceCls(oldHtmlCls, newHtmlCls);
            }
        }
    },

    updateStyleHtmlContent: function(styleHtmlContent) {
        var htmlCls = this.getStyleHtmlCls(),
            innerElement = this.innerElement,
            innerHtmlElement = this.innerHtmlElement;

        if (styleHtmlContent) {
            if (innerHtmlElement) {
                innerHtmlElement.addCls(htmlCls);
            } else {
                innerElement.addCls(htmlCls);
            }
        } else {
            if (innerHtmlElement) {
                innerHtmlElement.removeCls(htmlCls);
            } else {
                innerElement.addCls(htmlCls);
            }
        }
    },

    applyContentEl: function(contentEl) {
        if (contentEl) {
            return Ext.get(contentEl);
        }
    },

    updateContentEl: function(newContentEl, oldContentEl) {
        if (oldContentEl) {
            oldContentEl.hide();
            Ext.getBody().append(oldContentEl);
        }
        if (newContentEl) {
            this.setHtml(newContentEl);
            newContentEl.show();
        }
    },

    /**
     * Returns the height and width of the Component
     * @return {Object} The current height and width of the Component
     */
    getSize: function() {
        return {
            width: this.getWidth(),
            height: this.getHeight()
        };
    },

    isCentered: function() {
        return Boolean(this.getCentered());
    },

    isFloating: function() {
        return this.floating;
    },

    isDocked: function() {
        return Boolean(this.getDocked());
    },

    isInnerItem: function() {
        var me = this;
        return !me.isCentered() && !me.isFloating() && !me.isDocked();
    },

    filterPositionValue: function(value) {
        if (value === '' || value === 'auto') {
            value = null;
        }

        return value;
    },

    applyTop: function(top) {
        return this.filterPositionValue(top);
    },

    applyRight: function(right) {
        return this.filterPositionValue(right);
    },

    applyBottom: function(bottom) {
        return this.filterPositionValue(bottom);
    },

    applyLeft: function(left) {
        return this.filterPositionValue(left);
    },

    doSetTop: function(top) {
        this.updateFloating();
        this.element.setTop(top);
    },

    doSetRight: function(right) {
        this.updateFloating();
        this.element.setRight(right);
    },

    doSetBottom: function(bottom) {
        this.updateFloating();
        this.element.setBottom(bottom);
    },

    doSetLeft: function(left) {
        this.updateFloating();
        this.element.setLeft(left);
    },

    doSetWidth: function(width) {
        this.element.setWidth(width);
    },

    doSetHeight: function(height) {
        this.element.setHeight(height);
    },

    //TODO Implement animations here
//    animatePosition: function(property, value, animation) {
//        var me = this,
//            config = {};
//
//        animation = Ext.factory(animation || true, Ext.fx.Animation);
//        animation.setElement(this.element);
//        animation.setBefore({
//            position: 'absolute'
//        });
//        animation.getFrom().set(property, this.getConfig(property));
//        animation.getTo().set(property, value);
//        animation.setAfter({
//            position: null
//        });
//        animation.setOnEnd(function() {
//            me.setConfig(config);
//        });
//
//        config[property] = value;
//
//        Ext.Animator.run(animation);
//    },
//
//    animateSize: function(property, value, animation) {
//
//    },
//
//    animateVisibility: function(value, animation) {
//
//    },

    applyCentered: function(centered) {
        centered = Boolean(centered);

        if (centered) {
            if (this.isFloating()) {
                this.resetFloating();
            }

            if (this.isDocked()) {
                this.setDocked(false);
            }
        }

        return centered;
    },

    doSetCentered: Ext.emptyFn,

    applyDocked: function(docked) {
        if (docked) {
            if (!this.dockPositions[docked]) {
                //<debug error>
                Ext.Logger.error("Invalid docking position of '" + docked + "', must be either 'top', 'right', 'bottom', " +
                    "'left' or `null` (for no docking)", this);
                //</debug>
                return;
            }

            if (this.isFloating()) {
                this.resetFloating();
            }

            if (this.isCentered()) {
                this.setCentered(false);
            }
        }

        return docked;
    },

    doSetDocked: Ext.emptyFn,

    resetFloating: function() {
        this.setTop(null);
        this.setRight(null);
        this.setBottom(null);
        this.setLeft(null);
    },

    updateFloating: function() {
        var floating = true;

        if (this.getTop() === null && this.getBottom() === null && this.getRight() === null && this.getLeft() === null) {
            floating = false;
        }

        if (floating !== this.floating) {
            if (floating) {
                if (this.isCentered()) {
                    this.setCentered(false);
                }

                if (this.isDocked()) {
                    this.setDocked(false);
                }
            }

            this.floating = floating;
            this.fireEvent('floatingchange', this, floating);
        }
    },

    applyDisabled: function(disabled) {
        return Boolean(disabled);
    },

    doSetDisabled: function(disabled) {
        this.element[disabled ? 'addCls' : 'removeCls'](this.getDisabledCls());
    },

    /**
     * Disables this Component
     */
    disable: function() {
       this.setDisabled(true);
    },

    /**
     * Enables this Component
     */
    enable: function() {
        this.setDisabled(false);
    },

    /**
     * Returns true if this Component is currently disabled
     * @return {Boolean} True if currently disabled
     */
    isDisabled: function() {
        return this.getDisabled();
    },

    updateZIndex: function(zIndex) {
        this.element.dom.style.zIndex = zIndex;
    },

    getInnerHtmlElement: function() {
        var innerHtmlElement = this.innerHtmlElement,
            styleHtmlCls = this.getStyleHtmlCls();

        if (!innerHtmlElement || !innerHtmlElement.dom || !innerHtmlElement.dom.parentNode) {
            this.innerHtmlElement = innerHtmlElement = this.innerElement.createChild({ cls: 'x-innerhtml ' });

            if (this.getStyleHtmlContent()) {
                this.innerHtmlElement.addCls(styleHtmlCls);
                this.innerElement.removeCls(styleHtmlCls);
            }
        }

        return innerHtmlElement;
    },

    updateHtml: function(html) {
        var innerHtmlElement = this.getInnerHtmlElement();
        if (typeof html === 'string') {
            innerHtmlElement.setHtml(html);
        } else {
            innerHtmlElement.setHtml('');
            innerHtmlElement.append(html);
        }
    },

    applyHidden: function(hidden) {
        return Boolean(hidden);
    },

    doSetHidden: function(hidden) {
        var element = this.renderElement;

        if (hidden) {
            element.hide();
        }
        else {
            element.show();
        }
    },

    /**
     * Returns true if this Component is currently hidden
     * @return {Boolean} True if currently hidden
     */
    isHidden: function() {
        return this.getHidden();
    },

    /**
     * Hides this Component
     */
    hide: function() {
        this.setHidden(true);
    },

    /**
     * Shows this component
     */
    show: function() {
        this.setHidden(false);
    },

    /**
     * @private
     */
    isRendered: function() {
        return this.rendered;
    },

    /**
     * @private
     */
    isPainted: function() {
        return this.renderElement.isPainted();
    },

    /**
     * @private
     */
    applyTpl: function(config) {
        return (Ext.isObject(config) && config.isTemplate) ? config : new Ext.XTemplate(config);
    },

    /**
     * @private
     */
    updateData: function(newData) {
        var me = this;
        if (newData) {
            var tpl = me.getTpl(),
                tplWriteMode = me.getTplWriteMode();

            if (tpl) {
                tpl[tplWriteMode](me.element, newData);
            }
        }
    },

    /**
     * Adds a CSS class (or classes) to this Component's rendered element
     * @param {String} cls The CSS class to add
     * @param {String} prefix Optional prefix to add to each class
     * @param {String} suffix Optional suffix to add to each class
     */
    addCls: function(cls, prefix, suffix) {
        this.element.addCls(cls, prefix, suffix);
    },

    /**
     * Removes the given CSS class(es) from this Component's rendered element
     * @param {String} cls The class(es) to remove
     * @param {String} prefix Optional prefix to prepend before each class
     * @param {String} suffix Optional suffix to append to each class
     */
    removeCls: function(cls, prefix, suffix) {
        this.element.removeCls(cls, prefix, suffix);
    },

    replaceCls: function(oldCls, newCls, prefix, suffix) {
        this.element.replaceCls(oldCls, newCls, prefix, suffix);
    },

    applyItemId: function(itemId) {
        return itemId || this.getId();
    },

    //TODO Deprecate this method name, should have been 'isXtype' (lowercased 't')
    /**
     * <p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended
     * from the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>
     * <p><b>If using your own subclasses, be aware that a Component must register its own xtype
     * to participate in determination of inherited xtypes.</b></p>
     * <p>For a list of all available xtypes, see the {@link Ext.Component} header.</p>
     * <p>Example usage:</p>
     * <pre><code>
var t = new Ext.field.Text();
var isText = t.isXType('textfield');        // true
var isBoxSubclass = t.isXType('field');       // true, descended from Ext.field.Field
var isBoxInstance = t.isXType('field', true); // false, not a direct Ext.field.Field instance
</code></pre>
     * @param {String} xtype The xtype to check for this Component
     * @param {Boolean} shallow (optional) False to check whether this Component is descended from the xtype (this is
     * the default), or true to check whether this Component is directly of the specified xtype.
     * @return {Boolean} True if this component descends from the specified xtype, false otherwise.
     */
    isXType: function(xtype, shallow) {
        if (shallow) {
            return this.xtypes.indexOf(xtype) != -1;
        }

        return Boolean(this.xtypesMap[xtype]);
    },

    //TODO Correct this method's signature should return the array of xtypes instead of a string. Also
    // its name should be getXtypes (lowercased 't')
    /**
     * <p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
     * available xtypes, see the {@link Ext.Component} header.</p>
     * <p><b>If using your own subclasses, be aware that a Component must register its own xtype
     * to participate in determination of inherited xtypes.</b></p>
     * <p>Example usage:</p>
     * <pre><code>
var t = new Ext.field.Text();
alert(t.getXTypes());  // alerts 'component/field/textfield'
</code></pre>
     * @return {String} The xtype hierarchy string
     */
    getXTypes: function() {
        return this.xtypesChain.join('/');
    },

    getDraggableBehavior: function() {
        var behavior = this.draggableBehavior;

        if (!behavior) {
            behavior = this.draggableBehavior = new Ext.behavior.Draggable(this);
        }

        return behavior;
    },

    applyDraggable: function(config) {
        this.getDraggableBehavior().setConfig(config);
    },

    getDraggable: function() {
        return this.getDraggableBehavior().getDraggable();
    },

    setRendered: function(rendered) {
        var wasRendered = this.rendered;

        if (rendered !== wasRendered) {
            this.rendered = rendered;

            return true;
        }

        return false;
    },

    /**
     * Sets the size of the Component
     * @param {Number} width The new width for the Component
     * @param {Number} height The new height for the Component
     */
    setSize: function(width, height) {
        if (width != undefined) {
            this.setWidth(width);
        }
        if (height != undefined) {
            this.setHeight(height);
        }
    },

    //TODO Need serious rewrites from here on or move them to the proper places
    /**
     * Shows this Component next to another Component or Element
     * @param {Ext.Component/Ext.Element} alignTo The Element or Component to align to
     */
    showBy: function(alignTo, animation, anchor) {
        // @todo animation + allowOnSide not implemented
        //<debug warn>
        if (animation) {
            Ext.Logger.warn('showBy: animation argument not implemented.');
        }
        //</debug>

        var parent = this.getParent();
        if (parent) {
            parent.remove(this, false);
        }

        Ext.Viewport.add(this);

        this.setTop(-10000);
        this.setLeft(-10000);
        this.show();

        this.alignTo(alignTo, anchor || 'auto');

        // If we don't do a repaint here, on iOS5 iPhone/iPod, the element will not be positioned correctly
        // on the screen
        this.element.repaint();
    },

    anchorRe: /^([a-z]+)-([a-z]+)(\?)?$/,

    doAnchorXY: function(anchor, box, toBox, constrainBox) {
        var matches = anchor.match(this.anchorRe),
            fromAnchor = matches[1].split(''),
            toAnchor = matches[2].split(''),
            offsetBox = {top: toBox.top, left: toBox.left},
            constrain = (matches[3] === '?'),

            fromVertical = fromAnchor[0],
            fromHorizontal = fromAnchor[1] || fromVertical,

            toVertical = toAnchor[0],
            toHorizontal = toAnchor[1] || toVertical,

            maxLeft, maxTop;

        switch (fromVertical) {
            case 't':
                switch (toVertical) {
                    case 'c':
                        offsetBox.top += toBox.height / 2;
                        break;
                    case 'b':
                        offsetBox.top += toBox.height;
                }
                break;

            case 'b':
                switch (toVertical) {
                    case 'c':
                        offsetBox.top -= (box.height - (toBox.height / 2));
                        break;
                    case 't':
                        offsetBox.top -= box.height;
                }
                break;

            case 'c':
                 switch (toVertical) {
                    case 't':
                        offsetBox.top -= (box.height / 2);
                        break;
                    case 'c':
                        offsetBox.top -= ((box.height / 2) - (toBox.height / 2));
                        break;
                    case 'b':
                        offsetBox.top -= ((box.height / 2) - toBox.height);
                }
                break;
        }

        switch (fromHorizontal) {
            case 'l':
                switch (toHorizontal) {
                    case 'c':
                        offsetBox.left += toBox.width / 2;
                        break;
                    case 'r':
                        offsetBox.left += toBox.width;
                }
                break;

            case 'r':
                switch (toHorizontal) {
                    case 'r':
                        offsetBox.left -= (box.width - toBox.width);
                        break;
                    case 'c':
                        offsetBox.left -= (box.width - (toBox.width / 2));
                        break;
                    case 'l':
                        offsetBox.left -= box.width;
                }
                break;

            case 'c':
                 switch (toHorizontal) {
                    case 'l':
                        offsetBox.left -= (box.width / 2);
                        break;
                    case 'c':
                        offsetBox.left -= ((box.width / 2) - (toBox.width / 2));
                        break;
                    case 'r':
                        offsetBox.left -= ((box.width / 2) - toBox.width);
                }
                break;
        }

        if (constrain) {
            maxLeft = (constrainBox.left + constrainBox.width) - box.width;
            maxTop = (constrainBox.top + constrainBox.height) - box.height;

            offsetBox.left = Math.max(constrainBox.left, Math.min(maxLeft, offsetBox.left));
            offsetBox.top = Math.max(constrainBox.top, Math.min(maxTop, offsetBox.top));
        }

        return offsetBox;
    },

    alignTo : function(alignTo, anchor, offset) {
        offset = offset || 0;

        var alignElement = alignTo.element,
            alignXY = webkitConvertPointFromNodeToPage(alignElement.dom, new WebKitPoint()),
            alignSize = alignElement.getSize(),
            size = this.element.getSize(),
            parent = this.getParent(),
            constrainBox = (parent) ? parent.element.getBox() : Ext.getBody().getBox(),
            box = {
                left: 0,
                top: 0,
                width: size.width,
                height: size.height
            },
            relativeToBox = {
                left: alignXY.x,
                top: alignXY.y,
                width: alignSize.width,
                height: alignSize.height
            }, anchorBox, tmpBox;

        if (anchor == 'auto') {
            anchor = 'tc-bc';
        }

        anchorBox = this.doAnchorXY(anchor, box, relativeToBox, constrainBox);
        if (anchorBox.top + box.height > constrainBox.top + constrainBox.height) {
            tmpBox = this.doAnchorXY('bc-tc?', box, relativeToBox, constrainBox);
            anchorBox.top = tmpBox.top;
        }
        if (anchorBox.left + box.width > constrainBox.left + constrainBox.width) {
            tmpBox = this.doAnchorXY('br-tr?', box, relativeToBox, constrainBox);
            anchorBox.left = tmpBox.left;
        } else if (anchorBox.left < constrainBox.left) {
            tmpBox = this.doAnchorXY('bl-tl?', box, relativeToBox, constrainBox);
            anchorBox.left = tmpBox.left;
        }

        this.setTop(anchorBox.top);
        this.setLeft(anchorBox.left);
    },

    /**
     * <p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches
     * the passed simple selector.</p>
     * <p>Example:<pre><code>
var owningTabPanel = grid.up('tabpanel');
</code></pre>
     * @param {String} selector Optional. The simple selector to test.
     * @return {Ext.Container} The matching ancestor Container (or <code>undefined</code> if no match was found).
     */
    up: function(selector) {
        var result = this.parent;

        if (selector) {
            for (; result; result = result.parent) {
                if (Ext.ComponentQuery.is(result, selector)) {
                    return result;
                }
            }
        }
        return result;
    },

    updateMasked: function(newMasked) {
        var me          = this,
            element     = me.element,
            maskEl      = me.maskEl,
            loadingMask = me.loadingMask,
            maskText    = me.maskText,
            maskTextCls = me.maskTextCls,
            prefix      = Ext.baseCSSPrefix,
            cls         = [prefix + 'mask'],
            children    = [];

        if (newMasked) {
            if (!maskEl) {
                //create the maskEl in this components element
                me.maskEl = element.createChild({
                    cls: cls.join(' '),
                    children: [
                        {
                            cls: 'x-mask-inner',
                            children: [
                                {
                                    cls: prefix + 'loading-spinner-outer',
                                    html: Ext.LoadingSpinner
                                },
                                {
                                    cls : prefix + 'mask-msg',
                                    html: maskText
                                }
                            ]
                        }
                    ]
                });

                //check if it is a loadingMask
                if (loadingMask) {
                    me.maskEl.addCls(prefix + 'mask-loading');
                }

                //check if there is maskText, if so, add it as a child
                if (maskText) {
                    me.maskEl.addCls(prefix + 'mask-text');
                }
            }

            //add the masked cls to this component
            me.addCls('masked', prefix);

            //show the mask
            me.maskEl.show();
        } else if (maskEl) {
            me.removeCls('masked', prefix);
            maskEl.hide();
        }
    },

    updateMaskText: function(newMaskText) {
        var me = this,
            maskEl      = me.maskEl,
            maskTextCls = me.maskTextCls,
            el;

        if (newMaskText && maskEl) {
            el = maskEl.down('.x-mask-msg');
            el.update(newMaskText);

            maskEl.addCls('x-mask-text');
        } else if (maskEl) {
            maskEl.removeCls('x-mask-text');
        }

        this.maskText = newMaskText;
    },

    updateLoadingMask: function(newLoadingMask) {
        var maskText = this.maskText,
            maskEl = this.maskEl;

        if (newLoadingMask && maskEl) {
            maskEl.addCls('x-mask-loading');
        } else if (maskEl) {
            maskEl.removeCls('x-mask-loading');
        }

        this.loadingMask = newLoadingMask;
    },

    mask: function(msg, msgCls, loadingMask) {
        this.updateLoadingMask(loadingMask);
        this.updateMaskText(msg);
        this.updateMasked(true);
    },

    unmask: function() {
        this.updateMasked(false);
    },

    /**
     * Destroys this Component. If it is currently added to a Container it will first be removed from that Container.
     * All Ext.Element references are also deleted and the Component is de-registered from Ext.ComponentManager
     */
    destroy: function() {
        this.callParent();

        var parent = this.getParent(),
            referenceList = this.referenceList,
            i, ln, reference;

        // Remove this component itself from the container if it's currently contained
        if (parent) {
            parent.remove(this, false);
        }

        // Destroy all element references
        for (i = 0,ln = referenceList.length; i < ln; i++) {
            reference = referenceList[i];
            this[reference].destroy();
            delete this[reference];
        }

        Ext.ComponentManager.unregister(this);
    }

}, function() {
    Ext.LoadingSpinner = '<div class="x-loading-spinner"><span class="x-loading-top"></span><span class="x-loading-right"></span><span class="x-loading-bottom"></span><span class="x-loading-left"></span></div>';

   //<deprecated product=touch since=2.0>
    var emptyFn = Ext.emptyFn;

    this.override({
        constructor: function(config) {
            var name;

            if (config) {
                if (config.enabled) {
                    //<debug warn>
                    Ext.Logger.deprecate("'enabled' config is deprecated, please use 'disabled' config instead", this);
                    //</debug>
                    config.disabled = !config.enabled;
                }

                if (config.scroll || this.config.scroll) {
                    //<debug warn>
                    Ext.Logger.deprecate("'scroll' config is deprecated, please use 'scrollable' config instead", this);
                    //</debug>
                    config.scrollable = config.scroll || this.config.scroll;
                }

                /**
                 * @member Ext.Component
                 * @cfg {String} componentCls CSS class to add to this Component. Deprecated, please use {@link #cls} instead
                 * @deprecated 2.0.0
                 */
                if (config.componentCls) {
                    //<debug warn>
                    Ext.Logger.deprecate("'componentCls' config is deprecated, please use 'cls' config instead", this);
                    //</debug>
                    config.cls = config.componentCls;
                }

                for (name in config) {
                    if (config.hasOwnProperty(name) && name !== 'xtype' && name !== 'xclass' && !this.hasConfig(name)) {
                        this[name] = config[name];
                    }
                }
            }

            this.callParent(arguments);

            if (this.onRender !== emptyFn) {
                //<debug warn>
                Ext.Logger.deprecate("onRender() is deprecated, please put your code inside initialize() instead", this);
                //</debug>
                this.onRender();
            }

            if (this.afterRender !== emptyFn) {
                //<debug warn>
                Ext.Logger.deprecate("afterRender() is deprecated, please put your code inside initialize() instead", this);
                //</debug>
                this.afterRender();
            }

            if (this.initEvents !== emptyFn) {
                //<debug warn>
                Ext.Logger.deprecate("initEvents() is deprecated, please put your code inside initialize() instead", this);
                //</debug>
                this.initEvents();
            }

            if (this.initComponent !== emptyFn) {
                //<debug warn>
                Ext.Logger.deprecate("initComponent() is deprecated, please put your code inside initialize() instead", this);
                //</debug>
                this.initComponent();
            }
        },

        onRender: emptyFn,

        afterRender: emptyFn,

        initEvents: emptyFn,

        initComponent: emptyFn,

        show: function() {
            if (this.renderElement.dom) {
                var containerDom = this.renderElement.dom.parentNode;

                if (containerDom && containerDom.nodeType == 11) {
                    //<debug warn>
                    Ext.Logger.deprecate("Showing a component that currently doesn't have any container, " +
                        "please use Ext.Viewport.add() to add this component to the viewport", this);
                    //</debug>
                    Ext.Viewport.add(this);
                }
            }

            return this.callParent(arguments);
        },

        doSetHidden: function(hidden) {
            this.callParent(arguments);

            this.fireEvent(hidden ? 'hide' : 'show', this);
        }
    });

    /**
     * @member Ext.Component
     * @method update
     * @deprecated 2.0.0
     * Updates the HTML content of the Component. Deprecated, please use {@link #setHtml} instead
     */

    Ext.deprecateClassMembers(this, {
        el: 'element',
        body: 'element',
        outer: 'renderElement',
        ownerCt: 'parent',
        update: 'setHtml'
    });
    //</deprecated>
});

})(Ext.baseCSSPrefix);
