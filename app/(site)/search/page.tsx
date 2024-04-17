import React from 'react';


type Props = {
    searchParams: { query: string | undefined }
}
const Search = ({searchParams}: Props) => {
    return (
        <div className='container'>
            {
                searchParams.query ?
                    <div className="h-52 flex justify-center items-center">
                        <h2 className='text-xl'>You Search Keyword: {searchParams.query}</h2>
                    </div>
                    : <div className="h-52 flex justify-center items-center">
                        <h2>Query not found</h2>
                    </div>
            }
        </div>
    );
};

export default Search;
