

class SwapiService {
    //private value start with and shouldnt be changed 
    _apiBase = 'https://swapi.co/api';

    async  getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        //404 is not error (the response from the server is received)
        if (!res.ok) {
            throw new Error(`Could not fetch  ${url}` + `, received ${res.status}`)
        }
        const body = await res.json();
        // console.log(body);
        return body;
    }


    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson);
    }
    
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getResource('starships');
        return res.results.map(this._transformStarship)
    }

    async getStarships(id) {
        return this.getResource(`/starships/${id}`)
    }

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet){
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotationPeriod,
            diametr: planet.diametr
        }
    }

    _transformStarship(startship) {
        return {
            id: this._extractId(startship),
            name: startship.name,
            model: startship.model,
            manufacturer: startship.manufacturer,
            costInCredits: startship.costInCredits,
            length: startship.length,
            crew: startship.crew,
            passengers: startship.passengers,
            cargoCapacity: startship.cargoCapacity
        }
    }


    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }
    
                   
}

export default SwapiService;

//simple fetch
// fetch('https://swapi.co/api/people/1')
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
