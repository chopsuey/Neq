// User Model
Ext.define('Neq.model.user.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id',		type: 'int'		},
        { name: 'name',		type: 'string'	},
        { name: 'password',	type: 'string'	},
        { name: 'rights',	type: 'string'	}
    ],
    
    proxy: {
    	type:	'ajax',
    	url:	'data/user/user.json',

    	reader: {
    		type: 'json',
    		root: 'results'
    	}
    }
});