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