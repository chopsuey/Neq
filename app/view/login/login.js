Ext.define('Neq.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginpage',
    id: 'loginForm',
    alias: 'widget.loginform',
    
    config: {
        title: 'Login',
        iconCls: 'user',
        
        layout: {
            type: 'vbox'
        },
        
        items: [
            {
            	html: [
                	'<img src="images/ci/neq.png" height="60px" width="150px" />',
                	'<h1>Welcome to NEQ Mobile Healthcare Application!</h1>',
                	"<p>Please login for accessing further Data.</p>",
                	'<br /><h4>NEQ MHA (0.0.1pr1)</h4>'
            	].join("")
            },
            {   
                xtype: 'fieldset',
                title: 'Login',
                width: 400,
                instructions: 'Verify your Access',
                
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        name: 'password'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Server',
                        name: 'server'
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'confirm',
                text: 'Login',
                width: 400,
                action: 'submitLogin'
            }
        ]
    }
});

/*
Ext.define('MyApp.view.ui.NeqViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: 'Login',
                    items: [
                        {
                            xtype: 'image',
                            cls: 'align: center;',
                            height: 120,
                            width: 120,
                            src: 'http://www.sencha.com/img/sencha-large.png',
                            anchor: '20%'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'Display Field',
                            fieldLabel: 'Name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'Display Field',
                            fieldLabel: 'Password',
                            anchor: '100%'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Server',
                            anchor: '100%'
                        },
                        {
                            xtype: 'button',
                            text: 'Login',
                            anchor: '20%'
                        },
                        {
                            xtype: 'button',
                            text: 'Edit Serverlist',
                            anchor: '20%'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'datefield',
                            fieldLabel: '',
                            anchor: '20%',
                            dock: 'right'
                        },
                        {
                            xtype: 'timefield',
                            fieldLabel: '',
                            anchor: '100%',
                            dock: 'right'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
*/