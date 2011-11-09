Ext.data.JsonP.Ext_data_association_BelongsTo({"requires":[],"files":[{"href":"BelongsTo.html#Ext-data-association-BelongsTo","html_filename":"BelongsTo.html","linenr":1,"filename":"/Users/nickpoulden/Projects/sencha/SDK/touch/../platform/src/data/association/BelongsTo.js"}],"mixedInto":[],"meta":[],"static":false,"allMixins":[],"superclasses":["Ext.data.association.Association","Ext.data.association.BelongsTo"],"tagname":"class","xtypes":{"association":["belongsto"]},"alias":null,"extends":"Ext.data.association.Association","uses":[],"code_type":"ext_define","statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.BelongsToAssociation</div><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='docClass'>Ext.data.association.Association</a><div class='subclass '><strong>Ext.data.association.BelongsTo</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/BelongsTo.html#Ext-data-association-BelongsTo' target='_blank'>BelongsTo.js</a></div></pre><div class='doc-contents'><p>Represents a many to one association with another model. The owner model is expected to have\na foreign key which references the primary key of the associated model:</p>\n\n<pre><code>Ext.define('Category', {\n    extend: 'Ext.data.Model',\n    fields: [\n        { name: 'id',   type: 'int' },\n        { name: 'name', type: 'string' }\n    ]\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: [\n        { name: 'id',          type: 'int' },\n        { name: 'category_id', type: 'int' },\n        { name: 'name',        type: 'string' }\n    ],\n    // we can use the belongsTo shortcut on the model to create a belongsTo association\n    associations: { type: 'belongsTo', model: 'Category' }\n});\n</code></pre>\n\n<p>In the example above we have created models for Products and Categories, and linked them together\nby saying that each Product belongs to a Category. This automatically links each Product to a Category\nbased on the Product's category_id, and provides new functions on the Product model:</p>\n\n<h2>Generated getter function</h2>\n\n<p>The first function that is added to the owner model is a getter function:</p>\n\n<pre><code>var product = new Product({\n    id: 100,\n    category_id: 20,\n    name: 'Sneakers'\n});\n\nproduct.getCategory(function(category, operation) {\n    // do something with the category object\n    alert(category.get('id')); // alerts 20\n}, this);\n</code></pre>\n\n<p>The getCategory function was created on the Product model when we defined the association. This uses the\nCategory's configured <a href=\"#!/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">proxy</a> to load the Category asynchronously, calling the provided\ncallback when it has loaded.</p>\n\n<p>The new getCategory function will also accept an object containing success, failure and callback properties\n- callback will always be called, success will only be called if the associated model was loaded successfully\nand failure will only be called if the associatied model could not be loaded:</p>\n\n<pre><code>product.getCategory({\n    reload: true, // force a reload if the owner model is already cached\n    callback: function(category, operation) {}, // a function that will always be called\n    success : function(category, operation) {}, // a function that will only be called if the load succeeded\n    failure : function(category, operation) {}, // a function that will only be called if the load did not succeed\n    scope   : this // optionally pass in a scope object to execute the callbacks in\n});\n</code></pre>\n\n<p>In each case above the callbacks are called with two arguments - the associated model instance and the\n<a href=\"#!/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object that was executed to load that instance. The Operation object is\nuseful when the instance could not be loaded.</p>\n\n<p>Once the getter has been called on the model, it will be cached if the getter is called a second time. To\nforce the model to reload, specify reload: true in the options object.</p>\n\n<h2>Generated setter function</h2>\n\n<p>The second generated function sets the associated model instance - if only a single argument is passed to\nthe setter then the following two calls are identical:</p>\n\n<pre><code>// this call...\nproduct.setCategory(10);\n\n// is equivalent to this call:\nproduct.set('category_id', 10);\n</code></pre>\n\n<p>An instance of the owner model can also be passed as a parameter.</p>\n\n<p>If we pass in a second argument, the model will be automatically saved and the second argument passed to\nthe owner model's <a href=\"#!/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">save</a> method:</p>\n\n<pre><code>product.setCategory(10, function(product, operation) {\n    // the product has been saved\n    alert(product.get('category_id')); //now alerts 10\n});\n\n//alternative syntax:\nproduct.setCategory(10, {\n    callback: function(product, operation), // a function that will always be called\n    success : function(product, operation), // a function that will only be called if the load succeeded\n    failure : function(product, operation), // a function that will only be called if the load did not succeed\n    scope   : this //optionally pass in a scope object to execute the callbacks in\n})\n</code></pre>\n\n<h2>Customisation</h2>\n\n<p>Associations reflect on the models they are linking to automatically set up properties such as the\n<a href=\"#!/api/Ext.data.association.BelongsTo-cfg-primaryKey\" rel=\"Ext.data.association.BelongsTo-cfg-primaryKey\" class=\"docClass\">primaryKey</a> and <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-foreignKey\" rel=\"Ext.data.association.BelongsTo-cfg-foreignKey\" class=\"docClass\">foreignKey</a>. These can alternatively be specified:</p>\n\n<pre><code>Ext.define('Product', {\n    fields: [...],\n\n    associations: [\n        { type: 'belongsTo', model: 'Category', primaryKey: 'unique_id', foreignKey: 'cat_id' }\n    ]\n});\n</code></pre>\n\n<p>Here we replaced the default primary key (defaults to 'id') and foreign key (calculated as 'category_id')\nwith our own settings. Usually this will not be needed.</p>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-associatedModel' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-cfg-associatedModel' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-cfg-associatedModel' class='name expandable'>associatedModel</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string name of the model that is being associated with. ...</div><div class='long'><p>The string name of the model that is being associated with. Required</p>\n</div></div></div><div id='cfg-associationKey' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-cfg-associationKey' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-cfg-associationKey' class='name expandable'>associationKey</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the property in the data to read the association from. ...</div><div class='long'><p>The name of the property in the data to read the association from.\nDefaults to the name of the associated model.</p>\n</div></div></div><div id='cfg-foreignKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.BelongsTo' rel='Ext.data.association.BelongsTo' class='definedIn docClass'>Ext.data.association.BelongsTo</a><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-foreignKey' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-foreignKey' class='name expandable'>foreignKey</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the foreign key on the owner model that links it to the associated\nmodel. ...</div><div class='long'><p>The name of the foreign key on the owner model that links it to the associated\nmodel. Defaults to the lowercased name of the associated model plus \"_id\", e.g. an association with a\nmodel called Product would set up a product_id foreign key.</p>\n\n<pre><code>Ext.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'date'],\n    hasMany: 'Product'\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'order_id'], // refers to the id of the order that this product belongs to\n    belongsTo: 'Group'\n});\nvar product = new Product({\n    id: 1,\n    name: 'Product 1',\n    order_id: 22\n}, 1);\nproduct.getOrder(); // Will make a call to the server asking for order_id 22\n</code></pre>\n</div></div></div><div id='cfg-getterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.BelongsTo' rel='Ext.data.association.BelongsTo' class='definedIn docClass'>Ext.data.association.BelongsTo</a><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-getterName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-getterName' class='name expandable'>getterName</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the getter function that will be added to the local model's prototype. ...</div><div class='long'><p>The name of the getter function that will be added to the local model's prototype.\nDefaults to 'get' + the name of the foreign model, e.g. getCategory</p>\n</div></div></div><div id='cfg-ownerModel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-cfg-ownerModel' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-cfg-ownerModel' class='name expandable'>ownerModel</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string name of the model that owns the association. ...</div><div class='long'><p>The string name of the model that owns the association. Required</p>\n</div></div></div><div id='cfg-primaryKey' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-cfg-primaryKey' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-cfg-primaryKey' class='name expandable'>primaryKey</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the primary key on the associated model. ...</div><div class='long'><p>The name of the primary key on the associated model. Defaults to 'id'.\nIn general this will be the <a href=\"#!/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">Ext.data.Model.idProperty</a> of the Model.</p>\n<p>Defaults to: <code>&quot;id&quot;</code></p></div></div></div><div id='cfg-reader' class='member  inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-cfg-reader' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-cfg-reader' class='name not-expandable'>reader</a><span> : <a href=\"#!/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a></span></div><div class='description'><div class='short'><p>A special reader to read associated data</p>\n</div><div class='long'><p>A special reader to read associated data</p>\n</div></div></div><div id='cfg-setterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.BelongsTo' rel='Ext.data.association.BelongsTo' class='definedIn docClass'>Ext.data.association.BelongsTo</a><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-setterName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-setterName' class='name expandable'>setterName</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the setter function that will be added to the local model's prototype. ...</div><div class='long'><p>The name of the setter function that will be added to the local model's prototype.\nDefaults to 'set' + the name of the foreign model, e.g. setCategory</p>\n</div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.BelongsTo' rel='Ext.data.association.BelongsTo' class='definedIn docClass'>Ext.data.association.BelongsTo</a><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-type' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type configuration can be used when creating associations using a configuration object. ...</div><div class='long'><p>The type configuration can be used when creating associations using a configuration object.\nUse 'belongsTo' to create a BelongsTo association.</p>\n\n<pre><code>associations: [{\n    type: 'belongsTo',\n    model: 'User'\n}]\n</code></pre>\n</div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-associatedName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-property-associatedName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-property-associatedName' class='name expandable'>associatedName</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the model is on the other end of the association (e.g. ...</div><div class='long'><p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n</div></div></div><div id='property-ownerName' class='member  inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-property-ownerName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-property-ownerName' class='name not-expandable'>ownerName</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The name of the model that 'owns' the association</p>\n</div><div class='long'><p>The name of the model that 'owns' the association</p>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-method-constructor' target='_blank' class='viewSource'>view source</a></div><strong class='constructor-signature'>new</strong><a href='#!/api/Ext.data.association.Association-method-constructor' class='name expandable'>Ext.data.association.BelongsTo</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Creates the Association object. ...</div><div class='long'><p>Creates the Association object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Config object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getReader' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.association.Association' rel='Ext.data.association.Association' class='definedIn docClass'>Ext.data.association.Association</a><br/><a href='source/Association.html#Ext-data-association-Association-method-getReader' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.association.Association-method-getReader' class='name expandable'>getReader</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a></div><div class='description'><div class='short'>Get a specialized reader for reading associated data ...</div><div class='long'><p>Get a specialized reader for reading associated data</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a></span><div class='sub-desc'><p>The reader, null if not supplied</p>\n</div></li></ul></div></div></div></div></div></div></div>","protected":false,"singleton":false,"members":{"property":[{"template":null,"static":false,"owner":"Ext.data.association.Association","tagname":"property","protected":false,"name":"associatedName","id":"property-associatedName","deprecated":null,"required":null},{"template":null,"static":false,"owner":"Ext.data.association.Association","tagname":"property","protected":false,"name":"ownerName","id":"property-ownerName","deprecated":null,"required":null}],"cfg":[{"template":null,"static":false,"owner":"Ext.data.association.Association","tagname":"cfg","protected":false,"name":"associatedModel","id":"cfg-associatedModel","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.Association","tagname":"cfg","protected":false,"name":"associationKey","id":"cfg-associationKey","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.BelongsTo","tagname":"cfg","protected":false,"name":"foreignKey","id":"cfg-foreignKey","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.BelongsTo","tagname":"cfg","protected":false,"name":"getterName","id":"cfg-getterName","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.Association","tagname":"cfg","protected":false,"name":"ownerModel","id":"cfg-ownerModel","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.Association","tagname":"cfg","protected":false,"name":"primaryKey","id":"cfg-primaryKey","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.Association","tagname":"cfg","protected":false,"name":"reader","id":"cfg-reader","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.BelongsTo","tagname":"cfg","protected":false,"name":"setterName","id":"cfg-setterName","deprecated":null,"required":false},{"template":null,"static":false,"owner":"Ext.data.association.BelongsTo","tagname":"cfg","protected":false,"name":"type","id":"cfg-type","deprecated":null,"required":false}],"method":[{"template":false,"static":false,"owner":"Ext.data.association.Association","tagname":"method","protected":false,"name":"constructor","id":"method-constructor","deprecated":null,"required":null},{"template":false,"static":false,"owner":"Ext.data.association.Association","tagname":"method","protected":false,"name":"getReader","id":"method-getReader","deprecated":null,"required":null}],"css_var":[],"event":[],"css_mixin":[]},"subclasses":[],"inheritable":false,"private":false,"name":"Ext.data.association.BelongsTo","mixins":[],"deprecated":null,"id":"class-Ext.data.association.BelongsTo","component":false,"alternateClassNames":["Ext.data.BelongsToAssociation"]});