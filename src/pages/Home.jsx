import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Home = () => {
    return (
        <div className="body">
            <div className="header">
                <div className="header-text">
                    <div className="header-small-headings">
                        <h3 className="header-small-heading">General / Home</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                    <div className="header-group-title">
                        <h2 className="w-full font-redhat text-white text-2xl text-center mb-2">Hi, we are</h2>
                        <h1 className="w-full font-redhat text-white text-5xl font-bold text-center mb-3">12 St. Caecilia's Group 3</h1>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="assets/group-picture.jpg" alt="yamato-hotel" 
                         className="header-img h-52 object-center"/>
                    <div className="overlay h-52"></div>
                </div>
            </div>
            <div className="main m-0">
                <div>
                    <section className="intro flex mb-10">
                        <img src="assets/group-picture.jpg" alt="group-picture"
                             className="w-1/2 shadow-xl mr-10 object-cover"/>
                        <p className="content-paragraph w-1/2">The Grade 12 Integrated Project held in March 2024 combines multiple subjects into practical group projects. Divided into smaller tasks, the main project involves creating tempeh and writing a report, integrating Biology, Chemistry, Physics, Math, and Bahasa Indonesia. Another task entails coding a game with Construct 2, blending ITP, History, CME, and English. Additional projects include religious ceremonies, dance choreography, group portfolios, and a Chinese New Year report. These diverse activities culminate in uploading recordings onto a self-coded website, showcasing our collaborative efforts across various subjects.
</p>
                    </section>
                    <section className="members w-full mb-10">
                        <h2 className="content-paragraph-heading mb-2">Our Members</h2>
                        <div className="members-list w-full flex">
                            <div className="member">
                                <img src="assets/profile/carol-profile.jpg" alt="pfp"
                                     className="member-image"/>
                                <div className="member-text">
                                    <h2 className="member-name">Carolynn E. V. Tapilatu</h2>
                                    <h3 className="member-info">12 St. Caecilia / 03</h3>
                                </div>
                            </div>
                            <div className="member">
                                <img src="assets/profile/efrel-profile.jpg" alt="pfp"
                                     className="member-image"/>
                                <div className="member-text">
                                    <h2 className="member-name">Efarrell Leif <br></br> P. S.</h2>
                                    <h3 className="member-info">12 St. Caecilia / 05</h3>
                                </div>
                            </div>
                            <div className="member">
                                <img src="assets/profile/iren-profile.jpg" alt="pfp"
                                     className="member-image"/>
                                <div className="member-text">
                                    <h2 className="member-name">Iren <br></br> Vionika</h2>
                                    <h3 className="member-info">12 St. Caecilia / 09</h3>
                                </div>
                            </div>
                            <div className="member">
                                <img src="assets/profile/josh-profile.jpg" alt="pfp"
                                     className="member-image"/>
                                <div className="member-text">
                                    <h2 className="member-name">Joshua A. Larido</h2>
                                    <h3 className="member-info">12 St. Caecilia / 10</h3>
                                </div>
                            </div>
                            <div className="member">
                                <img src="assets/profile/lg-profile.jpg" alt="pfp"
                                     className="member-image"/>
                                <div className="member-text">
                                    <h2 className="member-name">Lizette Gretchen</h2>
                                    <h3 className="member-info">12 St. Caecilia / 12</h3>
                                </div>
                            </div>
                            <div className="member">
                                <img src="assets/profile/michael-profile.jpg" alt="pfp"
                                     className="member-image"/>
                                <div className="member-text">
                                    <h2 className="member-name">Michael <br></br> Gianni</h2>
                                    <h3 className="member-info">12 St. Caecilia / 16</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="links">
                        <h2 className="content-paragraph-heading mb-2">Important 
                             Documents</h2>
                        <div className="document-list w-full flex">
                            <a href="https://docs.google.com/spreadsheets/d/10KTr8WRkJmgYMgyfanavtrlPBQ-qgYGU6P53HSrAEhE/edit#gid=1721329833" target="_blank" className="document">
                                <img src="assets/excel.png" alt="docs"
                                     className="document-icon"/>
                                <div className="document-text">
                                    <h2 className="document-name">Task Management</h2>
                                    <h3 className="document-created">Created 29 February, 2024</h3>
                                </div>
                            </a>
                            <a href="https://docs.google.com/document/d/1ODeuVCD-SVdUlDh_lWwFohxmHULxqkQKiytoZchcYW4/edit#heading=h.jd1co04yck39" target="_blank" className="document">
                                <img src="assets/docs.png" alt="docs"
                                     className="document-icon"/>
                                <div className="document-text">
                                    <h2 className="document-name">Project Docs</h2>
                                    <h3 className="document-created">Created 10 March, 2024</h3>
                                </div>
                            </a>
                            <a href="https://drive.google.com/drive/u/1/folders/1Rl2uS1WRFAE73ba8WLnJzOgLo_sLDTrQ" target="_blank" className="document">
                                <img src="assets/drive.png" alt="docs"
                                     className="document-icon"/>
                                <div className="document-text">
                                    <h2 className="document-name">Project Drive</h2>
                                    <h3 className="document-created">Created 10 March, 2024</h3>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;