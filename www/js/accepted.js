$(document).ready(function() {
  $.getJSON('./json/papers.json', function(data) {
    var theTemplateScript = $("#acceptedScript").html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(data);
    $('#accepted').html(theCompiledHtml);
  })
  .fail(function(jqxhr, textStatus, error) {
    console.log('There is a problem with metadata.json. The problem is ' + error);

    document.getElementById('accepted');
    accepted.innerHTML = '<p>The list of accepted papers is not currently available. Please check back later.</p>';
  });
})
