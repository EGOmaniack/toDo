import styled, { injectGlobal } from 'styled-components';

const RussoOneTtf = require('../fonts/RussoOne-Regular.ttf');

const Roboto = require('../fonts/Roboto/Roboto-Black.ttf');
const RobotoBlackItalic = require('../fonts/Roboto/Roboto-Blackitalic.ttf');
const RobotoBold = require('../fonts/Roboto/Roboto-Bold.ttf');
const RobotoBoldItalic = require('../fonts/Roboto/Roboto-Bolditalic.ttf');
const RobotoItalic = require('../fonts/Roboto/Roboto-italic.ttf');
const RobotoLight = require('../fonts/Roboto/Roboto-Light.ttf');
const RobotoLightItalic = require('../fonts/Roboto/Roboto-Lightitalic.ttf');
const RobotoMedium = require('../fonts/Roboto/Roboto-Medium.ttf');
const RobotoMediumItalic = require('../fonts/Roboto/Roboto-Mediumitalic.ttf');
const RobotoRegular = require('../fonts/Roboto/Roboto-Regular.ttf');
const RobotoThin = require('../fonts/Roboto/Roboto-Thin.ttf');
const RobotoThinItalic = require('../fonts/Roboto/Roboto-Thinitalic.ttf');

/*'https://fonts.googleapis.com/css?family=Roboto');*/

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium});
    src: url(${Roboto}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* @font-face {
    font-family: 'RobotoItalic';
    src: url(${RobotoBlackItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  } */

  @font-face {
    font-family: 'RussoOne';
    src: url(${RussoOneTtf}) format('truetype');
  }
`;