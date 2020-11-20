(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.matchWords should return an array', function() {
      var words = "How're you, i'm fine. And you?";
      var res = nx.matchWords(words);
      expect(res).toEqual(["How're", 'you', "i'm", 'fine', 'And', 'you']);
    });
  });
})();
