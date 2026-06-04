// Random Joke Generator using JokeAPI
// API: https://jokeapi.dev/

async function getRandomJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    
    if (data.type === 'single') {
      console.log(data.joke);
    } else {
      console.log(data.setup);
      console.log(data.delivery);
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

// Get a joke
getRandomJoke();
