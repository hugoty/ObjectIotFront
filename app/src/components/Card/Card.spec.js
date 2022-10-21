import React from 'react';
import { mount } from 'enzyme';

import Card from './Card';

describe('Card component', () => {
    it('should match snapshot', () => {
        expect(mount(<Card />)).toMatchSnapshot();
    });
});
