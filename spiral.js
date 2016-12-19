var theElement = 1;
var arr = [[]];
var columnCoordinates = [];
var rowCoordinates = [];

function createSpiral(N){
	theElement = 1;
	if(N<1) return [[]];
	arr = new Create2DArray(N, N);
	rowCoordinates = generateRowCoordinates(N);
        columnCoordinates = generateColumnCoordinates(N);
	var r = 0;
	var c = 0;
	for(var i=0; i<2*N -1; i++){
		if(i%2 == 0){
			var s = rowCoordinates[r];
                	fillByRow(s.columnOrRow,s.fromIndex, s.toIndex);
                	r++;
		}else{
			var s = columnCoordinates[c];
                	fillByColumns(s.columnOrRow,s.fromIndex, s.toIndex);
                	c++;
		}
	}
	return arr;
}

function generateColumnCoordinates(N){
	var list = [];
	var j=0;
	var k=0;
	var n=N;
	for(var i=0; i<N-1; i++){
		if(i%2==0){
			list.push(new StartEndCoordinate(j+1, N-1-j, n-1));
			j++;
			n--;
		}else{
			list.push(new StartEndCoordinate(N-2-k,k+1,k));
                	k++;
		}
	}
	return list;
	
}

function generateRowCoordinates(N){
	var list = [];
        var j=0;
        var k=0;
        var n=N;
        for (var i = 0; i < N; i++) {
            if(i%2 == 0){
                list.push(new StartEndCoordinate(j,N-1-j,j));
                j++;
            }else{
                list.push(new StartEndCoordinate(N-2-k,k,n-1));
                n--;
                k++;
            }
        }
        return list;
}
function fillByRow(whichRow,from,to){
        if(from < to){
            for (var i = from ; i <=to ; i++) {
                arr[whichRow][i] = theElement++;
            }
        }else{
            for (var i = from; i >=to ; i--) {
                arr[whichRow][i] = theElement++;
            }
        }

    }
function fillByColumns(whichColumn,from,to){
        if(from < to){
            for (var i = from ; i <=to ; i++) {
                arr[i][whichColumn] = theElement++;
            }
        }else{
            for (var i = from; i >=to ; i--) {
                arr[i][whichColumn] = theElement++;
            }
        }
    }

function StartEndCoordinate(fromIndex, toIndex, columnOrRow){
	this.fromIndex = fromIndex;
	this.toIndex = toIndex;
	this.columnOrRow = columnOrRow;
}
function Create2DArray(rows,columns) {
   var x = new Array(rows);
   for (var i = 0; i < rows; i++) {
       x[i] = new Array(columns);
   }
   return x;
}

var a = createSpiral(2);
for(var i=0; i<a.length; i++){
	console.log(a[i]);
}
