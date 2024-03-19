import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Game = () => {
    return (
        <div className="">
            <div className="header h-40 bg-gray-600">
                <div className="header-text py-7 px-10 z-10 relative">
                    <div className="header-small-headings flex justify-between mb-4">
                        <h3 className="header-small-heading">General / Home</h3>
                        <h3 className="header-small-heading">{date}</h3>
                    </div>
                </div>
                <div className="header-bg">
                    <img src="./src/assets/hotel-yamato.jpg" alt="yamato-hotel" 
                         className="w-full h-40 object-cover absolute top-0 left-0 z-0 object-bottom"/>
                    <div className="overlay w-full h-40 bg-black opacity-50 absolute top-0 left-0"></div>
                </div>
                <h1 className="project-title w-max font-redhat text-black text-3xl font-bold text-center
                               relative z-10 mt-10 bg-white py-3 px-5 mx-auto shadow-lg">Yamato Hotel Incident: The Game</h1>
            </div>
            <div className="main m-0 py-5 px-20">
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

export default Game;