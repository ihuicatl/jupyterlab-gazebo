import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-gazebo extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-gazebo:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-gazebo is activated!');
  }
};

export default plugin;
