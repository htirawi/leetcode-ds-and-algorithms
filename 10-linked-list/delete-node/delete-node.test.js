const { LinkedList } = require('./delete-node');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('add', () => {
    test('should add a node ', () => {
      linkedList.add(4);
      linkedList.add(5);
      linkedList.add(1);
      linkedList.add(9);

      expect(linkedList.head.data).toEqual(4);
      expect(linkedList.tail.data).toEqual(9);
    });
  });
});
