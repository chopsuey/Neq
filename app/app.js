Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Neq',
    
    controllers: ['Main'],
    
    autoCreateViewport: true,
    
    launch: function() {
        //Ext.create('Neq.view.Viewport');
    }
});