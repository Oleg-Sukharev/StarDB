console.log("test");

const getResource = async (url) => {
    const res = await fetch(url);
    //404 is not error (the response from the server is received)
    if (!res.ok) {
        throw new Error (`Could not fetch  ${url}` + `, received ${res.status}`)
    }
    const body = await res.json();
    return body;
}

getResource('https://swapi.co/api/people/123232')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('Could not fetch',err);
    })

// fetch('https://swapi.co/api/people/1')
//     .then((res) => {
//        return res.json();
//     })
//     .then((body) =>{
//         console.log(body);
//     });
