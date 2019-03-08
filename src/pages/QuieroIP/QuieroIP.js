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

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="QuieroIP">
                <div className="fondo">
                    {/*<Image className="fondo" src={imagenFondo} fluid rounded/>*/}
                    <Row className="contenedorInfo">
                        <div className="">
                            {/*<Image className="logo" src={quieroIP}/>*/}
                        </div>
                    </Row>
                </div>z
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
