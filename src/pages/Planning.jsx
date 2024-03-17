import moment from "moment";

var date = moment().format("dddd, Do MMMM, YYYY");

const Planning = () => {
    return (
        <div className="content-heading-container">
            <h3 className="content-heading">General / Planning</h3>
            <h3 className="content-heading text-right">{date}</h3>
        </div>
    );
};

export default Planning;