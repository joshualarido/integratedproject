import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Tempe = () => {
    return (
        <div className="">
            <div className="header h-40">
                <div className="header-text">
                    <div className="header-small-headings">
                        <h3 className="header-small-heading">Projects / Tempeh Production</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="./src/assets/tempe.jpg" alt="yamato-hotel" 
                         className="header-img h-40 object-center"/>
                    <div className="overlay h-40"></div>
                </div>
                <h1 className="project-title">Tempeh Production</h1>
            </div>
            <div className="main mt-5">
                <div className="report-container bg-white w-fit mx-auto shadow-lg card">
                    <a href="https://docs.google.com/document/d/1Ex9575ImGE3HrpNVnzL03fTy86ulagSVtkO_u_USlXw/edit?usp=sharing"
                    className="" target="_blank">
                        <img src="./src/assets/tempe-report.png" alt=""
                            className=""/>
                    </a>
                </div>
                <div className="mt-7">
                    <section className="description">
                        <h2 className="content-paragraph-heading">Description of Task</h2>
                        <p className="content-paragraph">For all the Science core subjects, namely Biology, Chemistry, and Physics, we had to make tempeh from scratch. Additionally, for Math, we had to cut and mould the finished tempeh into mathematically constructed shapes, and for Bahasa Indonesia, we had to write a scientific report in Indonesian documenting the process of making our tempeh. The soybeans were prepared at home, and we mixed in the tempeh starter at school and let it ferment for three days. This practical experiment was beneficial for us as we were able to learn how to make tempeh and how fermentation happens, so now we can use this experience to make better tempeh in the future.</p>
                    </section> 
                </div>
            </div>
        </div>
    );
};

export default Tempe;