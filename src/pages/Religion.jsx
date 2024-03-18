import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Religion = () => {
    return (
        <div className="">
            <div className="content-header">
                <div className="image-container">
                    <img src="./src/assets/hotel-yamato.jpg" alt="hotel-yamato.jpg"
                            className="header-img"/>
                    <div className="overlay"></div>
                </div>
                <div className="content-heading-container">
                    <div className="content-headings">
                        <h3 className="content-heading">Projects / Religious Ceremony</h3>
                        <h3 className="content-heading text-right">{date}</h3>
                    </div>
                </div>
                <h1 className="page-header">Yamato Hotel Incident: The Game</h1>
            </div>
            <div className="content-main">
                <div>
                    <div className="flex place-content-center my-8">
                        <div className="p-3 md h-[480px] w-[854px] bg-white shadow-lg"></div>
                    </div>
                    <h2 className="content-paragraph-heading">Description</h2>
                    <p className="content-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor animi aliquid maiores voluptas! Neque, asperiores dolor! Odit est alias vel eos fuga reprehenderit quae sit autem nemo! Officiis, consequatur incidunt, culpa explicabo eaque sequi exercitationem in facilis, laboriosam ea accusamus quisquam dolores nulla possimus magnam impedit. Nisi reiciendis nobis pariatur incidunt perspiciatis at eius nam ex aperiam cum beatae dolorum, ad velit delectus labore non nemo. Nihil quos excepturi assumenda, similique cum perspiciatis sint nobis iusto, eum cumque distinctio laborum exercitationem dolores modi. Nisi facilis inventore obcaecati ullam reiciendis nam deleniti tenetur voluptatibus, voluptatem ducimus velit tempora aliquid ipsum.</p>
                </div>
            </div>
        </div>
    );
};

export default Religion;