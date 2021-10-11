// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { Link } from '../_modules/link/link';
import { Subscribe } from '../_modules/subscribe/subscribe';


$(() => {
  new Link(); // Activate Link modules logic
  new Subscribe();
  console.log('Welcome to Yeogurt!');
});
