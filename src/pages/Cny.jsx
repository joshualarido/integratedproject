import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Game = () => {
    return (
        <div className="">
            <div className="header h-40">
                <div className="header-text">
                    <div className="header-small-headings">
                        <h3 className="header-small-heading">Projects / Chinese New Year Report</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="./src/assets/cny.jpg" alt="yamato-hotel" 
                         className="header-img h-40"/>
                    <div className="overlay h-40"></div>
                </div>
                <h1 className="project-title">Chinese New Year Report</h1>
            </div>
            <div className="main m-0">
                <div>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/jIKAQEsBVl8" 
                            title="PE Dance Music Video | Integrated Project | 12 St. Caecilia, Group 3" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            className="video flex place-content-center my-8 bg-white shadow-lg mx-auto"></iframe>
                    <section className="description">
                        <h2 className="content-paragraph-heading">Description of the Task</h2>
                        <p className="content-paragraph">In January, the Mandarin students were asked to prepare a performance for a joint event of Chinese New Year and Valentine’s Day in February, called “Love Under the Lanterns”. The Mandarin students of Grade 12 were asked to perform and were divided into several groups, which were drama, dance, and kungfu, while some also took part in the decoration team. Iren and Michael from this group were assigned to take part in the drama performance, which is about the Legend of Beast Nian, and we became the villagers on the first scene and kids on the second scene. This then will be the topic for the Mandarin part of the integrated project, which is to make a report video describing and explaining several things related to the event itself.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Game;