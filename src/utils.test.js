import {getAssetUrlByType} from "./utils";

test('getAssetUrlByType return correct object', () => {
  const expectedUrl = 'http://expected'
  const fakeObjs = [{href: 'http://blaah'}, {href: 'http://expected'}, {href: 'http://fake'}]
  const actualObj = getAssetUrlByType('expected', fakeObjs)

  expect(actualObj).toEqual(expectedUrl)
})

test('getAssetUrlByType return correct object', () => {
  const expectedUrl = undefined
  const fakeObjs = [{href: 'http://blaah'}, {href: 'http://fake'}]
  const actualObj = getAssetUrlByType('expected', fakeObjs)

  expect(actualObj).toEqual(expectedUrl)
})
