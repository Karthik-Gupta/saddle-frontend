import { PaletteOptions } from "@mui/material"

// Define custom color types

interface OtherColorTypes {
  divider: string
  border: string
}
declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    states?: {
      outlinedRestingBorder?: string
      outlinedHoverBackground?: string
      containedHoverBackground?: string
    }
    alert?: {
      content?: string
      background?: string
    }
  }
  interface PaletteColor {
    states?: {
      outlinedRestingBorder?: string
      outlinedHoverBackground?: string
      containedHoverBackground?: string
    }
    alert?: {
      content?: string
      background?: string
    }
  }
  interface Palette {
    mute: SimplePaletteColorOptions
    other: OtherColorTypes
  }
  interface PaletteOptions {
    mute: SimplePaletteColorOptions
    other: OtherColorTypes
  }
}

const GREY_TONES = {
  100: "#E4E4E4",
  200: "#A7A7A7",
  300: "#7D7D7D",
  500: "#404040",
  700: "#252525",
}
const lightPalette: PaletteOptions | undefined = {
  mode: "light",
  primary: {
    main: "#06D7D7",
    dark: "#037777",
    light: "#83EBEB",
    states: {
      outlinedRestingBorder: "#06D7D7",
      outlinedHoverBackground: "#E6FFFF",
      containedHoverBackground: "#037777",
    },
  },
  secondary: {
    main: "#E6AD76",
    dark: "#D07647",
    light: "#FAF3CE",
    states: {
      outlinedRestingBorder: "#E6AD76",
      outlinedHoverBackground: "#FAF3CE",
      containedHoverBackground: "#D07647",
    },
  },
  mute: {
    main: "#FAF3CE",
    light: "#FAF3CE",
    dark: "#E3D899",
    states: {
      containedHoverBackground: "#E3D899",
    },
  },
  info: {
    main: "#1E3A69",
    states: {
      outlinedRestingBorder: "#1E3A69",
      outlinedHoverBackground: "#3177EE",
      containedHoverBackground: "#18315D",
    },
    alert: {
      background: "#C9B8FB",
    },
  },
  background: {
    default: "#FAF3CE",
    paper: "#FDFDF8",
  },
  action: {
    hover: "#FAF3CE",
    hoverOpacity: 0.1,
    active: "#FFEA91",
    disabled: "#A7A7A7",
  },
  success: {
    main: "#06D7D7",
    dark: "#037777",
    light: "#83EBEB",
    alert: {
      background: "#E6FFFF",
    },
  },
  error: {
    main: "#971414",
    dark: "#68282F",
    light: "#FDA49A",
    alert: {
      background: "#FEECEB",
    },
  },
  warning: {
    main: "#971414",
    dark: "#F7D7D7",
    light: "#E16E6E",
    alert: {
      content: "#000000",
      background: "#FFF3C8",
    },
  },
  text: {
    primary: "#000000",
    secondary: "#404040",
    disabled: "#A7A7A7",
  },
  divider: "#E3D899",
  grey: GREY_TONES,
  other: {
    divider: "#E3D899",
    border: "#7D7D7D",
  },
}

const darkPalette: PaletteOptions | undefined = {
  mode: "dark",
  primary: {
    main: "#06D7D7",
    dark: "#037777",
    light: "#83EBEB",
    states: {
      outlinedRestingBorder: "#06D7D7",
      outlinedHoverBackground: "#037777",
      containedHoverBackground: "#E6FFFF",
    },
  },
  secondary: {
    main: "#E6AD76",
    dark: "#D07647",
    light: "#FAF3CE",
    states: {
      outlinedRestingBorder: "#E6AD76",
      outlinedHoverBackground: "#D07647",
      containedHoverBackground: "#FAF3CE",
    },
  },
  mute: {
    main: "#1E3A69",
    light: "#0B1928",
    dark: "#163B78",
    states: {
      containedHoverBackground: "#1E3A69",
    },
  },
  info: {
    main: "#1E3A69",
    dark: "#0B1928",
    light: "#163B78",
    states: {
      outlinedRestingBorder: "#1E3A69",
      outlinedHoverBackground: "#112740",
      containedHoverBackground: "#1C3F79",
    },
  },

  action: {
    hover: "#163B78",
    active: "#1E3A69",
    disabled: "#A7A7A7",
    disabledBackground: "#404040",
    hoverOpacity: 0.5,
    selected: "#1E3A69",
  },
  success: {
    main: "#06D7D7",
    dark: "#037777",
    light: "#83EBEB",
    alert: {
      background: "#E6FFFF",
    },
  },
  error: {
    main: "#971414",
    dark: "#68282F",
    light: "#FDA49A",
    alert: {
      background: "#FEECEB",
    },
  },
  warning: {
    main: "#971414",
    dark: "#F7D7D7",
    light: "#E16E6E",
    alert: {
      content: "#000000",
      background: "#FFF3C8",
    },
  },
  text: {
    secondary: "#E4E4E4",
    disabled: "#7D7D7D",
  },
  background: {
    default: "#0B0E14",
    paper: "#0B1928",
  },
  divider: "#1E2932",
  other: {
    divider: "#1E2932",
    border: "#7D7D7D",
  },
  grey: GREY_TONES,
}
export default { lightPalette, darkPalette }
