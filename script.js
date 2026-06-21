function makeid(l) {
  // write your code here
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let result = ""
for(let i=0; i<l; i++){
	result += chars[Math.floor(Math.random()*chars.length)]
}

	return result

}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
