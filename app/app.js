Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
//----------------------------------------------------------------------------------------------------------------------------------------------
// Config options

    appFolder: 'app',						// root directory of mvc structure and namespace

	autoCreateViewport: true,				// auto load and instantiate AppName.view.Viewport class before firing launch()

/*
	Note that AppName.view.Viewport should not extend the Ext.viewport.Viewport class, since that is a singleton
	class that always exists on the page. Instead you usually want to extend Container or Panel and set the configuration
	option fullscreen to true. This causes your AppName.view.Viewport to be automatically added as a child to the singleton Viewport.
*/

	// bubbleEvents: 	String/Sting [],	// The event name to bubble, or an Array of event names (defaults to null)

	// defaultUrl:		String,				// When the app is first loaded, this url will be redirected to (defaults to undefined)

	// enableQuickTips: boolean,			// True to automatically set up Ext.tip.QuickTip support (defaults to true)

	// id:				String,				// The id of this controller. You can use this id when dispatching.

	// listeners:		Object,				// A config object containing one or more event handlers to be added to this object during
											// initialization. This should be a valid listeners config object as specified in the addListener
											// example for attaching multiple handlers at once. (defaults to null)

	name: 'Neq',							// Name of the application; This will also be the namespace for your views, controllers models and stores.
											// Don't use spaces or special characters in the name.

	// scope: 			Object,				// The scope to execute the launch function in. Defaults to the Application instance.
    
    controllers:	['login.Login'],
    
//----------------------------------------------------------------------------------------------------------------------------------------------
// Properties
    
    // callOverridden:	Object,				// Call the original method that was previously overridden with override
    										// DEPRECATED --> Use Ext.base.callParent(Array/Arguments args): Object instead

	// self:			Ext.Class			// Get the reference to the current class from which this object was instantiated.
											// Unlike statics, this.self is scope-dependent and it's meant to be used for dynamic inheritance.
											// See statics for a detailed comparison

    launch: function() {					// Called automatically when the page has completely loaded. This is an empty function that should be
    										// overridden by each application that needs to take action on page load. When this function gets called
    										// all the required controllers are already instantiated and initialized and can be referenced. If you have
    										// set autoCreateViewport to true, the viewport has also been instantiated and rendered at this point.
    										// In this method you can bind listeners to controllers and do things like loading stores and of course any
    										// application wide setup that requires all controllers to be initialized.

	}
	
//----------------------------------------------------------------------------------------------------------------------------------------------
// Methods

	// new Ext.app.Application([Object config]):Object // Creates new Application - config: Object (optional) returns object
	
	// addListener(string eventName, Function fn, [Object scope], [Object options]) // appends an event handler to this object
	
	// callParent()
	// control()
	// enableBubble()
	// fireEvent()
	// getController()
	// getId()
	// getInitialConfig()
	// getModel()
	// getStore()
	// getView()
	// hasListener()
	// init()
	// initConfig()
	// launch()
	// relayEvents()
	// removeListener()
	// resumeEvents()
	// statics()
	// suspendEvents()
	
//----------------------------------------------------------------------------------------------------------------------------------------------
// Static Methods	

	// addMember()
	// addStatics()
	// create()
	// createAlias()
	// getName()
	// override()
	
	
	
	
	
	
	
	// further code in Application
	
});