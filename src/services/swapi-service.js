

class SwapiService {
    //private value start with and shouldnt be changed 
    _apiBase = 'https://swapi.co/api';
    _imgBase = 'https://starwars-visualguide.com/assets/img';

    async  getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        //404 is not error (the response from the server is received)
        if (!res.ok) {
            throw new Error(`Could not fetch  ${url}` + `, received ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson);
    }
    
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person)
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        console.log(res);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    getAllStarships = async () => {        
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship)
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship)
    }
    
    getPersonImage =({ id }) => {
        return `${this._imgBase}/characters/${id}.jpg`
    }

    getStarshipImage = ({ id }) => {
        return `${this._imgBase}/starships/${id}.jpg`
    }

    getPlanetsImage = ({ id }) => {
        return `${this._imgBase}/planets/${id}.jpg`
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotationPeriod,
            diametr: planet.diametr
        }
    }

    _transformStarship = (startship) =>{  
        console.log(startship);
        return {
            id: this._extractId(startship),
            name: startship.name,
            model: startship.model,
            manufacturer: startship.manufacturer,
            costInCredits: startship.cost_in_credits,
            length: startship.length,
            crew: startship.crew,
            passengers: startship.passengers,
            cargoCapacity: startship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
}

export default SwapiService;

// simple fetch
// fetch('https://swapi.co/api/planets')
//     .then((res) => {
//        return res.json();
//     })
//     .then((body) =>{
//         console.log(body);
//     });

//test
// const swapi = new SwapiService();
// swapi.getAllPeople('people')
// //     .then((body) => {
// //         body.forEach(element => {
// //             console.log(element);
// //         });
// //     });

// // swapi.getPlanet(2).then((res) => {
// //     console.log(res);
// // })
