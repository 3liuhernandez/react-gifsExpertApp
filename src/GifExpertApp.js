import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    /* console.log(categories); */

    /* const handleAdd = () => {
        // setCategories( ['Marvel', ...categories] );
        setCategories( cats => [ ...cats, 'Marvel'] );
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />
            {/* <button onClick = { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;