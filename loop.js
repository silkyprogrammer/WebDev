for (let i = 0; i <= 10; i++) {
	console.log(i);
}


for (let i = 0; i <= 5; i++) {
	console.log("Da ba dee da ba daa");
}

for (let i = 25; i <= 0; i = -5) {
	console.log("Da ba dee da ba daa");
}

const animals = ["tiger", "lion", "rabbit"]
for (let i = 0; i < animals.length; i++) {
	const element = animals[i];
	console.log(element)

}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
	const element = people[i];
	console.log(element.toUpperCase());
}


let count = 0;
while (count < 10) {
	console.log(count);
	count++;
}