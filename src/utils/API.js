
// var cheerio = require("cheerio");
// // Makes HTTP request for HTML page
// var request = require("request");
// var results = [
//     {title: "",
//     author: "",
//     abstract: ""
//   }
// ];

var url = 'https://newsapi.org/v2/everything?q=+psychiatry&' +
          'from=2019-03-25&' +
          'apiKey=94f2069e57284136b40b0e1ec412676d';

var req = new Request(url);

function getData (cb) {
    return fetch(req)
}

module.exports = getData


// request("https://newsapi.org/v2/everything?q=+psychiatry&from=2019-03-09&apiKey=94f2069e57284136b40b0e1ec412676d", function(error, response, html) {
//   // Load the HTML into cheerio and save it to a variable
//   var $ = cheerio.load(html);
//   // array for articles
 

//   //find classname of article titles on database
//   $("li.rxiv-result").each(function(i, element) {
//     // Save the text of the element in a "title" variable
//     var title = $(element).children().attr("class", "title");
//     var author = $(element).children().attr("class","author");
//     var abstract = $(element).children().attr("class", "abstract");


//     results.push({
//       title: title,
//       author: author, 
//       abstract: abstract
//     });
//   });

//   console.log(results);
// });

// module.exports = results;


// const url = "http://export.arxiv.org/api/query?search_query=all:psychiatry&sortBy=submittedDate&sortOrder=descending";
// //"http://export.arxiv.org/api/query?search_query=all:psychiatry+AND+all:therapy+AND+all:datascience+AND+all:machinelearning&sortBy=submittedDate&sortOrder=ascending"

// var req = new Request (url);

// function getData(cb) {
//     return fetch(req)
// }

// module.exports = getData
// // export default {
// //     search:function () {
// //         return axios.get(url);
    
// //     }
// // };


//arxiv api results are in XML --> need parser 
