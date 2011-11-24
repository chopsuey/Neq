Ext.define('Neq.view.Products', {
    extend: 'Ext.Carousel',
    xtype: 'productspage',
    
    config: {
        title: 'Product',
        iconCls: 'star',
        
        items: [
            {
                xtype: 'image',
                src: 'images/sample/Animator.png'
            },
            {
                xtype: 'image',
                src: 'images/sample/Charts.png'
            },
            {
                xtype: 'image',
                src: 'images/sample/Designer.png'
            }
        ]
    }
});