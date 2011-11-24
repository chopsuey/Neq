Ext.define('Neq.store.Login', {
	extend: 'Ext.data.Store',
	requires: 'Neq.model.User',
	model: 'Neq.model.User',
	
	// overriding the model's default proxy
	proxy: {
		type: 'ajax',
		url: 'data/user.json',
		reader: {
			type: 'json',
			root: 'results'
		}
	}
	

});