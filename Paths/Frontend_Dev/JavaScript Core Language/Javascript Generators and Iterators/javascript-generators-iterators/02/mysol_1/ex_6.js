const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'enter command > '
});


readline.prompt();
readline.on('line', async line => {
	switch(line.trim()) {
		case 'list vegan foods':
			{
				axios.get('http://localhost:3001/food').then(({ data }) => {
					let idx = 0;
					const veganOnly = data.filter(food => {
						return food.dietary_preferences.includes('vegan');
					});
					const veganIterable = {
						[Symbol.iterator]() {
							return {
								[Symbol.iterator]() {
									return this;
								},
								next() {
									// const current = data[idx];
									const current = veganOnly[idx];
									idx++;
									if(current) {
										return { value: current, done: false };
									} else {
										return { value: current, done: true };
									}
								},
							};
						},
					};
					for(let val of veganIterable) {
						console.log(val.name);
					}
					readline.prompt();
				});
			}
			break;
		case 'log':
			{
				const { data } = await axios.get('http://localhost:3001/food');
				const it = data[Symbol.iterator]();
				let actionIt;

				const actionIterator = {
					[Symbol.iterator]() {
						let position = [...this.actions];
						return {
							[Symbol.iterator]() {
								return this;
							},
							next(...args) {
								if(position.length > 0) {
									const position = position.shift();
									const result = position(...args);
									return { value: result, done: false }
								} else {
									return { done: true }
								}
							},
							return() {
								position = [];
								return { done: true };
							},
							throw(error) {
								console.log(error);
								return { value: undefined, done: true };
							}
						};
					},
					actions: [askForServingSize, displayCalories],
				};

				function askForServingSize(food) {
					readline.question('How many servings do you eat?',
						servingSize => {
							if(servingSize === 'nevermind' || servingSize === 'n') {
								actionIt.return();
							} else {
								actionIt.next(servingSize, food);
							}
						}
					)
				}

				async function displayCalories(servingSize = 1, food) {
	        const calories = food.calories;
	        console.log(
	          `${
	            food.name
	          } with a serving size of ${servingSize} has ${Number.parseFloat(
	            calories * parseInt(servingSize, 10),
	          ).toFixed()} calories.`,
	        );

	        const { data } = await axios.get(`http://localhost:3001/users/1`);
	        const usersLog = data.log || [];
	        const putBody = {
	          ...data,
	          log: [
	            ...usersLog,
	            {
	              [Date.now()]: {
	                food: food.name,
	                servingSize,
	                calories: Number.parseFloat(
	                  calories * parseInt(servingSize, 10),
	                ),
	              },
	            },
	          ],
	        };
	        await axios.put(`http://localhost:3001/users/1`, putBody, {
	          headers: {
	            'Content-Type': 'application/json',
	          },
	        });

	        actionIt.next();
	        readline.prompt();
	      }

				readline.question('What would you like to log today?', async(item) => {
					
					let position = it.next();
					while(!position.done) {
						const food = position.value.name;
						if(food === item) {
							console.log(`${item} has ${position.value.calories} calories`);
							actionIt = actionIterator[Symbol.value];
							actionIt.next(position.value);
						}
						position = it.next();
					}
					readline.prompt();
				});
				break;
			}
	}
	readline.prompt();
});
















