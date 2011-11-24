Ext.data.JsonP.Ext_ClassManager({"tagname":"class","singleton":true,"mixins":[],"uses":[],"subclasses":[],"aliases":{},"component":false,"protected":false,"meta":{"author":["Jacky Nguyen <jacky@sencha.com>"],"docauthor":["Jacky Nguyen <jacky@sencha.com>"]},"members":{"css_var":[],"event":[],"css_mixin":[],"method":[{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"get","id":"method-get","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getAliasesByName","id":"method-getAliasesByName","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getByAlias","id":"method-getByAlias","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getClass","id":"method-getClass","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getDisplayName","id":"method-getDisplayName","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getName","id":"method-getName","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getNameByAlias","id":"method-getNameByAlias","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getNameByAlternate","id":"method-getNameByAlternate","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"getNamesByExpression","id":"method-getNamesByExpression","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"instantiate","id":"method-instantiate","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"instantiateByAlias","id":"method-instantiateByAlias","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"isCreated","id":"method-isCreated","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"set","id":"method-set","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"setAlias","id":"method-setAlias","deprecated":null},{"tagname":"method","template":false,"required":null,"owner":"Ext.ClassManager","protected":false,"static":false,"name":"setNamespace","id":"method-setNamespace","deprecated":null}],"property":[],"cfg":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ClassManager.html#Ext-ClassManager' target='_blank'>ClassManager.js</a></div></pre><div class='doc-contents'><p>Ext.ClassManager manages all classes and handles mapping from string class name to\nactual class objects throughout the whole framework. It is not generally accessed directly, rather through\nthese convenient shorthands:</p>\n\n<ul>\n<li><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></li>\n<li><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></li>\n<li><a href=\"#!/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a></li>\n<li><a href=\"#!/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a></li>\n<li><a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-get' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-get' class='name expandable'>get</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Retrieve a class by its name. ...</div><div class='long'><p>Retrieve a class by its name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>class</p>\n</div></li></ul></div></div></div><div id='method-getAliasesByName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getAliasesByName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getAliasesByName' class='name expandable'>getAliasesByName</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Get the aliases of a class by the class name ...</div><div class='long'><p>Get the aliases of a class by the class name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>aliases</p>\n</div></li></ul></div></div></div><div id='method-getByAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getByAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getByAlias' class='name expandable'>getByAlias</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> alias</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Get a reference to the class by its alias. ...</div><div class='long'><p>Get a reference to the class by its alias.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>class</p>\n</div></li></ul></div></div></div><div id='method-getClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getClass' class='name expandable'>getClass</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> object</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. ...</div><div class='long'><p>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. This is usually invoked by the shorthand <a href=\"#!/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a></p>\n\n<pre><code>var component = new Ext.Component();\n\nExt.ClassManager.getClass(component); // returns <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>class</p>\n</div></li></ul></div></div></div><div id='method-getDisplayName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getDisplayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getDisplayName' class='name expandable'>getDisplayName</a>( <span class='pre'>Mixed object</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Mixed<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getName' class='name expandable'>getName</a>( <span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> object</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get the name of the class by its reference or its instance;\nusually invoked by the shorthand Ext.getClassName\n\nExt.Cl...</div><div class='long'><p>Get the name of the class by its reference or its instance;\nusually invoked by the shorthand <a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></p>\n\n<pre><code>Ext.ClassManager.getName(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='method-getNameByAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getNameByAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getNameByAlias' class='name expandable'>getNameByAlias</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> alias</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get the name of a class by its alias. ...</div><div class='long'><p>Get the name of a class by its alias.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='method-getNameByAlternate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getNameByAlternate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getNameByAlternate' class='name expandable'>getNameByAlternate</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> alternate</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get the name of a class by its alternate name. ...</div><div class='long'><p>Get the name of a class by its alternate name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alternate</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='method-getNamesByExpression' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getNamesByExpression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getNamesByExpression' class='name expandable'>getNamesByExpression</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> expression</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Converts a string expression to an array of matching class names. ...</div><div class='long'><p>Converts a string expression to an array of matching class names. An expression can either refers to class aliases\nor class names. Expressions support wildcards:</p>\n\n<pre><code> // returns ['Ext.window.Window']\nvar window = Ext.ClassManager.getNamesByExpression('widget.window');\n\n// returns ['widget.panel', 'widget.window', ...]\nvar allWidgets = Ext.ClassManager.getNamesByExpression('widget.*');\n\n// returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]\nvar allData = Ext.ClassManager.getNamesByExpression('Ext.data.*');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>classNames</p>\n</div></li></ul></div></div></div><div id='method-instantiate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-instantiate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-instantiate' class='name expandable'>instantiate</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, Mixed args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Instantiate a class by either full name, alias or alternate name; usually invoked by the convenient\nshorthand Ext.cre...</div><div class='long'><p>Instantiate a class by either full name, alias or alternate name; usually invoked by the convenient\nshorthand <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></p>\n\n<p>If <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#!/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<p>For example, all these three lines return the same result:</p>\n\n<pre><code>// alias\nvar window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });\n\n// alternate name\nvar window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });\n\n// full class name\nvar window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Mixed<div class='sub-desc'><p>,... Additional arguments after the name will be passed to the class' constructor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>instance</p>\n</div></li></ul></div></div></div><div id='method-instantiateByAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-instantiateByAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-instantiateByAlias' class='name expandable'>instantiateByAlias</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> alias, Mixed args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Instantiate a class by its alias; usually invoked by the convenient shorthand Ext.createByAlias\nIf Ext.Loader is enab...</div><div class='long'><p>Instantiate a class by its alias; usually invoked by the convenient shorthand <a href=\"#!/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>\nIf <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#!/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Mixed<div class='sub-desc'><p>,... Additional arguments after the alias will be passed to the\nclass constructor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>instance</p>\n</div></li></ul></div></div></div><div id='method-isCreated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-isCreated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-isCreated' class='name expandable'>isCreated</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> className</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Checks if a class has already been created. ...</div><div class='long'><p>Checks if a class has already been created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>exist</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-set' class='name expandable'>set</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> value</span> ) : <a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a></div><div class='description'><div class='short'>Sets a name reference to a class. ...</div><div class='long'><p>Sets a name reference to a class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-setAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-setAlias' class='name expandable'>setAlias</a>( <span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> cls, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> alias</span> )</div><div class='description'><div class='short'>Register the alias for a class. ...</div><div class='long'><p>Register the alias for a class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>a reference to a class or a className</p>\n</div></li><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Alias to use when referring to this class</p>\n</div></li></ul></div></div></div><div id='method-setNamespace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-setNamespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-setNamespace' class='name expandable'>setNamespace</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, Mixed value</span> )</div><div class='description'><div class='short'>Creates a namespace and assign the value to the created object\n\nExt.ClassManager.setNamespace('MyCompany.pkg.Example'...</div><div class='long'><p>Creates a namespace and assign the <code>value</code> to the created object</p>\n\n<pre><code>Ext.ClassManager.setNamespace('MyCompany.pkg.Example', someObject);\n\nalert(MyCompany.pkg.Example === someObject); // alerts true\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"static":false,"private":false,"superclasses":[],"name":"Ext.ClassManager","allMixins":[],"extends":null,"requires":[],"code_type":"nop","deprecated":null,"inheritable":false,"id":"class-Ext.ClassManager","statics":{"css_var":[],"event":[],"css_mixin":[],"method":[],"property":[],"cfg":[]},"alternateClassNames":[],"inheritdoc":null,"files":[{"href":"ClassManager.html#Ext-ClassManager","filename":"ClassManager.js"}]});