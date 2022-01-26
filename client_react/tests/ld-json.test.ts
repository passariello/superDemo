// Jest imports
import 'jest-get-type'
//import 'html-validate/jest'
//import 'jest-chain'
//import 'jest-extended'
//import 'jsdom-global/register'
import 'jsdom-worker'

// describe('codeInjector() mocking the func', () => {
//     beforeEach(() => {
//         jest.spyOn(actions, 'codeInjector').mockImplementation(() => [MockData.LdJsonSample])
//         jest.spyOn(main, 'sendTaskToWorker').mockImplementation(() => {})
//     })

//     afterEach(() => {
//         jest.clearAllMocks()
//     })

//     test('codeInjector() returns valid script(s)', async () => {
//         const data = actions.codeInjector()
//         expect(data).toBeArray()
//         expect(data[0]).toBeObject()
//         expect(actions.codeInjector).toBeCalledTimes(1)
//     })

//     test('reportGenerator() generates valid HTML from complex LD+JSON', () =>
//         actions.reportGenerator(MockData.UrlSample, actions.codeInjector(), MockData.reportTester))

//     test('reportGenerator() generates valid HTML from empty Url', () =>
//         actions.reportGenerator('', actions.codeInjector(), MockData.reportTester))
// })

// describe('reportGenerator()', () => {
//     beforeEach(() => {
//         jest.spyOn(main, 'sendTaskToWorker').mockImplementation(() => {})
//     })

//     test('reportGenerator() LD-JSON testing report', () =>
//         actions.reportGenerator(MockData.UrlSample, [MockData.LdJsonSample], MockData.reportTester))

//     test('reportGenerator() generates valid HTML from empty LD+JSON', () =>
//         actions.reportGenerator(MockData.UrlSample, [], MockData.reportTester))

//     test('reportGenerator() generates valid HTML from empty Url and empty LD+JSON', () =>
//         actions.reportGenerator('', [], MockData.reportTester))
// })
