/**
 * Created with IntelliJ IDEA.
 * User: yuelenghan
 * Date: 13-11-29
 * Time: 下午6:56
 * To change this template use File | Settings | File Templates.
 */
Ext.define("Demo.store.menuStore", {
    extend: 'Ext.data.TreeStore',
    defaultRoodId: 'root',
    model: 'Demo.model.menuModel',

    proxy: {
        type: 'ajax',
        url: './server/data.json',
        reader: 'json',
        autoLoad: true
    }
});