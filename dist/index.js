/*!
 * name: @jswork/next-match-words
 * description: Get matched english words.
 * homepage: https://github.com/afeiship/next-match-words
 * version: 1.0.0
 * date: 2020-11-20 17:14:28
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var WORDS_RE = /[a-zA-Z0-9_'\u0392-\u03c9\u0400-\u04FF\u0027]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|[\u0531-\u0556\u0561-\u0586\u0559\u055A\u055B]+|\w+/g;

  nx.matchWords = function (inString) {
    if (!inString) return [];
    return inString.match(WORDS_RE);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.matchWords;
  }
})();
