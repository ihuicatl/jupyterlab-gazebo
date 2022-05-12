import { IFrame } from '@jupyterlab/apputils';
import { PageConfig } from '@jupyterlab/coreutils';

export default class GazeboWidget extends IFrame {
    constructor() {
        super();
        const baseURL = PageConfig.getBaseUrl();
        this.url = baseURL + 'gazebo/app/index.html';
        console.log(this.url);
        this.id = 'Gazebo';
        this.title.label = 'Gazebo';
        this.title.closable = true;
        this.node.style.overflowY = 'auto';
        this.node.style.background = '#000'
        // this.addClass('gazebo-view');  // Used for css

        this.sandbox = [
            'allow-forms',
            'allow-modals',
            'allow-orientation-lock',
            'allow-pointer-lock',
            'allow-popups',
            'allow-presentation',
            'allow-same-origin',
            'allow-scripts',
            'allow-top-navigation',
            'allow-top-navigation-by-user-activation'
        ];
    }

    dispose(): void { super.dispose() }
    onCloseRequest(): void { this.dispose() }
}

// class GazeboWidget extends Widget {
//     constructor() {
//         super();
//         this.addClass('gazebo-view');  // Used for css
//         this.id = 'gazebo-widget';
//         this.title.label = 'Gazebo';
//         this.title.closable = true;
//     }
// }