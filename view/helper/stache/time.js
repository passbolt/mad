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
import stache from 'can-stache';
import getTimeAgo from '../../../util/time/get_time_ago';

// Register a stache helper to help convert date to time ago.
stache.registerHelper('getTimeAgo', function() {
  console.log('get time ago');
  return getTimeAgo.apply(this, arguments);
});
