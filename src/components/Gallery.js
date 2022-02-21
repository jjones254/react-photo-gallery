import React from 'react';

import Photo from './Photo';
import NoResults from './NoResults';

const Gallery = (props) => {
    const results = props.data
    let photos;
    
    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} key={photo.id} />);
    } else {
        photos = <NoResults />
    }
    
    return (
        <div className="photo-container">
            <title>{document.title = props.title}</title>
            <ul>
                {photos}
            </ul>
        </div>
    );
};

export default Gallery;