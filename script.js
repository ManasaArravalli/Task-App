$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var data = $('form').serializeObject();
    var tr = "<tr>";
    tr += "<td>" + data["name"] + "</td>";
    tr += "<td>" + data["date"] + "</td>";
    tr += "<td>" + data["assigned"] + "</td></tr>";
    $("#mytable").append(tr);
    obj.push(data);
    this.reset();
  });
  var obj = [{
    "name": "Test Task #1",
    "date": "12/01/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #2",
    "date": "12/02/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #3",
    "date": "12/03/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #4",
    "date": "12/04/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #5",
    "date": "12/05/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #6",
    "date": "12/06/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #7",
    "date": "12/07/2012",
    "assigned": "John Doe"
  }];
  var tbl = $("<table/>").attr("id", "mytable");
  $("#div1").append(tbl);
  var html = '';
  for (var i = 0; i < obj.length; i++) {
    html += "<tr>";
    html += "<td>" + obj[i]["name"] + "</td>";
    html += "<td>" + obj[i]["date"] + "</td>";
    html += "<td>" + obj[i]["assigned"] + "</td></tr>";
  }
  $("#mytable").append(html);
});
