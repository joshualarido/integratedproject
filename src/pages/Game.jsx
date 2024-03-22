import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Game = () => {
    return (
        <div className="">
            <div className="header h-40">
                <div className="header-text">
                    <div className="header-small-headings">
                        <h3 className="header-small-heading">Projects / Construct 2 Game</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="./src/assets/hotel-yamato.jpg" alt="yamato-hotel" 
                         className="header-img h-40"/>
                    <div className="overlay h-40"></div>
                </div>
                <h1 className="project-title">Hotel Yamato 1945</h1>
            </div>
            <div className="main m-0">
                <div>
                    <iframe width="512" height="448" allow="fullscreen; autoplay; encrypted-media" 
                            src="https://games.construct.net/62578/latest" 
                            frameborder="0" allowfullscreen="true" msallowfullscreen="true" 
                            mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" 
                            referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" 
                            scrolling="no"
                            className="mx-auto my-7"></iframe>
                    <section className="description">
                        <h2 className="content-paragraph-heading">Description of the Game</h2>
                        <p className="content-paragraph">In this integrated project, we were asked to make a game that has themes of Indonesian history and nationalism. To encapsulate both of these requirements, we have made a game that combines the classic Super Mario Bros. gameplay, with the storyline of the Yamato Hotel incident which occured in Surabaya, on 19 September 1945. You act as an Indonesian youth that has just witnessed the flag of your oppressors be raised on a leisureplace in your home town. Offended by this, you stage a raid of the Yamato Hotel and rip off the blue stripe of the Dutch flag to turn it into the Indonesian Flag.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Game;