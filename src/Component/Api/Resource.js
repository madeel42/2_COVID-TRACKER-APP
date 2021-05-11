async function fetchData() {
    const response = await fetch('https://covid-19-tracking.p.rapidapi.com/v1', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2d2385ee65mshc3b0dd81a437c77p130559jsn839500b3fc87',
            'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
        }
    });
    const data = await response.json();
    return data
}

///

const createResource = () => {
    let status = 'loading';
    let result;
    let suspender = fetchData().then(data => {
        status = 'success';
        result = data
    }, (error) => {
        status = 'error';
        result = error
    })
    return {
        read() {
            if (status === 'loading') {
                throw suspender
            } else if (status === 'error') {
                throw result
            } else if (status === 'success') {
                return result
            }
        }
    }
}
export default createResource