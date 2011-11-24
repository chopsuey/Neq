Ext.define('Neq.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    
    config: {
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        html: [
            '<img src="images/ci/neq.png" />',
            '<h1>Welcome to NEQ Mobile Healthcare Application!</h1>',
            "<p>Please login for accessing further Data.</p>",
            '<br /><h2>NEQ MHA (0.0.1pr1)</h2>'
        ].join("")
    }
});