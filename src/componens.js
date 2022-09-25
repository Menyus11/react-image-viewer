import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { youtubeLink } from './videos';

export const HomePage = () => {

    const SampleVideo = () => {

        let videoIndex = "";
        youtubeLink.forEach((e, i) => {
            videoIndex = i;
        })
        
        const min = 0;
        const max = videoIndex;
        const randomVideoIndex = Math.round(min + Math.random() * (max - min));
        let randomVideo = "";

        youtubeLink.forEach((e, i) => {
            if (i === randomVideoIndex) { randomVideo = e.src }
        })

        return (
            <div className="m-3 d-flex justify-content-around">
                <iframe width="450" height="250" src={randomVideo} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>
        )
    }


    const SamplePicture = () => {
        let photoIndex = "";

        photos.forEach((e, i) => {
            photoIndex = i;
        })

        const min = 0;
        const max = photoIndex;
        const randomPhotoIndex = Math.round(min + Math.random() * (max - min));
        let randomPhoto = "";

        photos.forEach((e, i) => {
            if (i === randomPhotoIndex) { randomPhoto = e.src }
        })

        return (
            <div className="m-3 d-flex justify-content-around">
                <a href={randomPhoto}><img src={randomPhoto} alt={randomPhotoIndex} style={{ height: '300px'}} /></a>
            </div>
        )
    }

    return (
        <div className="bg-warning">
            <h1 className="text-center">Kezdőoldal</h1>
            <hr />
            <h3 className="px-3">Videók:</h3>
            <div className="row">               
                <div className='col'><SampleVideo /></div>
                <div className='col'><SampleVideo /></div>
                <div className='col'><SampleVideo /></div>
            </div>
            <hr />
            <h3 className="px-3">Képek:</h3>
            <div className="row text-center">
                <div className='col'><SamplePicture /></div>
                <div className='col'><SamplePicture /></div>
                <div className='col'><SamplePicture /></div>
                <div className='col'><SamplePicture /></div>
            </div>
        </div>
    )
};


export const PicturesPage = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="bg-warning">
            <h1 className="text-center">Kedvenc fotóim</h1>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}


export const VideoPage = () => {

    return (
        <div className="bg-warning text-center">
            <h1 className="text-center">Kedvenc videóim</h1>

            <div className="row d-flex justify-content-around">
                {youtubeLink.map((element, index) => {
                    return <React.Fragment key={index}>
                        <div className="col m-3"><iframe width="450" height="250" src={element.src} title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
                    </React.Fragment>
                })}
            </div>

        </div>
    )
}


export const AccountPage = () => {

    const [loginData, setLoginData] = useState({ loginName: "", loginPassword: "" });
    const [regData, setRegData] = useState({ regName: "", regPassword: "" });

    return (

        <div className="row m-3 bg-warning">

            <h1 className="text-center">Lépjen be, vagy regisztráljon!</h1>

            <div className="text-center col m-5">
                <div className="card" style={{ minWidth: "248px" }}>
                    <div className="card-header">
                        Belépés
                    </div>
                    <div className="card-body">

                        <h3 className="card-title">Itt tud belépni!</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            fetch('http://localhost/feldolgozo.php', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(loginData)
                            })
                        }}>
                            <label htmlFor="login_email">Az Ön email címe</label><br />
                            <input id='login_email' className="form-control" onChange={(event) => setLoginData({ ...loginData, loginName: event.target.value })} /><br />

                            <label htmlFor="login_password">Az Ön jelszava</label><br />
                            <input id='login_password' className="form-control" onChange={(event) => setLoginData({ ...loginData, loginPassword: event.target.value })} /><br />

                            <button className="btn btn-success m-1" type="submit">Belépés</button>
                            <button className="btn btn-danger m-1" type="button">Mégsem</button>
                        </form>

                    </div>
                </div>
            </div>

            <div className="text-center col m-5">
                <div className="card" style={{ minWidth: "248px" }}>
                    <div className="card-header">
                        Regisztráció
                    </div>
                    <div className="card-body">

                        <h3 className="card-title">Itt tud regisztrálni!</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            fetch('http://localhost/feldolgozo.php', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(regData)
                            })
                        }}>
                            <label htmlFor="registration_email">Az Ön email címe</label><br />
                            <input id='registration_email' className="form-control" onChange={(event) => setRegData({ ...regData, regName: event.target.value })} /><br />

                            <label htmlFor="registration_password">Az Ön jelszava</label><br />
                            <input id='registration_password' className="form-control" onChange={(event) => setRegData({ ...regData, regPassword: event.target.value })} /><br />

                            <button className="btn btn-success m-1" type="submit">Regisztráció</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}