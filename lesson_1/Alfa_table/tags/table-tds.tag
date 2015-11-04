<table-tds>

	<table width="100%" border="1" cellpadding="4" cellspacing="0" class="first">
		<tr each={rows}>
			<td each={columns} onclick={ changeColor }></td>
		</tr>
	</table>
	<script>
	this.on('mount', function(){
		columns = new Array(opts.collum);
		rows = new Array(opts.row);
		this.update();
		var r = document.getElementsByTagName('td');
		var inputList = Array.prototype.slice.call(r);
		inputList.forEach(function(item,i){
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for (var i = 0; i < 6; i++ ) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			item.style.background = color;
			item.innerHTML = opts.dict[Math.floor(Math.random() * opts.dict.length)]
		})
	})
	this.changeColor = function (e) {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		this.root.style.background = color;
		this.root.innerHTML = opts.dict[Math.floor(Math.random() * opts.dict.length)]
	}
	this.getRandomColor = function () {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	</script>
</table-tds>
