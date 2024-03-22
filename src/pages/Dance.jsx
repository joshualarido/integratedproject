import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Dance = () => {
    return (
        <div className="">
            <div className="header h-40">
                <div className="header-text">
                    <div className="header-small-headings">
                        <h3 className="header-small-heading">Projects / Dance Music Video</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="assets/september.jpg" alt="yamato-hotel" 
                         className="header-img h-40 object-center"/>
                    <div className="overlay h-40"></div>
                </div>
                <h1 className="project-title">September - Earth, Wind & Fire</h1>
            </div>
            <div className="main m-0">
                <div>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/GLOjsGxc1E0" 
                            title="PE Dance Music Video | Integrated Project | 12 St. Caecilia, Group 3" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            className="video flex place-content-center my-8 bg-white shadow-lg mx-auto"></iframe>
                    <section className="description">
                        <h2 className="content-paragraph-heading">Description of Task</h2>
                        <p className="content-paragraph">In our physical education lesson, our task was to create a dance choreography lasting for at least 2 minutes. We were given the freedom to choose our own dance style or follow choreography that was available on YouTube. This assignment allowed us to explore our creativity and express ourselves through movement, while also encouraging us to learn more complex choreographies.</p>
                        <p className="content-paragraph">After some discussion, we settled on using the song "September" by Earth, Wind & Fire. We felt it was a lively tune that suited the energy of our group. The choreography that we found on YouTube also seemed manageable for us, given our dancing skills. Everyone in the group agreed that using this song was a great idea.</p>
                        <p className="content-paragraph">In this quarter, we have learned various dance moves during the lesson. Our teacher, Mr. Peter gave us some dance moves ideas for us to use. So, after selecting the song, Joshua and Iren found a fun dance on YouTube using the selected song and thought about using it for our choreography. But the others found it too hard to do. So, we looked for something easier and found the "Just Dance" version, which we thought we could handle. We decided to get ideas from that video for most of our dance moves. Also, we came up with some moves on the spot, just going with how we felt. Mr. Peter helped us with one of our moves too.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Dance;