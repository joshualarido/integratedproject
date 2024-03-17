import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Home = () => {
    return (
        <div className="content-heading-container">
            <h3 className="content-heading">General / Home</h3>
            <h3 className="content-heading text-right">{date}</h3>
        </div>
    );
};

export default Home;