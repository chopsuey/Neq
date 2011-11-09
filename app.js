Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    html: [
                        '<h1>Welcome to Neq</h1>',
                         ].join("")
                }
            ]
        });
    }
});

