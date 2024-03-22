import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Tempe = () => {
    return (
        <div className="">
            <div className="header h-40">
                <div className="header-text">
                    <div className="header-small-headings">
                        <h3 className="header-small-heading">Projects / Art Mosaic</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="assets/mosaic.jpeg" alt="yamato-hotel" 
                         className="header-img h-40 object-center"/>
                    <div className="overlay h-40"></div>
                </div>
                <h1 className="project-title">Art Mosaic</h1>
            </div>
            <div className="main m-0">
                <div className="mt-5">
                    <div className="mosaic-container w-full flex mb-6">
                        <div className="mosaic w-1/3 mx-3 shadow-lg">
                            <img src="assets/mosaic/carol.jpg" alt="mosaic" />
                            <div className="mosaic-text p-3 text-center bg-white">
                                <h2 className="mosaic-name font-redhat font-bold text-lg">Carol E. V. Tapilatu</h2>
                                <h3 className="mosaic-info font-redhat text-base">12 St. Caecilia / 03</h3>
                            </div>
                        </div>
                        <div className="mosaic w-1/3 mx-3 shadow-lg">
                            <img src="assets/mosaic/efrel.jpg" alt="mosaic" />
                            <div className="mosaic-text p-3 text-center bg-white">
                                <h2 className="mosaic-name font-redhat font-bold text-lg">Efarrell Leif P. S.</h2>
                                <h3 className="mosaic-info font-redhat text-base">12 St. Caecilia / 05</h3>
                            </div>
                        </div>
                        <div className="mosaic w-1/3 mx-3 shadow-lg">
                            <img src="assets/mosaic/irenn.jpg" alt="mosaic" />
                            <div className="mosaic-text p-3 text-center bg-white">
                                <h2 className="mosaic-name font-redhat font-bold text-lg">Iren Vionika</h2>
                                <h3 className="mosaic-info font-redhat text-base">12 St. Caecilia / 09</h3>
                            </div>
                        </div>
                    </div>
                    <div className="mosaic-container w-full flex mb-6">
                        <div className="mosaic w-1/3 mx-3 shadow-lg">
                            <img src="assets/mosaic/josh.jpg" alt="mosaic" />
                            <div className="mosaic-text p-3 text-center bg-white">
                                <h2 className="mosaic-name font-redhat font-bold text-lg">Joshua A. Larido</h2>
                                <h3 className="mosaic-info font-redhat text-base">12 St. Caecilia / 10</h3>
                            </div>
                        </div>
                        <div className="mosaic w-1/3 mx-3 shadow-lg">
                            <img src="assets/mosaic/lg.jpg" alt="mosaic" />
                            <div className="mosaic-text p-3 text-center bg-white">
                                <h2 className="mosaic-name font-redhat font-bold text-lg">Lizette Gretchen</h2>
                                <h3 className="mosaic-info font-redhat text-base">12 St. Caecilia / 12</h3>
                            </div>
                        </div>
                        <div className="mosaic w-1/3 mx-3 shadow-lg">
                            <img src="assets/mosaic/michael.jpg" alt="mosaic" />
                            <div className="mosaic-text p-3 text-center bg-white">
                                <h2 className="mosaic-name font-redhat font-bold text-lg">Michael Gianni</h2>
                                <h3 className="mosaic-info font-redhat text-base">12 St. Caecilia / 16</h3>
                            </div>
                        </div>
                    </div>
                    <section className="description">
                        <h2 className="content-paragraph-heading">Description of Task</h2>
                        <p className="content-paragraph">Every student in the group had to make a type of art called a mosaic, and in our class, the subject/character of the art was taken from Disney. The mosaic art was made on a huge black paper and a sketch was drawn on top. The next step was to make a cobweb-like pattern to hold the art together, because after that the empty spaces have to be cut with a cutter. The empty spaces then will be covered and attached with coloured mica plastic sheets by using double tapes on the back. The result is then captured as an image as well.</p>
                    </section>    
                </div>
            </div>
        </div>
    );
};

export default Tempe;