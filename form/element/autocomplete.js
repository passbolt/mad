/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) Passbolt SARL (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Passbolt SARL (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 */
import ChoiceElement from 'passbolt-mad/form/choice_element';
import ComponentHelper from 'passbolt-mad/helper/component';
import TextBox from 'passbolt-mad/view/form/element/textbox';

/**
 * @parent Mad.form_api
 * @inherits mad.Component
 *
 * The Autocomplete Form Element
 * @todo TBD
 */
var Autocomplete = TextBox.extend('mad.form.Autocomplete', /* @static */ {

    defaults: {
        label: 'Autocomplete Form Element Controller',
        tag: 'input'
    }

}, /** @prototype */ {

    afterStart: function() {
        // Add an list component
        // This list will allow the autocomplete component to display the available choices
        var listOpts = {
            itemClass: Model,
            cssClasses: ['autocomplete-content'],
            state: 'hidden',
            // The map to use to make jstree working with our category model
            map: new mad.Map({
                id: 'id',
                label: 'label',
                model: 'model'
            })
        };
        this.options.list = ComponentHelper.create(this.element, 'after', mad.component.Tree, listOpts);
        this.options.list.start();
        this.on();
    },

    /**
     * The user want to remove a permission
     * @param {HTMLElement} el The element the event occured on
     * @param {HTMLEvent} ev The event which occured
     * @param {passbolt.model.Permission} permission The permission to remove
     * @return {void}
     */
    ' changed': function(el, ev, data) {
        var self = this;
        // autocomplete the given string
        // By using the given callback
        if(this.options.callbacks.ajax) {
            this.options.callbacks.ajax.apply(this, [data.value])
                .done(function(ajaxData) {
                    self.options.list.reset();
                    self.options.list.load(ajaxData);
                    self.options.list.setState('ready');
                });
        }
    },

    /**
     * An item has been selected in the autocomplete list
     * @param {HTMLElement} el The element the event occured on
     * @param {HTMLEvent} ev The event which occured
     * @param {mad.model.Model} instance The selected instance
     * @return {void}
     */
    '{list.element} item_selected': function(el, ev, data) {
        // update the value of the autocomplete field with the selected value
        this.setValue(data.label);
        // hide the autocomplete list
        this.options.list.setState('hidden');
        // Trigger the event on the main component.
        $(this.element).trigger('item_selected', [data, ev]);
    }

});

export default Autocomplete;
