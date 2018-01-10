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
var xss = {
    'xss JavaScript directive quote semicolon': "javascript:document.write('xss1');",
    'xss JavaScript directive quote no semicolon': "javascript:alert('xss2')",
    'xss JavaScript directive double quote': 'javascript:alert("XSS3")',
    'xss JavaScript directive case insensitive': "JaVaScRiPt:alert('XSS4')",
    'xss Javascript directive HTML entities': 'javascript:alert(&quot;XSS5&quot;)',
    'xss Javascript directive fromCharCode': 'javascript:alert(String.fromCharCode(88,83,83))',
    'xss Decimal HTML character references': '&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;',
    'xss Decimal HTML character references without trailing semicolons': '&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041',
    'xss Hexadecimal HTML char references without trailing semicolons': '&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29',
    'xss Embedded tab': "jav        ascript:alert('XSS10');",
    'xss Embedded Encoded tab': "jav&#x09;ascript:alert('XSS11');",
    'xss Embedded carriage return to break up XSS': "jav&#x0D;ascript:alert('XSS12');",
    'xss Embedded newline to break up XSS': "jav&#x0A;ascript:alert('XSS13');",
    'xss space and meta chars before the javascript': "&#14;  javascript:alert('XSS14');",
    'xss Extraneous >': '"' + "><script>alert('xss15')</script>",
    'xss Extraneous closing double quote': '">' + "onclick=alert('xxs16')",
    'xss & JavaScript includes':	"&{alert('XSS17')}",
    'xss null breaks up javascript directive': 'java\0script:alert("XSS18")'
};

export default xss;