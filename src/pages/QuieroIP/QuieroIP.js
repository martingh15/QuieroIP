import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';

//Component
import {Row, Col, Image} from "react-bootstrap";

//CSS
import "../../assets/css/QuieroIP.css";

//Images
import opcion1 from "../../assets/img/fondos/opcion1.jpg";
import opcion2 from "../../assets/img/fondos/opcion2.jpg";
import quieroIP from "../../assets/img/fondos/originales rar/QuieroIP Positivo.png";
import imagenFondo from "../../assets/img/fondos/imagenFondo.jpg";
import imagenRuben from "../../assets/img/fondos/thumbnail.jpeg";

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="contacto">
                    <p>martinghiotti@yahoo.com.ar</p>
                    <p>3412548193</p>
                </div>
                <div className="whatsapp">

                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
