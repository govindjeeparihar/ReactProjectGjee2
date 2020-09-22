import React from 'react';




const SearchResult = (props) => {
    const img = `https://source.unsplash.com/1600x900/?${props.name}`;
    return (
        <>
            <div className="container py-5">
                <div className="text-center">
                    <img className="img-fluid" src={img} />
                </div>
            </div>
        </>
    )
}

export default SearchResult;