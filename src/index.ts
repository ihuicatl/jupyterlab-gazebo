import { JupyterFrontEndPlugin } from '@jupyterlab/application';

import { menu } from './menu';
import { gazebo } from './gazebo';

const ros: JupyterFrontEndPlugin<any>[] = [
  menu,
  gazebo
];

export default ros;