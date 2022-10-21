import React from 'react';
import { string } from 'prop-types';

import {
    Title,
} from './styles';

function Card ({
    title,
}) {
    return (
        <Title>{title}</Title>
    );
}

Card.defaultProps = {
    title: "",
};

Card.propTypes = {
    title: string,
};

export default Card;
