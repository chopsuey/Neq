// User Model
Ext.define('Neq.model.server.Server', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'sid',			type: 'int'		},
        { name: 'profilename',	type: 'string'	},
        { name: 'hosturl',		type: 'string'	},
        { name: 'port',			type: 'int'		},
        { name: 'database',		type: 'string'	}
    ],
    
    proxy: {
    	type:	'ajax',
    	url:	'data/server/server.json',
    	
    	reader: {
    		type: 'json',
    		root: 'results'
    	}
    }
});