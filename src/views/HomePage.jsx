import "./HomePage.css"
import Loading from "../components/Loading";
import axios from "axios";
import { useState } from "react";

const HomePage = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState({});

    async function getUser() {
        if (username === "") {
            return;
        }
        try {
            setUser([]);
            setLoading(true);

            const response = await axios.get(`https://api.github.com/users/${username}`, {

            });

            const { data } = response;
            if (data) {
                setLoading(false);
            }
            console.log(data);
            setUser(data);


        } catch (error) {
            setLoading(false);
            setUser([]);
            setErrorMessage(error.response.data);
            console.error(error);

        }

    }



    return <>
        <main style={{ height: '1000px' }} >

            <section id="search-section">
                <div className="container">
                    <div className="col-lg-6 mx-auto search-area shadow">
                        <div className="search-items d-flex justify-content-around">

                            <div className="mt-auto mb-auto ms-auto me-auto">
                                <label className="form-label">Search by Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-auto mt-auto ms-auto me-auto">
                                <button
                                    className="btn btn-dark"
                                    onClick={() => getUser()}
                                >
                                    <i className="fa-solid fa-magnifying-glass text-light"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


            <div style={{ height: user.length === 0 ? '300px' : 'fit-content' }} className="card ms-auto me-auto bg-glass col-md-6">
                <div className="card-body px-4 py-4 px-md-5 ">

                    <section className="vh-110 gradient-custom">
                        <div className="container">
                            <div className="row d-flex justify-content-center my-4">
                                {loading ? <div className="mt-5" style={{ textAlign: 'center' }}><Loading /> </div> :
                                    <div>
                                        {(user.length !== 0 && errorMessage) ? <div className="d-flex flex-column">
                                            <img src={user.avatar_url} alt="Pic" className="profile-image" />

                                            <h2 className="mt-3"><b>{user.name}</b></h2>
                                            <h3>{user.login}</h3>

                                            <hr />
                                            <p>{user.bio}</p>

                                            <hr />
                                            <span>
                                                <i className="fa-solid fa-users"></i>
                                                {user.followers} followers ; {user.following} following
                                            </span>
                                        </div> :
                                            <div className="text-center">
                                                <h3 className="mb-4">{errorMessage.message}</h3> 
                                                <div>                                                    
                                                    <a href={errorMessage.documentation_url}>{errorMessage.documentation_url}</a>
                                                </div>
                                            </div>
                                        }
                                    </div>

                                }
                            </div>
                        </div>
                    </section>

                </div>
            </div>


        </main>

    </>

}

export default HomePage;