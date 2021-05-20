import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        /* console.log( e.target.value ); */
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( inputValue.trim().length > 2 ) {

            /* console.log(setCategories); */
            setCategories( cats => [ inputValue, ...cats ] );
            setinputValue('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>  
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;