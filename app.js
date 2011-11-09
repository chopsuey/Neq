Ext.application({
    name: 'NEQ Healthcare',

    launch: function() {
        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    html: 'Welcome'
                }
            ]
        });
    }
});
