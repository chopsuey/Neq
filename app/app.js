Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Neq',
    
    controllers: ['Main'],
    
    launch: function() {
        Ext.create('Neq.view.Viewport');
    }
});