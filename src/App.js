import React from 'react';
import Navbar from './pages/Navbar';
import Carousel from './pages/Carusel';
import Footer from './pages/Footer';

const App = () => {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <h1>Красивые пейзажи</h1>
                    <Carousel />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
