import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Card from './Card';

storiesOf('Card', module)
    .add('with title', withInfo()(() => (
        <Card title="Card title" />
    )));
