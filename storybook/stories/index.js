import React from 'react';
import { storiesOf } from '@storybook/react';

import '../components/components.js'

storiesOf('Button', module)
  .add('with text', () => <au-button>Hello</au-button>)
