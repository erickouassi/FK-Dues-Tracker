
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


