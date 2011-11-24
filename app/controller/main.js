Ext.define('Neq.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: ['login.Login', 'Home', 'Products', 'Blog', 'Contact'],
    
    refs: [
        {
            ref: 'contactForm',
            selector: '#contactForm'
        }
    ],
    
    init: function() {
        this.control({
            'button[action=submitContact]': {
                tap: 'submitContactForm'
            }
        });
    },
    
    submitContactForm: function() {
        var form = this.getContactForm();
        
        form.submit({
            url: 'contact.php'
        });
    }
});