function makeid(l) {
  // write your code here
	let chars = [];

	for (let i = 97; i <= 122; i++) {
	    chars.push(i)
	}

	let result = ""

	for (let j = 1; j <= l; j++){
	
	    let randomCode = chars[Math.floor(Math.random() * chars.length)]
	    let randomChar = String.fromCharCode(randomCode);
	    result += randomChar
	   
	}

	return result
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
