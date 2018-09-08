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
import "../../bootstrap";
//import jest from 'jest';
window.$ = Cypress.$;
import CanControl from "can-control";
import MadControl from '../../../control/control';
//window.$ = Cypress.$;
//import $ from 'jquery';
//jest.mock('jquery', Cypress.$);
//import sinon from 'sinon';
//
describe("Control", () => {
  beforeEach(() => {
    //$('body').append('<div id="test-html"/>');
    cy.visit('/test/test.html');
    //cy.stub(MadControl, '$', $);
    //sinon:
  });
  describe("Constructor", () => {
    it("inherits Centaur", () => {
      const control = new MadControl('#test-html');
      expect(control).to.be.instanceOf(CanControl);
      expect(control).to.be.instanceOf(MadControl);
      control.destroy();
    });
  });
});
