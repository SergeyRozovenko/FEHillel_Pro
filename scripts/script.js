function generateKey(length, characters) {
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charactersLength);
		result += characters.slice(randomIndex, randomIndex + 1);
	}
	return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 

