function createTable() {
    //Write your code here
let rows = prompt("enter the rows")
let column = prompt("enter the column")	
let mytable = document.querySelector("#myTable")	

for (let index = 0; index < rows; index++) {
	let tr = document.createElement("tr")
	for (let j = 0; j < column; j++) {
	let td = document.createElement("td")
		td.innerText = "a"
		tr.append(td)
	}
	

mytable.append(tr)
}
}