$.ajax({
  url: "https://api.forismatic.com/api/1.0/",
  jsonp: "jsonp",
  dataType: "jsonp",
  data: {
    method: "getQuote",
    lang: "en",
    format: "jsonp"
  }
})
.done(function(data) {
  console.log(data);
  $("body").html(data.quoteText + " - " + data.quoteAuthor);
})
.fail(function(err) {
  console.log('Error: ' + err.status);
});