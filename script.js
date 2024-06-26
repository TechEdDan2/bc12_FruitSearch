document.addEventListener('DOMContentLoaded', function () {

	//Variable for the fruit search input 
	const input = document.querySelector('#fruit');
	//variable for the dropdown
	const suggestions = document.querySelector('.suggestions ul');

	const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

	function search(str) {
		console.log(`thanks for passing me: ${str}`);
		let results = [];
		const fruitMap = new Map();

		//Loop over the friut array looking for the search letters
		for (let fruit of fruits) {
			let lowerFruit = fruit.toLocaleLowerCase();
			if (lowerFruit.includes(str)) {
				console.log(`Found a match: ${lowerFruit}`);
			}
		}


		return results;
	}

	function searchHandler(e) {
		e.preventDefault();
		console.log('keyup triggered');

		//get the letter(s) in the text input
		const userSearchInput = input.value.toLowerCase();
		console.log(userSearchInput);

		//call the search function and pass the letters
		const searchResults = search(userSearchInput);

		//pass the returned results to show suggestions

	}

	function showSuggestions(results, inputVal) {

		// TODO
	}

	function useSuggestion(e) {
		// TODO
	}


	input.addEventListener('keyup', searchHandler);
	suggestions.addEventListener('click', useSuggestion);

});
