
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("date").innerHTML = "Today is " + day;

/** Remove comment A1
function update_e2p2(data,columns) {
  var table = d3.select('#target_e2p2').append('table')
  var thead = table.append('thead')
  var tbody = table.append('tbody')
  thead.append('tr').selectAll('th').data(columns).enter().append('th').text(function (d) { return d })
  var rows = tbody.selectAll('tr').data(data).enter().append('tr')
  var cells = rows.selectAll('td').data(function(row) {
    return columns.map(function (column) {
      return { column: column, value: row[column] } })
  }).enter().append('td').text(function (d) { return d.value })
  return table;
}

function clear_e2p2() {
  var table = d3.select('#target_e2p2').selectAll("table").remove();
}

function callback_e2p2(){
  var pres = document.getElementById('word_e2p2').value
  var github = 'https://raw.githubusercontent.com/erickouassi/FK-Dues-Tracker/master/dues-tracker.csv'
  var t = d3.csv(github,function (data) {
  var columns = ['Name','id', 'Balance', 'Pourcentage'];
  //var subset = data.filter( function(d) { return d.first_name.toLowerCase().indexOf( pres ) !== -1 } );
  var subset = data.filter( function(d) { return d.id.toString() === document.getElementById('word_e2p2').value });
    update_e2p2(subset,columns) });
 
}
**/

document.getElementById("update").innerHTML = "Last updated 7/11/2020"

function myBalance() {
  var text;
  var balances = document.getElementById("myInput").value;

  switch(balances) {
    case "0454":
      text = "id# 0454, my balance is $341.67 (25.32%)";
    break;
    case "8006":
    text = "id# 8006, my balance is $796 (59.00%)";
    break;
    case "1128":
    text = "id# 1128, my balance is $8.94 (0.67%)";
    break;
    case "4796":
    text = "id# 4796, my balance is $202.57 (15.01%)";
    break;
    default:
    text = "I have never heard of this person...";
  }
  document.getElementById("myInfo").innerHTML = text;
}

