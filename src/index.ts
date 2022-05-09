import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { Widget } from '@lumino/widgets';
import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-gazebo extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-gazebo:plugin',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyterlab-gazebo is activated!');
    const { commands, shell } = app;
    const command = 'widgets:open-tab';

    commands.addCommand(command, {
      label: 'Open Gazebo',
      caption: 'Open the Gazebo widget tab',
      execute: () => {
        const widget = new ExampleWidget();
        shell.add(widget, 'main');
      },
    });
    palette.addItem({ command, category: 'Gazebo Extension' });
  }
};

export default plugin;

class ExampleWidget extends Widget {
  constructor() {
    super();
    this.addClass('gazebo-view');  // Used for css
    this.id = 'gazebo-widget';
    this.title.label = 'Gazebo';
    this.title.closable = true;
  }
}