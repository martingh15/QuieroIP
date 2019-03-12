import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';

//Component
import {Row} from "react-bootstrap";
import QuieroIP from "../../pages/QuieroIP/QuieroIP";
//Images
import opcion1 from "../../assets/img/fondos/opcion1.jpg";
import opcion2 from "../../assets/img/fondos/opcion2.jpg";

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="quieroIP">
                <QuieroIP/>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
