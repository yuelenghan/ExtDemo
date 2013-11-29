/**
 * Created with IntelliJ IDEA.
 * User: yuelenghan
 * Date: 13-11-29
 * Time: 下午6:56
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Demo.model.menuModel', {
    extend: 'Ext.data.Model',
    fields:[
        {name: 'id',  type: 'int'},
        {name: 'text',  type: 'string'},
        {name: 'url',  type: 'string'}
    ]
});