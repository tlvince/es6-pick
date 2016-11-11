const test = require('tap').test
const pick = require('.')

test('pick', t => {
  const object = {
    a: 'foo',
    b: 'bar',
    c: 'baz'
  }

  t.same(pick(object, 'a'), {
    a: 'foo'
  })

  t.same(pick(object, ...['a', 'b']), {
    a: 'foo',
    b: 'bar'
  })

  t.end()
})
