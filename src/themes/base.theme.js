import darkTheme from "./dark.theme"
import lightTheme from "./light.theme"

const themeMap = {
    lightTheme,
    darkTheme
};

const themeCreator = (theme) => {
    return themeMap[theme];
}

export default themeCreator;