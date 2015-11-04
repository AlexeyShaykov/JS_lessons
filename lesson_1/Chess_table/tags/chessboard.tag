<chessboard>
  <table >
    <tr each={ i in rowItems}>
      <td each={ cellName in cells[i]} onclick={ handleCellClick }></td>
    </tr>
  </table>
  <div>{cellDivName}</div>

  <script>
    var range = function (len) {
      var res = new Array(len);
      for (var i = 0; i < len; i++)
        res[i] = i;
      return res;
    }

    this.rowItems = range(opts.rows);
    this.cells = this.rowItems.map(function (i) {
      return range(opts.cols).map(function (j) {
        return opts.alphabetWord[j] + '' + opts.alphabetNumber[i];
      });
    });

    this.handleCellClick = function(e) {
      cellDivName = e.item.cellName;
    }
  </script>

</chessboard>
