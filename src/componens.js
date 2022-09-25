import { useState } from "react";

export const HomePage = () => {
    return (
        <h1>Ez a Home oldal</h1>
    )
};

export const PicturesPage = () => {
    return (
        <h1>Ez a képek oldal</h1>
    )
}

export const VideoPage = () => {
    return (
        <h1>Ez a video oldal</h1>
    )
}

export const AccountPage = () => {

    const [loginData, setLoginData] = useState({loginName: "", loginPassword: ""});
    const [regData, setRegData] = useState({regName: "", regPassword: ""});

    return (

        <div className="row m-3">

            <h1 className="text-center">Lépjen be, vagy regisztráljon!</h1>

            <div className="text-center col m-5">
                <div className="card" style={{ minWidth: "248px"}}>
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
                                body: JSON.stringify( loginData )
                            })
                        }}>
                            <label htmlFor="login_email">Az Ön email címe</label><br />
                            <input id='login_email' className="form-control" onChange={(event)=>setLoginData({...loginData, loginName: event.target.value})}/><br />

                            <label htmlFor="login_password">Az Ön jelszava</label><br />
                            <input id='login_password' className="form-control"  onChange={(event)=>setLoginData({...loginData, loginPassword: event.target.value})}/><br />

                            <button className="btn btn-success m-1" type="submit">Belépés</button>
                            <button className="btn btn-danger m-1" type="button">Mégsem</button>
                        </form>

                    </div>
                </div>
            </div>

            <div className="text-center col m-5">
                <div className="card" style={{ minWidth: "248px"}}>
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
                                body: JSON.stringify( regData )
                            })
                        }}>
                            <label htmlFor="registration_email">Az Ön email címe</label><br />
                            <input id='registration_email' className="form-control" onChange={(event)=>setRegData({...regData, regName: event.target.value})}/><br />

                            <label htmlFor="registration_password">Az Ön jelszava</label><br />
                            <input id='registration_password' className="form-control" onChange={(event)=>setRegData({...regData, regPassword: event.target.value})}/><br />

                            <button className="btn btn-success m-1" type="submit">Regisztráció</button>
                        </form>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}