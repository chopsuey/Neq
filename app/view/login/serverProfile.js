Ext.define('Neq.view.login.ServerProfile', {
    extend: 'Ext.form.Panel',
    xtype: 'serverProfile',
    id: 'serverProfile',
    alias: 'widget.serverProfile',
    
    config: {
        title: 'Server Profil',
        iconCls: 'user',
        cls: 'Login',
        
//        fullscreen: true,
        layout: 'vbox',
        fiullscreen: true,
        
        items:
        [
            {
                dock: 'left',
            	xtype: 'list',
				width: 200,

              	store:
               	{
       	        	fields: ['name'],
       			    data:
               		[
               			{name: 'NEQ Healthcare Theilemann'},
               			{name: 'Uni Mannheim'}
           	 		]
           		}
       		},
       		{
       			itemConfig : { tpl : '{name}' }
       		}
       		/*,
            {   
                xtype: 'panel',
                flex: 1,
                width: 400,  
                items:
                [
                	{
                		xtype: 'fieldset',
                		title: 'Server Profile',
                		items:
                		[
                    		{
                        		xtype: 'textfield',
                        		label: 'Profile',
                        		name: 'profile'
                    		},
                    		{
                       			xtype: 'textfield',
                        		label: 'Host',
                        		name: 'host'
                    		},
                    		{
                        		xtype: 'textfield',
                        		label: 'Database',
                        		name: 'database'
                    		},
                    		{
                        		xtype: 'textfield',
                        		label: 'User name',
                        		name: 'server'
                    		}
                		]
                	}
            	]
            },
            {
                xtype: 'panel',
                flex: 2,
                items:
                [
                	{
                		xtype: 'button',
		                ui: 'confirm',
        		        text: 'Save',
                		action: 'saveServerProfile'
                	}
                ]
            }*/
        ]
    }
});