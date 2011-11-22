Ext.application(
{
    name: 'Sencha',
    launch: function()
    {
        Ext.create("Ext.TabPanel",
        {
            fullscreen: true,
            tabBarPosition: 'bottom',
		 	layout:{align: 'center'},
            items: [
            {
            	title: 'Login',
                iconCls: 'home',
                cls: 'home',
                html: [
                	'<img width="100%" src="neq.png" />',
                    '<h1>Welcome to NEQ Mobile Healthcare Application</h1>',
                    '<h2>at the university hospital of Mannheim.</h2>',
                    '<h2>Please login to access further data.</h2>',
                ].join(""),
				items: [
				{
            		xtype: 'textfield',
            		name : 'account',
            		label: 'Account'
        		},
        		{
            		xtype: 'passwordfield',
            		name : 'password',
            		label: 'Password'
        		},
				{
        			xtype: 'button',
        			margin: 5,
					ui: 'normal', text: 'Login',
					width: 100
				}	
				]
			},
			{
				xtype: 'list',
				title: 'Favourites',
                iconCls: 'star',
				itemTpl: '{title}',
                store:
                {
                	fields: ['title', 'url'],
                    data: [
                    	{title: 'Patients', url: 'patients.html'},
                        {title: 'Doctors', url: 'doctors.html'},
                        {title: 'Hospitals', url: 'hospitals.html'},
                        {title: 'Diagnosis', url: 'diagnosis.html'}
                    ]
                 }
             }
             ]
        }).setActiveItem(0);
    }
});

