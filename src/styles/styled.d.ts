import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {

        title: string;

        colors: {

            blue: string;
            background: string;
            component: string;
            text: string;

        }

    }

}