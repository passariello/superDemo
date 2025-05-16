{
  const
    express = require('express'),
    router = express.Router()

  /* GET home page. */
  router.get(
    /(.*)/,
    function (req, res, next) {
      res.json({ test: "get" })
    }
  )

  module.exports = router
}



// {
//   const
//     express = require('express'),
//     router = express.Router(),
//     fs = require('fs'),
//     path = require('path'),
//     { glob } = require('glob')

//   /* GET home page. */
//   router.get(
//     /(.*)/,
//     (res, req, next) => {

//       const query = () => {
//         const a = {}
//         const params = res.originalUrl
//           .split("?")[1]
//           .replace(/^\?/, '')
//           .split('&')
//           .map(
//             str => {
//               const t = str.split('=').map(v => v)
//               a[t[0]] = t[1]
//             }
//           )

//         return a
//       }

//       //////////////////////////////////////////////////

//       const articles = []

//       const loadJSON = async (folder, filter) => {

//         try {

//           const files = await glob('./' + folder + '/**/*.json')

//           files.map(
//             file => {
//               const
//                 contentFile = fs.readFileSync(file, 'utf8'),
//                 split = file.split("\\")

//               articles.push(
//                 {
//                   ...JSON.parse(contentFile),
//                   split: split,
//                   slug: split[split.length - 1].replaceAll("_", " ").replace(".json", ""),
//                 }
//               )
//             }
//           )

//           const sortOrder = filter?.sort || 'asc'
//           sortOrder === 'asc' ? articles : articles.reverse()

//           const
//             startIndex = (query()['page'] - 1) * query()['per_pages'],
//             endIndex = query()['page'] * query()['per_pages']

//           console.log(startIndex, endIndex)
//           console.log(query()['page'], query()['per_pages'])

//           let slice = articles

//           const
//             total = [
//               // articles.slice(start, end),
//               slice.slice(startIndex, endIndex),
//               articles.length
//             ]

//           req.json(total) // TEST

//         } catch (error) {

//           console.error('Error fetching articles:', error)

//         }

//       }

//       loadJSON(
//         "db",
//         {
//           sort: "desc",
//           // search: "3d"
//         }
//       )

//     }

//   )

//   module.exports = router
// }
