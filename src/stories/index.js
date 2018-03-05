import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import {
  Work1,
  Work2,
  Work3,
  Work4,
  Work5,
  WorkIntroduction
} from '../components/Work';
import theme from '../constants/theme';
import '../index.css';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('Work', module)
  .add('with WorkIntroduction', () => <WorkIntroduction />)
  .add('with Work1', () => <Work1 />)
  .add('with Work2', () => <Work2 />)
  .add('with Work3', () => <Work3 />)
  .add('with Work4', () => <Work4 />)
  .add('with Work5', () => <Work5 />);



storiesOf('Introduction', module)
  .add('with Introduction', () => <Introduction />);

storiesOf('Footer', module)
  .add('with footer', () => <Footer />);

