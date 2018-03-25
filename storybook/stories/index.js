import React from 'react';
import { storiesOf } from '@storybook/react';

import './../../dist/components'

storiesOf('Button', module)
  .add('with text', () => <au-button>Hello</au-button>)
