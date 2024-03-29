# Using the data package in Sencha Touch 2

The data package is responsible for loading and saving all data in a Sencha Touch app. Most of what you do with the data package has to do with models, stores, and proxies:

* **Model:** A model represents an entity your app cares about. User, Contact, Address, and Product could all be models. At its simplest, a model is just a collection of fields and their data, but they can do a lot more.
* **Store:** A store is just a collection of model instances. Mostly it's just a glorified array, but it also provides capabilities like sorting, filtering, and grouping, as well as firing useful events.
* **Proxy:** Proxies are responsible for all of the actual loading and saving of data. Usually you'll create an {@link Ext.data.proxy.Ajax AJAX proxy} which will fetch data from your server and populate it into a store.

### Models and stores

At its simplest a Model is just a set of fields and their data. We’re going to look at four of the principal parts of `Ext.data.Model` — {@link Ext.data.Field Fields}, {@link Ext.data.proxy.Proxy Proxies}, {@link Ext.data.Association Associations} and {@link Ext.data.validations Validations}.

{@img model.png}

Let's look at how we create a model now:

    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ]
    });

Models are typically used with a store, which is basically a collection of model instances. Setting up a store and loading its data is simple:

    Ext.create('Ext.data.Store', {
        model: 'User',
        proxy: {
            type: 'ajax',
            url : 'users.json',
            reader: 'json'
        },
        autoLoad: true
    });

We configured our store to use an {@link Ext.data.proxy.Ajax Ajax Proxy}, providing the name of the URL from which to load data the {@link Ext.data.reader.Reader Reader} used to decode the data. In this case our server is returning JSON, so we've set up a {@link Ext.data.reader.Json Json Reader} to read the response.
The store auto-loads a set of User model instances from the URL `users.json`.  The `users.json` URL should return a JSON string that looks something like this:

    {
        success: true,
        users: [
            { id: 1, name: 'Ed' },
            { id: 2, name: 'Tommy' }
        ]
    }

For a live demo, see the [Simple Store](guides/data/examples/simple_store/index.html) example.

### Inline data

Stores can also load data inline. Internally, `Store` converts each of the objects we pass in as {@link Ext.data.Store#data data} into {@link Ext.data.Model Model} instances:

    Ext.create('Ext.data.Store', {
        model: 'User',
        data: [
            { firstName: 'Ed',    lastName: 'Spencer' },
            { firstName: 'Tommy', lastName: 'Maintz' },
            { firstName: 'Aaron', lastName: 'Conran' },
            { firstName: 'Jamie', lastName: 'Avins' }
        ]
    });

[Inline Data example](guides/data/examples/inline_data/index.html)

### Sorting and Grouping

Stores are able to perform sorting, filtering, and grouping locally, as well as to support remote sorting, filtering, and grouping:

    Ext.create('Ext.data.Store', {
        model: 'User',

        sorters: ['name', 'id'],
        filters: {
            property: 'name',
            value   : 'Ed'
        },
        groupField: 'age',
        groupDir: 'DESC'
    });

In the store we just created, the data will be sorted first by name then id; it will be filtered to only include users with the name `Ed`, and the data will be grouped by age in descending order. It's easy to change the sorting, filtering, and grouping at any time through the Store API.  For a live demo, see the [Sorting Grouping Filtering Store](guides/data/examples/sorting_grouping_filtering_store/index.html) example.

### Proxies

Proxies are used by stores to handle the loading and saving of model data. There are two types of proxy: client and server. Examples of client proxies include Memory for storing data in the browser's memory and Local Storage which uses the HTML 5 local storage feature when available. Server proxies handle the marshaling of data to some remote server and examples include Ajax, JsonP, and Rest.

Proxies can be defined directly on a model, like so:

    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: ['id', 'name', 'age', 'gender'],
        proxy: {
            type: 'rest',
            url : 'data/users',
            reader: {
                type: 'json',
                root: 'users'
            }
        }
    });

    // Uses the User Model's Proxy
    Ext.create('Ext.data.Store', {
        model: 'User'
    });

This helps in two ways. First, it's likely that every store that uses the User model will need to load its data the same way, so we avoid having to duplicate the proxy definition for each store. Second, we can now load and save model data without a store:

    // Gives us a reference to the User class
    var User = Ext.ModelMgr.getModel('User');

    var ed = Ext.create('User', {
        name: 'Ed Spencer',
        age : 25
    });

    // We can save Ed directly without having to add him to a Store first because we
    // configured a RestProxy this will automatically send a POST request to the url /users
    ed.save({
        success: function(ed) {
            console.log("Saved Ed! His ID is "+ ed.getId());
        }
    });

    // Load User 1 and do something with it (performs a GET request to /users/1)
    User.load(1, {
        success: function(user) {
            console.log("Loaded user 1: " + user.get('name'));
        }
    });

There are also proxies that take advantage of the new capabilities of HTML5 - [LocalStorage](#/api/Ext.data.proxy.LocalStorage) and [SessionStorage](#/api/Ext.data.proxy.SessionStorage). Although older browsers don't support these new HTML5 APIs, they're so useful that a lot of applications will benefit enormously by using them.

[Example of a Model that uses a Proxy directly](guides/data/examples/model_with_proxy/index.html)

### Associations
Models can be linked together with the Associations API. Most applications deal with many different models, and the models are almost always related. A blog authoring application might have models for User, Post, and Comment. Each user creates posts and each post receives comments. We can express those relationships like so:

    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: ['id', 'name'],
        proxy: {
            type: 'rest',
            url : 'data/users',
            reader: {
                type: 'json',
                root: 'users'
            }
        },

        hasMany: 'Post' // shorthand for { model: 'Post', name: 'posts' }
    });

    Ext.define('Post', {
        extend: 'Ext.data.Model',
        fields: ['id', 'user_id', 'title', 'body'],

        proxy: {
            type: 'rest',
            url : 'data/posts',
            reader: {
                type: 'json',
                root: 'posts'
            }
        },
        belongsTo: 'User',
        hasMany: { model: 'Comment', name: 'comments' }
    });

    Ext.define('Comment', {
        extend: 'Ext.data.Model',
        fields: ['id', 'post_id', 'name', 'message'],

        belongsTo: 'Post'
    });

It's easy to express rich relationships between different models in your application. Each model can have any number of associations with other models and your models can be defined in any order. Once we have a model instance we can easily traverse the associated data. For example, to log all comments made on each post for a given user, do something like this:

    // Loads User with ID 1 and related posts and comments using User's Proxy
    User.load(1, {
        success: function(user) {
            console.log("User: " + user.get('name'));

            user.posts().each(function(post) {
                console.log("Comments for post: " + post.get('title'));

                post.comments().each(function(comment) {
                    console.log(comment.get('message'));
                });
            });
        }
    });

Each of the hasMany associations we created above adds a new function to the Model. We declared that each User model hasMany Posts, which added the `user.posts()` function we used in the snippet above. Calling `user.posts()` returns a {@link Ext.data.Store Store} configured with the Post model. In turn, the Post model gets a `comments()` function because of the hasMany Comments association we set up.


Associations aren't just helpful for loading data, they're useful for creating new records too:

    user.posts().add({
        title: 'Ext JS 4.0 MVC Architecture',
        body: 'It\'s a great Idea to structure your Ext JS Applications using the built in MVC Architecture...'
    });

    user.posts().sync();

Here we instantiate a new Post, which is automatically given the User id in the user_id field. Calling `sync()` saves the new Post via its configured proxy. This, again, is an asynchronous operation to which you can pass a callback if you want to be notified when the operation completed.

The belongsTo association also generates new methods on the model. Here's how to use that:

    // get the user reference from the post's belongsTo association
    post.getUser(function(user) {
        console.log('Just got the user reference from the post: ' + user.get('name'))
    });

    // try to change the post's user
    post.setUser(100, {
        callback: function(product, operation) {
            if (operation.wasSuccessful()) {
                console.log('Post\'s user was updated');
            } else {
                console.log('Post\'s user could not be updated');
            }
        }
    });

Once more, the loading function (`getUser`) is asynchronous and requires a callback function to get at the user instance. The `setUser` method simply updates the foreign_key (`user_id` in this case) to 100 and saves the Post model. As usual, callbacks can be passed in that will be triggered when the save operation has completed, whether successfully or not.

### Loading nested data

You may be wondering why we passed a `success` function to the `User.load` call but didn't have to do so when accessing User posts and comments. This is because the above example assumes that when we make a request to get a user the server returns the user data in addition to all of its nested posts and comments. By setting up associations as we did, the framework can automatically parse out nested data in a single request. Instead of making a request for the User data, another for the Posts data, and yet more requests to load the Comments for each Post, we can return all of the data in a single server response, like this:

    {
        success: true,
        users: [
            {
                id: 1,
                name: 'Ed',
                age: 25,
                gender: 'male',
                posts: [
                    {
                        id   : 12,
                        title: 'All about data in Sencha Touch 2',
                        body : 'One areas that has seen the most improvement...',
                        comments: [
                            {
                                id: 123,
                                name: 'S Jobs',
                                message: 'One more thing'
                            }
                        ]
                    }
                ]
            }
        ]
    }

The data is all parsed out automatically by the framework. It's easy to configure your models' proxies to load data from almost anywhere, and to set up their readers to handle almost any response format. As they were with Sencha Touch 1, models and stores are used throughout the framework by many of the components, such a Grids, Trees, and Forms.

See the [Associations and Validations](guides/data/examples/associations_validations/index.html) demo for a working example of models that use relationships.

Of course, it's possible to load your data in a non-nested fashion.  This can be useful if you need to "lazy load" the relational data only when it's needed.  Let's just load the User data as we did before, except we'll assume the response only includes the User data without any associated Posts. Then we'll add a call to `user.posts().load()` in our callback to get the related Post data:

    // Loads User with ID 1 User's Proxy
    User.load(1, {
        success: function(user) {
            console.log("User: " + user.get('name'));

            // Loads posts for user 1 using Post's Proxy
            user.posts().load({
                callback: function(posts, operation) {
                    Ext.each(posts, function(post) {
                        console.log("Comments for post: " + post.get('title'));

                        post.comments().each(function(comment) {
                            console.log(comment.get('message'));
                        });
                    });
                }
            });
        }
    });

For a full example see [Lazy Associations](guides/data/examples/lazy_associations/index.html)

### Validations

Sencha Touch 2 Models have rich support for validating their data. To demonstrate this we're going to build upon the example we created that illustrated associations. First, let's add some validations to the `User` model:

    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: ...,

        validations: [
            {type: 'presence', name: 'name'},
            {type: 'length',   name: 'name', min: 5},
            {type: 'format',   name: 'age', matcher: /\d+/},
            {type: 'inclusion', name: 'gender', list: ['male', 'female']},
            {type: 'exclusion', name: 'name', list: ['admin']}
        ],

        proxy: ...
    });

Validations follow the same format as field definitions. In each case, we specify a field and a type of validation. The validations in our example are expecting the name field to be present and to be at least five characters in length, the age field to be a number, the gender field to be either "male" or "female", and the username to be anything but "admin". Some validations take additional optional configuration - for example the length validation can take min and max properties, format can take a matcher, etc. There are five validations built into Sencha Touch 2, and adding custom rules is easy. First, let's look at the ones built right in:

- `presence` simply ensures that the field has a value. Zero counts as a valid value but empty strings do not.
- `length` ensures that a string is between a minimum and maximum length. Both constraints are optional.
- `format` ensures that a string matches a regular expression format. In the example above we ensure that the age field is four numbers followed by at least one letter.
- `inclusion` ensures that a value is within a specific set of values (for example, ensuring gender is either male or female).
- `exclusion` ensures that a value is not one of the specific set of values (for example, blacklisting usernames like 'admin').

Now that we have a grasp of what the different validations do, let's try using them against a User instance. We'll create a user and run the validations against it, noting any failures:

    // now lets try to create a new user with as many validation errors as we can
    var newUser = Ext.create('User', {
        name: 'admin',
        age: 'twenty-nine',
        gender: 'not a valid gender'
    });

    // run some validation on the new user we just created
    var errors = newUser.validate();

    console.log('Is User valid?', errors.isValid()); //returns 'false' as there were validation errors
    console.log('All Errors:', errors.items); //returns the array of all errors found on this model instance

    console.log('Age Errors:', errors.getByField('age')); //returns the errors for the age field

The key function here is `validate()`, which runs all of the configured validations and returns an [Errors](#/api/Ext.data.Errors) object. This simple object is just a collection of any errors that were found, plus some convenience methods such as `isValid()`, which returns true if there were no errors on any field, and `getByField()`, which returns all errors for a given field.

For a complete example that uses validations please see [Associations and Validations](guides/data/examples/associations_validations/index.html)

## Further Reading

Data is just part of the Sencha Touch 2 ecosystem. To understand more about the framework and how it works, we recommend the following:

* [Components and Containers](#!/guide/components)
* [The Class System](#!/guide/class_system)
* [The Layout System](#!/guide/layouts)
* [Getting Started](#!/guide/getting_started)