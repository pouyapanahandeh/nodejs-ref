// try and catch in js

document.write("Here we are going to test try catch in js" + "you can use it just for runtime error" + "<br>")

try{
	document.write("this is try block and run" + "<br>")
	
	unicycle
	
	document.write("must not run")
} catch(err) {
	
	document.write("error has occured:" + "<br>")
} finally{
	document.write("This is always run" + "<br>")
}

document.write("The execution continues..." + "<br>")
