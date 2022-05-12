import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin,
    ILayoutRestorer
} from '@jupyterlab/application';

import {
    ICommandPalette,
    WidgetTracker
} from '@jupyterlab/apputils';

// import { Widget } from '@lumino/widgets';
import GazeboWidget from "./gazebo";


/**
 * Initialization data for the jupyterlab-gazebo extension.
 */
export const gazebo: JupyterFrontEndPlugin<void> = {
    id: 'jupyterlab-ros/gazebo',
    autoStart: true,
    requires: [ICommandPalette, ILayoutRestorer],
    activate: (app: JupyterFrontEnd, palette: ICommandPalette, restorer: ILayoutRestorer) => {
        console.log('JupyterLab extension jupyterlab-gazebo is activated!');
        const { commands, shell } = app;

        let widget: any = null;
        let command = 'jupyterlab-ros/gazebo:open';

        const tracker = new WidgetTracker<GazeboWidget>({
            namespace: 'gazebo'
        });

        restorer.restore(tracker, {
            command: command,
            name: () => 'gazebo'
        });

        commands.addCommand(command, {
            label: 'Open Gazebo',
            caption: 'Open a new Gazebo view.',
            isVisible: () => true,
            isEnabled: () => true,
            isToggled: () => widget !== null,
            execute: () => {
                if (widget) {
                    widget.dispose();
                } else {
                    widget = new GazeboWidget();
                    widget.disposed.connect(() => {
                        widget = null;
                        commands.notifyCommandChanged();
                    });

                    shell.add(widget, 'main');
                    tracker.add(widget);

                    widget.update();
                    commands.notifyCommandChanged();
                }
            },
        });

        palette.addItem({ command, category: 'ROS' });
    }
};

export default gazebo;

