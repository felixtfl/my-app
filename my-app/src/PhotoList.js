// import { LazyLoadImage,LazyLoadComponent } from 'react-lazy-load-image-component';
import './PhotosList.css';

const PhotosList = ({ data }) => {
    if (data) {
        return (
            <div id="photo-list">
                {
                    JSON.parse(data).map((p, index) => {
                        return (
                            <div key={p.id} className='imageStyle'>
                                {/* <LazyLoadComponent> */}
                                    <p className='picTxt'>{p.title}</p>
                                    {/* </LazyLoadComponent> */}
                                {/* <LazyLoadImage
                                    alt={p.title}
                                    src={p.thumbnailUrl}
                                /> */}
                                <img key={p.id} src={p.thumbnailUrl} alt={p.title}></img>
                            </div>);
                        // return <div class='imageStyle'><p class='picTxt'>{p.title}</p><img key={p.id} src={p.thumbnailUrl} alt={p.title}></img></div>;
                    })
                }
            </div>
        );
    } else {
        return (<div>test</div>)
    }

}

export default PhotosList;
