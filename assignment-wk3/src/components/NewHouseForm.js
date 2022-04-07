import React, { useState } from 'react' 


export const NewHouseForm = (props) => {
    const [newHouse, setNewHouse] = useState('');
    


    const onSubmit = (e) => {
        e.preventDefault();

        if (newHouse) {
            console.log(`Add new house: ${newHouse}`);
            props.addNewHouse({newHouse});
            setNewHouse('');
        } else {
            console.log('invalid input to add a new house');
        }
    };



        return(
            <div>
                <h4>Add a new House</h4>
                <form onSubmit={onSubmit}>
                    <input
                    type='text'
                    placeholder="new house"
                    onChange={(e) => setNewHouse(e.target.value)}
                    value={newHouse}
                    />
                    <button type="submit">Add a new house</button>
                </form>
            </div>
        )
};