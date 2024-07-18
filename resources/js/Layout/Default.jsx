import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Layout({ children })  {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            LARAVEL + INERTIA.JS
                        </Link>
                        <button className="navbar-tooggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toogle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/posts">POSTS</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://google.com" className="nav-link" target="_blank">EBOOK</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://google.com" className="nav-link" target="_blank">TUTORIAL SET</a>
                                </li>                                
                            </ul>
                            <form className="d-flex">
                                <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">
                { children }
            </main>
        </>
    )
}

export default Layout