import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Religion = () => {
    return (
        <div className="">
            <div className="header h-40">
                <div className="header-text">
                    <div className="header-small-headings">
                        <h3 className="header-small-heading">Projects / Religious Ceremony</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="./src/assets/religion.jpg" alt="yamato-hotel" 
                         className="header-img h-40 object-center"/>
                    <div className="overlay h-40"></div>
                </div>
                <h1 className="project-title">Religious Ceremony</h1>
            </div>
            <div className="main m-0">
                <div>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/m5DL5uWUx6o" 
                            title="PE Dance Music Video | Integrated Project | 12 St. Caecilia, Group 3" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            className="video flex place-content-center my-8 bg-white shadow-lg mx-auto"></iframe>
                    <section className="description">
                        <h2 className="content-paragraph-heading">Description of Task</h2>
                        <p className="content-paragraph">For this integrated project, we were asked to perform a religious ceremony based on our own religion. We were scored based on how smoothly we could perform. Other than that, the ceremony we held is meant to be recorded, and compiled into a video that shows different parts of each religious ceremony. In the video, there will be prohibitions and rules that is associated with the religious ceremony, and this will be done in the german language as a score for the german subject.</p>
                    </section>
                    <section className="rules">
                        <h2 className="content-paragraph-heading">Regeln Während Religiöser Messen</h2>
                        <div className="w-full">
                            <div className="my-2">
                                <h2 className="font-redhat text-lg underline underline-offset-2">Erlaubnis:</h2>
                                <ul className="list-disc">
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Christian aktiv an den Gebeten, Hymnen und Antworten der Messe teilnehmen.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Christian den Lesungen aus der Bibel und der Predigt aufmerksam zuhören.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Katholik das Sakrament der Kommunion empfangen, wenn wir getaufte Katholiken im Stand der Gnade sind.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Katholik am Sonntag mit der Gemeinde beten, um Gott zu ehren.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf das Friedenszeichen denen um uns herum in respektvoller Weise anbieten.</li>
                                </ul>
                            </div>
                            <div className="my-4">
                                <h2 className="font-redhat text-lg underline underline-offset-2">Verbot:</h2>
                                <ul className="list-disc">
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Katholik uns während der Messe nicht störend verhalten, wie zum Beispiel lautes Reden oder unnötige Bewegungen.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Christian während des Gottesdienstes keine elektronischen Geräte, einschließlich Handys oder Tablets, nutzen.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Christian uns nicht unbescheiden oder unangemessen für den Anlass kleiden.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Katholik nicht stehlen.</li>
                                    <li className="content-paragraph indent-0 mb-2 ml-5">Man darf als Christian nicht zu spät kommen oder zu früh von der Messe weggehen.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Religion;