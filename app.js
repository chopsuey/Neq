Ext.application({
    name: 'Sencha',
    launch: function() {
        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            tabBarPosition: 'bottom',
		 layout: {
        align: 'center'
    },
            items: [
                {
                    title: 'Login',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<img width="100%" src="neq.png" />',
                        '<h1>Login</h1>'
                    ].join(""),
		items: [
{
            xtype: 'textfield',
            name : 'name',
            label: 'Name'
        },
        {
            xtype: 'emailfield',
            name : 'email',
            label: 'Email'
        },
        {
            xtype: 'passwordfield',
            name : 'password',
            label: 'Password'
        },
	{
        xtype: 'button',
        margin: 5,
	ui: 'normal', text: 'Submit',
	width: 100
	}	
]
},
	{
			xtype: 'list',
			title: 'Favourites',
                    iconCls: 'star',

			itemTpl: '{title}',
                    store: {
                        fields: ['title', 'url'],
                        data: [
                            {title: 'Patients', url: ''},
                            {title: 'Doctors', url: ''},
                            {title: 'Hospitals', url: ''},
                            {title: 'Diagnosis', url: ''}
                        ]
                    }
                }

            ]
        }).setActiveItem(0);
    }
});

