function getInput(num){
	var input=document.getElementById("input").value+=num;
}

function getResult(){
	var input=document.getElementById("input");
	// var output=document.getElementById("output");
	if (!(input.value)){
			input.value=null;
	}
	else{
	// output.value=eval(input.value)
	// input.value=null;
	input.value=eval(input.value)
	}

}

function allClear(){
	var input=document.getElementById("input");
	var output=document.getElementById("output");
	input.value=null;
	output.value=null;
}
function deleteChar(){
	var input=document.getElementById("input");
	var del=input.value;
	del=del.slice(0, -1);
	input.value=del
}



