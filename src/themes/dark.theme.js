import { createTheme } from "@material-ui/core/styles";
import ColorPallete from "./colors.palette"

const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: ColorPallete.grey7
        },
    },
});

export default darkTheme;