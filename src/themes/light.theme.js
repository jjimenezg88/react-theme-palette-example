import { createTheme } from "@material-ui/core/styles";
import ColorPallete from "./colors.palette"


const lightTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: ColorPallete.clearMain
        },
        text: {
            version: ColorPallete.grey5,
            userName: ColorPallete.grey1,
            userMail: ColorPallete.grey4,
            sidebar: ColorPallete.grey3
        },
        // background: {
        //     paper: ColorPallete.grey7
        // }
    }
});

export default lightTheme;