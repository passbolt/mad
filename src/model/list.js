import 'can/construct/construct';
import 'mad/model/model';

mad.model = mad.model || {};

/*
 * @inherits jQuery.Class
 * @parent mad.model
 */
var List = mad.model.List = can.Construct.extend('mad.model.List', /** @static */ {

    /**
     * IndexOf a reccord
     * @param {can.model.List} list The list to search in
     * @param {mixed} item The item we are looking for, could be a mad.model.Model or an uuid
     * @return {array}
     */
    indexOf: function (list, item) {
        var returnValue = -1;
        var itemId = item instanceof mad.Model ? item.id : item;
        can.each(list, function (raw, i) {
            if (raw.id == itemId) {
                returnValue = i;
                return false; // break
            }
        });
        return returnValue;
    },

    /**
     * Remove an instance from the list
     * @param {can.model.List} list The list to remove in
     * @param {mad.model.Model} item The item we want to remove
     * @return {array}
     */
    remove: function (list, item) {
        var i = mad.model.List.indexOf(list, item);
        if (i!=-1) {
            list.splice(i, 1);
            return true;
        }
        return false;
    }

}, /** @prototype */ { });

export default List;
