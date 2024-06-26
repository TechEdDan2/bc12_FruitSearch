document.addEventListener('DOMContentLoaded', function () {

	//Variable for the fruit search input 
	const input = document.querySelector('#fruit');
	//variable for the dropdown
	const suggestions = document.querySelector('.suggestions ul');
	const searchBTN = document.querySelector('button');

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
				if (!fruitMap.has(fruit)) {
					fruitMap.set(fruit, fruit);
				}
			}
		}
		console.log(fruitMap);

		// extract the list of fruits
		results = fruitMap.values();
		console.log(results);

		return results;
	}

	function searchHandler(e) {
		e.preventDefault();
		console.log('keyup triggered');

		//get the letter(s) in the text input
		const userSearchInput = input.value.toLowerCase();
		console.log(userSearchInput);

		//call the search function and pass the letters
		const searchResults = Array.from(search(userSearchInput));
		console.log(`The Array!`);
		console.log(searchResults);

		//pass the returned results to show suggestions
		showSuggestions(searchResults, 10);
	}

	function showSuggestions(results, inputVal) {
		//Check to see if this function is triggered
		console.log('showSuggestions is called');
		//check to see if there are any li's in the ul
		// if true remove them
		if (suggestions.firstChild) {
			reset();
		} else {
			//else populate the drop down
			for (let i = 0; i < inputVal; i++) {
				if (results[i] === undefined) {
					//not sure if this should break?
				} else {
					const newSuggestLi = document.createElement('li');
					newSuggestLi.innerHTML = results[i];
					suggestions.appendChild(newSuggestLi);
					// NOTE I need to put a span around the letters corresponding with the search and make it bolded 
				}
			}
		}
	}

	function useSuggestion(e) {
		e.preventDefault();
		console.log(`this is clicked ${e.target.innerHTML}`);
		input.value = e.target.innerHTML;
		//remove the suggestions
		// while (suggestions.firstChild) {
		// 	suggestions.removeChild(suggestions.firstChild);
		// }
		reset();

	}

	function reset() {
		while (suggestions.firstChild) {
			suggestions.removeChild(suggestions.firstChild);
		}
	}

	// Event Handlers
	input.addEventListener('keyup', searchHandler);
	suggestions.addEventListener('click', useSuggestion);
	suggestions.addEventListener('mouseover', function (e) {
		e.preventDefault();
		let hoverItem = e.target;
		console.log(`This is the mouseOver: ${hoverItem}`);
		hoverItem.style.backgroundColor = "#e85d04"
	});
	suggestions.addEventListener('mouseout', function (e) {
		e.preventDefault();
		let hoverItem = e.target;
		console.log(`This is the mouseOut: ${hoverItem}`);
		hoverItem.style.backgroundColor = "rgba(255, 255, 255, 0)"
	});
	searchBTN.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('button click triggered');
		input.value = "";
		reset();
	});


});
