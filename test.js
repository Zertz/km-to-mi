import test from 'ava'
import kmToMi from './'

test('unicorns', (t) => {
  t.is(kmToMi('unicorns'), undefined)
})

test('{}', (t) => {
  t.is(kmToMi({}), undefined)
})

test('[]', (t) => {
  t.is(kmToMi([]), undefined)
})

test('"0"', (t) => {
  t.is(kmToMi('0'), 0)
})

test('"1.609344"', (t) => {
  t.is(kmToMi('1.609344'), 1)
})

test('0', (t) => {
  t.is(kmToMi(0), 0)
})

test('1.609344', (t) => {
  t.is(kmToMi(1.609344), 1)
})
