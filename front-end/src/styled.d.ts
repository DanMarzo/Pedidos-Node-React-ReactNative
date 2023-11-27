import "styled-components"

declare module "styled-components"{
    export interface DefaultTheme{
        title: string;
        colors:{
            primary: string;
            secondary: string;

            dark900: string;
            dark700: string;
            
            grey100: string;

            green900: string;
            red900: string;

        }
        sizes:{
            appbar: string;
            bodtWithAppbar: string;   
            bodyNotAppbar: string;
        }
    }
}