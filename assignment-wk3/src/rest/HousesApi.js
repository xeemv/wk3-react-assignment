const HOUSE_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

// just a normal class
class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSE_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e){
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSE_ENDPOINT}/${house._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e){
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }

    post = async (house) => {
        try {
            const resp = await fetch(`${HOUSE_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like adding a house had an issue.', e);
        }  
    }
}

export const housesApi = new HousesApi();