function drowTable(){
	var row = parseInt(prompt("Enter The row"));
	var column = parseInt(prompt("Enter The column"));
	// var html = "";
	var html = "<h1> Row : " + row + "</h1>";
	html += "<h1> Column : " + column + "</h1>";
	html += "<table border='1'>";
	
	// document.write(span_column);
	// row = parseInt(row);
	for(var i = 1;i<=row;i++){
		html += "<tr>"; 
		for(var j=1;j<=column;j++){
			if(i%2 == 1){
				if(j%2 == 1){
					html += "<td bgcolor='black'> row : "+ i +" ; column : "+ j +"</td>";

				}else{
					html += "<td > row : "+ i +" ; column : "+ j +"</td>";
				}
			}else{
				if(j%2 == 0){
					html += "<td bgcolor='black'> row : "+ i +" ; column : "+ j +"</td>";

				}else{
					html += "<td > row : "+ i +" ; column : "+ j +"</td>";
				}
				// html += "<td> row : "+ i +" ; column : "+ j +"</td>";
			}
			
		}
		html += "</tr>"; 
	}
	html += "</table>";

	document.getElementById('printTable').innerHTML = html;
	document.write(html);
	// console.log(row);
	// console.log(column);

	// document.getElementById("span-row").innerHTML = row;
	// document.getElementById("span-column").innerHTML = column;
}