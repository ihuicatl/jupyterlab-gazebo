import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { ICommandPalette} from "@jupyterlab/apputils";
import { Menu } from '@lumino/widgets';

import { gazebo } from './gazebo';


export const gzMenu: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-ros/gazeboMenu',
  autoStart: true,
  requires: [ IMainMenu, ICommandPalette ],
  optional: [],
  activate: (app: JupyterFrontEnd, mainMenu: IMainMenu, palette: ICommandPalette) => {

    const { commands } = app;

    // Create a new menu
    const gzMenu: Menu = new Menu({ commands });
    gzMenu.title.label = 'Gazebo';
    mainMenu.addMenu(gzMenu, { rank: 80 });

    // Open Gazebo
    gzMenu.addItem({ command: 'jupyterlab-ros/gazebo:open' });
    gzMenu.addItem({ type: 'separator' });
  }
};

const ros: JupyterFrontEndPlugin<any>[] = [
  gzMenu,
  gazebo
];

export default ros;