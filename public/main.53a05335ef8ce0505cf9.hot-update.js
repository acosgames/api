"use strict";
self["webpackHotUpdateapi"]("main",{

/***/ "../client/src/theme.js":
/*!******************************!*\
  !*** ../client/src/theme.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "../client/node_modules/@chakra-ui/theme-utils/dist/chunk-AQYX3YP4.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// theme.js

// 1. import `extendTheme` function


const styles = {
  global: {
    'html': {
      'fontSize': '62.5%',
      'WebkitTextSizeAdjust': '100%',
      'MozTextSizeAdjust': '100%',
      'textSizeAdjust': '100%',
      'fontFeatureSettings': '"kern","lig"'
    },
    'html, body': {
      //color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: 'gray.900',
      color: '#212529',
      fontWeight: 500
    },
    'body': {
      'fontSize': '160%'
    },
    '::selection': {
      background: 'gray.400' /* WebKit/Blink Browsers */
    },

    '::-moz-selection': {
      background: 'gray.400' /* Gecko Browsers */
    }
  }
};

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};
const fonts = {
  // body: "proxima-nova, sans-serif;",
  // heading: "proxima-nova, sans-serif;"
  body: `'Inter', sans-serif`,
  heading: `'Chakra Petch', sans-serif`
  // heading: '"Inter", "Oswald", sans-serif;',
  //body: '"Inter", "Oswald", sans-serif;'
};

const colors = {
  blacks: {
    100: "#181818",
    150: "rgb(15,15,15)",
    200: "rgb(20,20,20)",
    300: "rgb(30,30,30)",
    400: "rgb(40,40,40)",
    500: "rgb(50,50,50)",
    600: "rgb(60,60,60)",
    700: "rgb(70,70,70)",
    800: "rgb(80,80,80)",
    900: "rgb(90,90,90)"
  },
  brand: {
    50: '#e7fef7',
    75: '#9cf9dd',
    100: "#73f6cf",
    200: '#37f3bb',
    300: "#0ef0ad",
    400: '#0aa879',
    500: "#09926a",
    600: "#52c548",
    700: "#63ed56",
    900: "#63ed56",
    1000: "#31752b"
  },
  blues: {
    50: '#e9ebfd',
    75: '#a6abf8',
    100: '#8188f5',
    200: '#4b55f0',
    300: '#2632ed',
    400: '#1b23a6',
    500: '#171f91'
  },
  //experimental blue
  gray: {
    0: '#ffffff',
    10: '#fafafb',
    20: '#f6f6f6',
    30: '#ecedee',
    40: '#e1e1e3',
    50: '#c5c5ca',
    60: '#b7b7bd',
    70: '#abacb2',
    80: '#9d9ea5',
    90: '#8f9098',
    100: '#81828b',
    125: 'rgb(213,217,224)',
    150: 'rgb(189, 193, 199)',
    175: 'rgb(165, 168, 173)',
    200: '#73747f',
    300: '#656772',
    400: '#5a5b67',
    500: '#4c4d5a',
    600: '#404250',
    700: '#303141',
    750: '#252525',
    800: '#222434',
    850: '#1e1e1e',
    900: '#161829',
    1000: '#060606',
    1100: '#030303',
    1200: '#000'
  },
  pl: {
    50: '#e6eeeb',
    75: '#99b8af',
    100: '#6e9a8d',
    200: '#306f5c',
    300: '#05513b',
    400: '#043929',
    500: '#033124'
  },
  sl: {
    50: '#e7e8f8',
    75: '#9da1e4',
    100: '#747ad9',
    200: '#3841c8',
    300: '#0f1abd',
    400: '#0b1284',
    500: '#091073'
  },
  //originals
  /*
   gray: {
      50: 'rgb(254,254,255)',
      100: 'rgb(237,241,250)',
      125: 'rgb(213,217,224)',
      150: 'rgb(189, 193, 199)',
      175: 'rgb(165, 168, 173)',
      200: 'rgb(137,156,199)',
      300: 'rgb(120,136,173)',
      400: 'rgb(102,116,148)',
      500: 'rgb(84,96,122)',
      600: 'rgb(67,76,97)',
      700: 'rgb(49,56,71)',
      750: 'rgb(40,46,59)',
      800: 'rgb(32,36,46)',
      850: 'rgb(23,26,33)',
      900: 'rgb(14,16,20)',
      1000: 'rgb(3,6,12)'
  },
  */
  acos: {
    100: '#111',
    200: '#222',
    300: '#333'
  }

  // root: {
  //     "bs-blue": '#0d6efd',
  //     "bs-indigo": '#6610f2',
  //     "bs-purple": '#6f42c1',
  //     "bs-pink": '#d63384',
  //     "bs-red": '#dc3545',
  //     "bs-orange": '#fd7e14',
  //     "bs-yellow": '#ffc107',
  //     "bs-green": '#198754',
  //     "bs-teal": '#20c997',
  //     "bs-cyan": '#0dcaf0',
  //     "bs-black": '#000',
  //     "bs-white": '#fff',
  //     "bs-gray": '#6c757d',
  //     "bs-gray-dark": '#343a40',
  //     "bs-gray-100": '#f8f9fa',
  //     "bs-gray-200": '#e9ecef',
  //     "bs-gray-300": '#dee2e6',
  //     "bs-gray-400": '#ced4da',
  //     "bs-gray-500": '#adb5bd',
  //     "bs-gray-600": '#6c757d',
  //     "bs-gray-700": '#495057',
  //     "bs-gray-800": '#343a40',
  //     "bs-gray-900": '#212529',
  //     "bs-primary": '#0d6efd',
  //     "bs-secondary": '#6c757d',
  //     "bs-success": '#198754',
  //     "bs-info": '#0dcaf0',
  //     "bs-warning": '#ffc107',
  //     "bs-danger": '#dc3545',
  //     "bs-light": '#f8f9fa',
  //     "bs-dark": '#212529',
  //     "bs-primary-rgb": '13, 110, 253',
  //     "bs-secondary-rgb": '108, 117, 125',
  //     "bs-success-rgb": '25, 135, 84',
  //     "bs-info-rgb": '13, 202, 240',
  //     "bs-warning-rgb": '255, 193, 7',
  //     "bs-danger-rgb": '220, 53, 69',
  //     "bs-light-rgb": '248, 249, 250',
  //     "bs-dark-rgb": '33, 37, 41',
  //     "bs-white-rgb": '255, 255, 255',
  //     "bs-black-rgb": '0, 0, 0',
  //     "bs-body-color-rgb": '33, 37, 41',
  //     "bs-body-bg-rgb": '255, 255, 255',
  //     "bs-font-sans-serif": 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  //     "bs-font-monospace": 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  //     "bs-gradient": 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
  //     "bs-body-font-family": 'var("bs-font-sans-serif)',
  //     "bs-body-font-size": '1rem',
  //     "bs-body-font-weight": '400',
  //     "bs-body-line-height": '1.5',
  //     "bs-body-color": '#212529',
  //     "bs-body-bg": '#fff',
  //     "bs-border-width": '1px',
  //     "bs-border-style": 'solid',
  //     "bs-border-color": '#dee2e6',
  //     "bs-border-color-translucent": 'rgba(0, 0, 0, 0.175)',
  //     "bs-border-radius": '0.375rem',
  //     "bs-border-radius-sm": '0.25rem',
  //     "bs-border-radius-lg": '0.5rem',
  //     "bs-border-radius-xl": '1rem',
  //     "bs-border-radius-2xl": '2rem',
  //     "bs-border-radius-pill": '50rem',
  //     "bs-link-color": '#0d6efd',
  //     "bs-link-hover-color": '#0a58ca',
  //     "bs-code-color": '#d63384',
  //     "bs-highlight-bg": '#fff3cd'
  // }
};

const fontSizes = {
  '3xs': "0.8rem",
  '2xs': "1rem",
  xxs: "1.2rem",
  xs: "1.4rem",
  sm: "1.6rem",
  md: "1.8rem",
  lg: "2rem",
  xl: "2.2rem",
  '2xl': "2.4rem",
  '3xl': "2.8rem",
  '4xl': "3.2rem"
};
const components = {
  Tooltip: {
    baseStyle: {
      bgColor: 'gray.700',
      color: 'gray.100',
      top: '1rem',
      p: "1rem"
    },
    defaultProps: {
      variant: 'base'
    }
  },
  Button: {
    baseStyle: {
      bgColor: 'transparent',
      outline: 'none',
      bgGradient: 'none',
      _active: {
        outline: 'none',
        boxShadow: 'none',
        bgGradient: 'none'
      },
      _hover: {
        outline: 'none',
        boxShadow: 'none',
        bgGradient: 'none'
      },
      _focus: {
        outline: 'none',
        boxShadow: 'none',
        bgGradient: 'none'
      }
    },
    variants: {
      base: {
        bgColor: 'transparent',
        outline: 'none',
        _active: {
          outline: 'none'
        },
        _hover: {
          outline: 'none'
        },
        _focus: {
          outline: 'none'
        }
      }
    },
    defaultProps: {
      variant: 'base'
    }
  }
};

// 3. extend the theme
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  config,
  fonts,
  colors,
  styles,
  fontSizes,
  components
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bcd55bdd5539df4441c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLFNBQVM7SUFDZixJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0RDLEVBQUUsRUFBRTtJQUNBLEVBQUUsRUFBRSxTQUFTO0lBQ2IsRUFBRSxFQUFFLFNBQVM7SUFDYixHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRTtFQUNULENBQUM7RUFDREMsRUFBRSxFQUFFO0lBQ0EsRUFBRSxFQUFFLFNBQVM7SUFDYixFQUFFLEVBQUUsU0FBUztJQUNiLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFO0VBQ1QsQ0FBQztFQUNEO0VBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxJQUFJLEVBQUU7SUFDRixHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFO0VBQ1Q7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNKLENBQUM7O0FBRUQsTUFBTUMsU0FBUyxHQUFHO0VBQ2QsS0FBSyxFQUFFLFFBQVE7RUFDZixLQUFLLEVBQUUsTUFBTTtFQUNiQyxHQUFHLEVBQUUsUUFBUTtFQUNiQyxFQUFFLEVBQUUsUUFBUTtFQUNaQyxFQUFFLEVBQUUsUUFBUTtFQUNaQyxFQUFFLEVBQUUsUUFBUTtFQUNaQyxFQUFFLEVBQUUsTUFBTTtFQUNWQyxFQUFFLEVBQUUsUUFBUTtFQUNaLEtBQUssRUFBRSxRQUFRO0VBQ2YsS0FBSyxFQUFFLFFBQVE7RUFDZixLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRUQsTUFBTUMsVUFBVSxHQUFHO0VBQ2ZDLE9BQU8sRUFBRTtJQUNMQyxTQUFTLEVBQUU7TUFDUEMsT0FBTyxFQUFFLFVBQVU7TUFDbkIzQixLQUFLLEVBQUUsVUFBVTtNQUNqQjRCLEdBQUcsRUFBRSxNQUFNO01BQ1hDLENBQUMsRUFBRTtJQUNQLENBQUM7SUFDREMsWUFBWSxFQUFFO01BQ1ZDLE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDSk4sU0FBUyxFQUFFO01BQ1BDLE9BQU8sRUFBRSxhQUFhO01BQ3RCTSxPQUFPLEVBQUUsTUFBTTtNQUNmQyxVQUFVLEVBQUUsTUFBTTtNQUNsQkMsT0FBTyxFQUFFO1FBQUVGLE9BQU8sRUFBRSxNQUFNO1FBQUVHLFNBQVMsRUFBRSxNQUFNO1FBQUVGLFVBQVUsRUFBRTtNQUFPLENBQUM7TUFDbkVHLE1BQU0sRUFBRTtRQUFFSixPQUFPLEVBQUUsTUFBTTtRQUFFRyxTQUFTLEVBQUUsTUFBTTtRQUFFRixVQUFVLEVBQUU7TUFBTyxDQUFDO01BQ2xFSSxNQUFNLEVBQUU7UUFBRUwsT0FBTyxFQUFFLE1BQU07UUFBRUcsU0FBUyxFQUFFLE1BQU07UUFBRUYsVUFBVSxFQUFFO01BQU87SUFDckUsQ0FBQztJQUNESyxRQUFRLEVBQUU7TUFDTkMsSUFBSSxFQUFFO1FBQ0ZiLE9BQU8sRUFBRSxhQUFhO1FBQ3RCTSxPQUFPLEVBQUUsTUFBTTtRQUNmRSxPQUFPLEVBQUU7VUFBRUYsT0FBTyxFQUFFO1FBQU8sQ0FBQztRQUM1QkksTUFBTSxFQUFFO1VBQUVKLE9BQU8sRUFBRTtRQUFPLENBQUM7UUFDM0JLLE1BQU0sRUFBRTtVQUFFTCxPQUFPLEVBQUU7UUFBTztNQUM5QjtJQUNKLENBQUM7SUFDREgsWUFBWSxFQUFFO01BQ1ZDLE9BQU8sRUFBRTtJQUNiO0VBQ0o7QUFDSixDQUFDOztBQUVEO0FBQ0EsTUFBTVUsS0FBSyxHQUFHOUMsNkRBQVcsQ0FBQztFQUFFUSxNQUFNO0VBQUVHLEtBQUs7RUFBRUcsTUFBTTtFQUFFWixNQUFNO0VBQUVvQixTQUFTO0VBQUVPO0FBQVcsQ0FBQyxDQUFDO0FBRW5GLGlFQUFlaUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMVJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uLi9jbGllbnQvc3JjL3RoZW1lLmpzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhlbWUuanNcclxuXHJcbi8vIDEuIGltcG9ydCBgZXh0ZW5kVGhlbWVgIGZ1bmN0aW9uXHJcbmltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgICAgJ2h0bWwnOiB7XHJcbiAgICAgICAgICAgICdmb250U2l6ZSc6ICc2Mi41JScsXHJcbiAgICAgICAgICAgICdXZWJraXRUZXh0U2l6ZUFkanVzdCc6ICcxMDAlJyxcclxuICAgICAgICAgICAgJ01velRleHRTaXplQWRqdXN0JzogJzEwMCUnLFxyXG4gICAgICAgICAgICAndGV4dFNpemVBZGp1c3QnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICdmb250RmVhdHVyZVNldHRpbmdzJzogJ1wia2VyblwiLFwibGlnXCInXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2h0bWwsIGJvZHknOiB7XHJcbiAgICAgICAgICAgIC8vY29sb3I6IG1vZGUoJ2dyYXkuODAwJywgJ3doaXRlQWxwaGEuOTAwJykocHJvcHMpLFxyXG4gICAgICAgICAgICBiZzogJ2dyYXkuOTAwJyxcclxuICAgICAgICAgICAgY29sb3I6ICcjMjEyNTI5JyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnYm9keSc6IHsgJ2ZvbnRTaXplJzogJzE2MCUnLCB9LFxyXG5cclxuICAgICAgICAnOjpzZWxlY3Rpb24nOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdncmF5LjQwMCcgLyogV2ViS2l0L0JsaW5rIEJyb3dzZXJzICovXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOjotbW96LXNlbGVjdGlvbic6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2dyYXkuNDAwJyAvKiBHZWNrbyBCcm93c2VycyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICAgIC8vIGJvZHk6IFwicHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1wiLFxyXG4gICAgLy8gaGVhZGluZzogXCJwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XCJcclxuICAgIGJvZHk6IGAnSW50ZXInLCBzYW5zLXNlcmlmYCxcclxuICAgIGhlYWRpbmc6IGAnQ2hha3JhIFBldGNoJywgc2Fucy1zZXJpZmBcclxuICAgIC8vIGhlYWRpbmc6ICdcIkludGVyXCIsIFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7JyxcclxuICAgIC8vYm9keTogJ1wiSW50ZXJcIiwgXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjsnXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGJsYWNrczoge1xyXG4gICAgICAgIDEwMDogXCIjMTgxODE4XCIsXHJcbiAgICAgICAgMTUwOiBcInJnYigxNSwxNSwxNSlcIixcclxuICAgICAgICAyMDA6IFwicmdiKDIwLDIwLDIwKVwiLFxyXG4gICAgICAgIDMwMDogXCJyZ2IoMzAsMzAsMzApXCIsXHJcbiAgICAgICAgNDAwOiBcInJnYig0MCw0MCw0MClcIixcclxuICAgICAgICA1MDA6IFwicmdiKDUwLDUwLDUwKVwiLFxyXG4gICAgICAgIDYwMDogXCJyZ2IoNjAsNjAsNjApXCIsXHJcbiAgICAgICAgNzAwOiBcInJnYig3MCw3MCw3MClcIixcclxuICAgICAgICA4MDA6IFwicmdiKDgwLDgwLDgwKVwiLFxyXG4gICAgICAgIDkwMDogXCJyZ2IoOTAsOTAsOTApXCIsXHJcbiAgICB9LFxyXG4gICAgYnJhbmQ6IHtcclxuICAgICAgICA1MDogJyNlN2ZlZjcnLFxyXG4gICAgICAgIDc1OiAnIzljZjlkZCcsXHJcbiAgICAgICAgMTAwOiBcIiM3M2Y2Y2ZcIixcclxuICAgICAgICAyMDA6ICcjMzdmM2JiJyxcclxuICAgICAgICAzMDA6IFwiIzBlZjBhZFwiLFxyXG4gICAgICAgIDQwMDogJyMwYWE4NzknLFxyXG4gICAgICAgIDUwMDogXCIjMDk5MjZhXCIsXHJcbiAgICAgICAgNjAwOiBcIiM1MmM1NDhcIixcclxuICAgICAgICA3MDA6IFwiIzYzZWQ1NlwiLFxyXG4gICAgICAgIDkwMDogXCIjNjNlZDU2XCIsXHJcbiAgICAgICAgMTAwMDogXCIjMzE3NTJiXCJcclxuICAgIH0sXHJcbiAgICBibHVlczoge1xyXG4gICAgICAgIDUwOiAnI2U5ZWJmZCcsXHJcbiAgICAgICAgNzU6ICcjYTZhYmY4JyxcclxuICAgICAgICAxMDA6ICcjODE4OGY1JyxcclxuICAgICAgICAyMDA6ICcjNGI1NWYwJyxcclxuICAgICAgICAzMDA6ICcjMjYzMmVkJyxcclxuICAgICAgICA0MDA6ICcjMWIyM2E2JyxcclxuICAgICAgICA1MDA6ICcjMTcxZjkxJyxcclxuICAgIH0sXHJcbiAgICAvL2V4cGVyaW1lbnRhbCBibHVlXHJcbiAgICBncmF5OiB7XHJcbiAgICAgICAgMDogJyNmZmZmZmYnLFxyXG4gICAgICAgIDEwOiAnI2ZhZmFmYicsXHJcbiAgICAgICAgMjA6ICcjZjZmNmY2JyxcclxuICAgICAgICAzMDogJyNlY2VkZWUnLFxyXG4gICAgICAgIDQwOiAnI2UxZTFlMycsXHJcbiAgICAgICAgNTA6ICcjYzVjNWNhJyxcclxuICAgICAgICA2MDogJyNiN2I3YmQnLFxyXG4gICAgICAgIDcwOiAnI2FiYWNiMicsXHJcbiAgICAgICAgODA6ICcjOWQ5ZWE1JyxcclxuICAgICAgICA5MDogJyM4ZjkwOTgnLFxyXG4gICAgICAgIDEwMDogJyM4MTgyOGInLFxyXG4gICAgICAgIDEyNTogJ3JnYigyMTMsMjE3LDIyNCknLFxyXG4gICAgICAgIDE1MDogJ3JnYigxODksIDE5MywgMTk5KScsXHJcbiAgICAgICAgMTc1OiAncmdiKDE2NSwgMTY4LCAxNzMpJyxcclxuICAgICAgICAyMDA6ICcjNzM3NDdmJyxcclxuICAgICAgICAzMDA6ICcjNjU2NzcyJyxcclxuICAgICAgICA0MDA6ICcjNWE1YjY3JyxcclxuICAgICAgICA1MDA6ICcjNGM0ZDVhJyxcclxuICAgICAgICA2MDA6ICcjNDA0MjUwJyxcclxuICAgICAgICA3MDA6ICcjMzAzMTQxJyxcclxuICAgICAgICA3NTA6ICcjMjUyNTI1JyxcclxuICAgICAgICA4MDA6ICcjMjIyNDM0JyxcclxuICAgICAgICA4NTA6ICcjMWUxZTFlJyxcclxuICAgICAgICA5MDA6ICcjMTYxODI5JyxcclxuICAgICAgICAxMDAwOiAnIzA2MDYwNicsXHJcbiAgICAgICAgMTEwMDogJyMwMzAzMDMnLFxyXG4gICAgICAgIDEyMDA6ICcjMDAwJ1xyXG4gICAgfSxcclxuICAgIHBsOiB7XHJcbiAgICAgICAgNTA6ICcjZTZlZWViJyxcclxuICAgICAgICA3NTogJyM5OWI4YWYnLFxyXG4gICAgICAgIDEwMDogJyM2ZTlhOGQnLFxyXG4gICAgICAgIDIwMDogJyMzMDZmNWMnLFxyXG4gICAgICAgIDMwMDogJyMwNTUxM2InLFxyXG4gICAgICAgIDQwMDogJyMwNDM5MjknLFxyXG4gICAgICAgIDUwMDogJyMwMzMxMjQnLFxyXG4gICAgfSxcclxuICAgIHNsOiB7XHJcbiAgICAgICAgNTA6ICcjZTdlOGY4JyxcclxuICAgICAgICA3NTogJyM5ZGExZTQnLFxyXG4gICAgICAgIDEwMDogJyM3NDdhZDknLFxyXG4gICAgICAgIDIwMDogJyMzODQxYzgnLFxyXG4gICAgICAgIDMwMDogJyMwZjFhYmQnLFxyXG4gICAgICAgIDQwMDogJyMwYjEyODQnLFxyXG4gICAgICAgIDUwMDogJyMwOTEwNzMnLFxyXG4gICAgfSxcclxuICAgIC8vb3JpZ2luYWxzXHJcbiAgICAvKlxyXG4gICAgIGdyYXk6IHtcclxuICAgICAgICA1MDogJ3JnYigyNTQsMjU0LDI1NSknLFxyXG4gICAgICAgIDEwMDogJ3JnYigyMzcsMjQxLDI1MCknLFxyXG4gICAgICAgIDEyNTogJ3JnYigyMTMsMjE3LDIyNCknLFxyXG4gICAgICAgIDE1MDogJ3JnYigxODksIDE5MywgMTk5KScsXHJcbiAgICAgICAgMTc1OiAncmdiKDE2NSwgMTY4LCAxNzMpJyxcclxuICAgICAgICAyMDA6ICdyZ2IoMTM3LDE1NiwxOTkpJyxcclxuICAgICAgICAzMDA6ICdyZ2IoMTIwLDEzNiwxNzMpJyxcclxuICAgICAgICA0MDA6ICdyZ2IoMTAyLDExNiwxNDgpJyxcclxuICAgICAgICA1MDA6ICdyZ2IoODQsOTYsMTIyKScsXHJcbiAgICAgICAgNjAwOiAncmdiKDY3LDc2LDk3KScsXHJcbiAgICAgICAgNzAwOiAncmdiKDQ5LDU2LDcxKScsXHJcbiAgICAgICAgNzUwOiAncmdiKDQwLDQ2LDU5KScsXHJcbiAgICAgICAgODAwOiAncmdiKDMyLDM2LDQ2KScsXHJcbiAgICAgICAgODUwOiAncmdiKDIzLDI2LDMzKScsXHJcbiAgICAgICAgOTAwOiAncmdiKDE0LDE2LDIwKScsXHJcbiAgICAgICAgMTAwMDogJ3JnYigzLDYsMTIpJ1xyXG4gICAgfSxcclxuICAgICovXHJcbiAgICBhY29zOiB7XHJcbiAgICAgICAgMTAwOiAnIzExMScsXHJcbiAgICAgICAgMjAwOiAnIzIyMicsXHJcbiAgICAgICAgMzAwOiAnIzMzMydcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcm9vdDoge1xyXG4gICAgLy8gICAgIFwiYnMtYmx1ZVwiOiAnIzBkNmVmZCcsXHJcbiAgICAvLyAgICAgXCJicy1pbmRpZ29cIjogJyM2NjEwZjInLFxyXG4gICAgLy8gICAgIFwiYnMtcHVycGxlXCI6ICcjNmY0MmMxJyxcclxuICAgIC8vICAgICBcImJzLXBpbmtcIjogJyNkNjMzODQnLFxyXG4gICAgLy8gICAgIFwiYnMtcmVkXCI6ICcjZGMzNTQ1JyxcclxuICAgIC8vICAgICBcImJzLW9yYW5nZVwiOiAnI2ZkN2UxNCcsXHJcbiAgICAvLyAgICAgXCJicy15ZWxsb3dcIjogJyNmZmMxMDcnLFxyXG4gICAgLy8gICAgIFwiYnMtZ3JlZW5cIjogJyMxOTg3NTQnLFxyXG4gICAgLy8gICAgIFwiYnMtdGVhbFwiOiAnIzIwYzk5NycsXHJcbiAgICAvLyAgICAgXCJicy1jeWFuXCI6ICcjMGRjYWYwJyxcclxuICAgIC8vICAgICBcImJzLWJsYWNrXCI6ICcjMDAwJyxcclxuICAgIC8vICAgICBcImJzLXdoaXRlXCI6ICcjZmZmJyxcclxuICAgIC8vICAgICBcImJzLWdyYXlcIjogJyM2Yzc1N2QnLFxyXG4gICAgLy8gICAgIFwiYnMtZ3JheS1kYXJrXCI6ICcjMzQzYTQwJyxcclxuICAgIC8vICAgICBcImJzLWdyYXktMTAwXCI6ICcjZjhmOWZhJyxcclxuICAgIC8vICAgICBcImJzLWdyYXktMjAwXCI6ICcjZTllY2VmJyxcclxuICAgIC8vICAgICBcImJzLWdyYXktMzAwXCI6ICcjZGVlMmU2JyxcclxuICAgIC8vICAgICBcImJzLWdyYXktNDAwXCI6ICcjY2VkNGRhJyxcclxuICAgIC8vICAgICBcImJzLWdyYXktNTAwXCI6ICcjYWRiNWJkJyxcclxuICAgIC8vICAgICBcImJzLWdyYXktNjAwXCI6ICcjNmM3NTdkJyxcclxuICAgIC8vICAgICBcImJzLWdyYXktNzAwXCI6ICcjNDk1MDU3JyxcclxuICAgIC8vICAgICBcImJzLWdyYXktODAwXCI6ICcjMzQzYTQwJyxcclxuICAgIC8vICAgICBcImJzLWdyYXktOTAwXCI6ICcjMjEyNTI5JyxcclxuICAgIC8vICAgICBcImJzLXByaW1hcnlcIjogJyMwZDZlZmQnLFxyXG4gICAgLy8gICAgIFwiYnMtc2Vjb25kYXJ5XCI6ICcjNmM3NTdkJyxcclxuICAgIC8vICAgICBcImJzLXN1Y2Nlc3NcIjogJyMxOTg3NTQnLFxyXG4gICAgLy8gICAgIFwiYnMtaW5mb1wiOiAnIzBkY2FmMCcsXHJcbiAgICAvLyAgICAgXCJicy13YXJuaW5nXCI6ICcjZmZjMTA3JyxcclxuICAgIC8vICAgICBcImJzLWRhbmdlclwiOiAnI2RjMzU0NScsXHJcbiAgICAvLyAgICAgXCJicy1saWdodFwiOiAnI2Y4ZjlmYScsXHJcbiAgICAvLyAgICAgXCJicy1kYXJrXCI6ICcjMjEyNTI5JyxcclxuICAgIC8vICAgICBcImJzLXByaW1hcnktcmdiXCI6ICcxMywgMTEwLCAyNTMnLFxyXG4gICAgLy8gICAgIFwiYnMtc2Vjb25kYXJ5LXJnYlwiOiAnMTA4LCAxMTcsIDEyNScsXHJcbiAgICAvLyAgICAgXCJicy1zdWNjZXNzLXJnYlwiOiAnMjUsIDEzNSwgODQnLFxyXG4gICAgLy8gICAgIFwiYnMtaW5mby1yZ2JcIjogJzEzLCAyMDIsIDI0MCcsXHJcbiAgICAvLyAgICAgXCJicy13YXJuaW5nLXJnYlwiOiAnMjU1LCAxOTMsIDcnLFxyXG4gICAgLy8gICAgIFwiYnMtZGFuZ2VyLXJnYlwiOiAnMjIwLCA1MywgNjknLFxyXG4gICAgLy8gICAgIFwiYnMtbGlnaHQtcmdiXCI6ICcyNDgsIDI0OSwgMjUwJyxcclxuICAgIC8vICAgICBcImJzLWRhcmstcmdiXCI6ICczMywgMzcsIDQxJyxcclxuICAgIC8vICAgICBcImJzLXdoaXRlLXJnYlwiOiAnMjU1LCAyNTUsIDI1NScsXHJcbiAgICAvLyAgICAgXCJicy1ibGFjay1yZ2JcIjogJzAsIDAsIDAnLFxyXG4gICAgLy8gICAgIFwiYnMtYm9keS1jb2xvci1yZ2JcIjogJzMzLCAzNywgNDEnLFxyXG4gICAgLy8gICAgIFwiYnMtYm9keS1iZy1yZ2JcIjogJzI1NSwgMjU1LCAyNTUnLFxyXG4gICAgLy8gICAgIFwiYnMtZm9udC1zYW5zLXNlcmlmXCI6ICdzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTm90byBTYW5zXCIsIFwiTGliZXJhdGlvbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCInLFxyXG4gICAgLy8gICAgIFwiYnMtZm9udC1tb25vc3BhY2VcIjogJ1NGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UnLFxyXG4gICAgLy8gICAgIFwiYnMtZ3JhZGllbnRcIjogJ2xpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpJyxcclxuICAgIC8vICAgICBcImJzLWJvZHktZm9udC1mYW1pbHlcIjogJ3ZhcihcImJzLWZvbnQtc2Fucy1zZXJpZiknLFxyXG4gICAgLy8gICAgIFwiYnMtYm9keS1mb250LXNpemVcIjogJzFyZW0nLFxyXG4gICAgLy8gICAgIFwiYnMtYm9keS1mb250LXdlaWdodFwiOiAnNDAwJyxcclxuICAgIC8vICAgICBcImJzLWJvZHktbGluZS1oZWlnaHRcIjogJzEuNScsXHJcbiAgICAvLyAgICAgXCJicy1ib2R5LWNvbG9yXCI6ICcjMjEyNTI5JyxcclxuICAgIC8vICAgICBcImJzLWJvZHktYmdcIjogJyNmZmYnLFxyXG4gICAgLy8gICAgIFwiYnMtYm9yZGVyLXdpZHRoXCI6ICcxcHgnLFxyXG4gICAgLy8gICAgIFwiYnMtYm9yZGVyLXN0eWxlXCI6ICdzb2xpZCcsXHJcbiAgICAvLyAgICAgXCJicy1ib3JkZXItY29sb3JcIjogJyNkZWUyZTYnLFxyXG4gICAgLy8gICAgIFwiYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50XCI6ICdyZ2JhKDAsIDAsIDAsIDAuMTc1KScsXHJcbiAgICAvLyAgICAgXCJicy1ib3JkZXItcmFkaXVzXCI6ICcwLjM3NXJlbScsXHJcbiAgICAvLyAgICAgXCJicy1ib3JkZXItcmFkaXVzLXNtXCI6ICcwLjI1cmVtJyxcclxuICAgIC8vICAgICBcImJzLWJvcmRlci1yYWRpdXMtbGdcIjogJzAuNXJlbScsXHJcbiAgICAvLyAgICAgXCJicy1ib3JkZXItcmFkaXVzLXhsXCI6ICcxcmVtJyxcclxuICAgIC8vICAgICBcImJzLWJvcmRlci1yYWRpdXMtMnhsXCI6ICcycmVtJyxcclxuICAgIC8vICAgICBcImJzLWJvcmRlci1yYWRpdXMtcGlsbFwiOiAnNTByZW0nLFxyXG4gICAgLy8gICAgIFwiYnMtbGluay1jb2xvclwiOiAnIzBkNmVmZCcsXHJcbiAgICAvLyAgICAgXCJicy1saW5rLWhvdmVyLWNvbG9yXCI6ICcjMGE1OGNhJyxcclxuICAgIC8vICAgICBcImJzLWNvZGUtY29sb3JcIjogJyNkNjMzODQnLFxyXG4gICAgLy8gICAgIFwiYnMtaGlnaGxpZ2h0LWJnXCI6ICcjZmZmM2NkJ1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5jb25zdCBmb250U2l6ZXMgPSB7XHJcbiAgICAnM3hzJzogXCIwLjhyZW1cIixcclxuICAgICcyeHMnOiBcIjFyZW1cIixcclxuICAgIHh4czogXCIxLjJyZW1cIixcclxuICAgIHhzOiBcIjEuNHJlbVwiLFxyXG4gICAgc206IFwiMS42cmVtXCIsXHJcbiAgICBtZDogXCIxLjhyZW1cIixcclxuICAgIGxnOiBcIjJyZW1cIixcclxuICAgIHhsOiBcIjIuMnJlbVwiLFxyXG4gICAgJzJ4bCc6IFwiMi40cmVtXCIsXHJcbiAgICAnM3hsJzogXCIyLjhyZW1cIixcclxuICAgICc0eGwnOiBcIjMuMnJlbVwiXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBUb29sdGlwOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiB7XHJcbiAgICAgICAgICAgIGJnQ29sb3I6ICdncmF5LjcwMCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheS4xMDAnLFxyXG4gICAgICAgICAgICB0b3A6ICcxcmVtJyxcclxuICAgICAgICAgICAgcDogXCIxcmVtXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgICAgICB2YXJpYW50OiAnYmFzZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQnV0dG9uOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiB7XHJcbiAgICAgICAgICAgIGJnQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgYmdHcmFkaWVudDogJ25vbmUnLFxyXG4gICAgICAgICAgICBfYWN0aXZlOiB7IG91dGxpbmU6ICdub25lJywgYm94U2hhZG93OiAnbm9uZScsIGJnR3JhZGllbnQ6ICdub25lJyB9LFxyXG4gICAgICAgICAgICBfaG92ZXI6IHsgb3V0bGluZTogJ25vbmUnLCBib3hTaGFkb3c6ICdub25lJywgYmdHcmFkaWVudDogJ25vbmUnIH0sXHJcbiAgICAgICAgICAgIF9mb2N1czogeyBvdXRsaW5lOiAnbm9uZScsIGJveFNoYWRvdzogJ25vbmUnLCBiZ0dyYWRpZW50OiAnbm9uZScgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICAgICAgYmdDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIF9hY3RpdmU6IHsgb3V0bGluZTogJ25vbmUnIH0sXHJcbiAgICAgICAgICAgICAgICBfaG92ZXI6IHsgb3V0bGluZTogJ25vbmUnIH0sXHJcbiAgICAgICAgICAgICAgICBfZm9jdXM6IHsgb3V0bGluZTogJ25vbmUnIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdiYXNlJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gMy4gZXh0ZW5kIHRoZSB0aGVtZVxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnLCBmb250cywgY29sb3JzLCBzdHlsZXMsIGZvbnRTaXplcywgY29tcG9uZW50cyB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiY2Q1NWJkZDU1MzlkZjQ0NDFjMFwiKSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJiZyIsImNvbG9yIiwiZm9udFdlaWdodCIsImJhY2tncm91bmQiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsImNvbG9ycyIsImJsYWNrcyIsImJyYW5kIiwiYmx1ZXMiLCJncmF5IiwicGwiLCJzbCIsImFjb3MiLCJmb250U2l6ZXMiLCJ4eHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwiY29tcG9uZW50cyIsIlRvb2x0aXAiLCJiYXNlU3R5bGUiLCJiZ0NvbG9yIiwidG9wIiwicCIsImRlZmF1bHRQcm9wcyIsInZhcmlhbnQiLCJCdXR0b24iLCJvdXRsaW5lIiwiYmdHcmFkaWVudCIsIl9hY3RpdmUiLCJib3hTaGFkb3ciLCJfaG92ZXIiLCJfZm9jdXMiLCJ2YXJpYW50cyIsImJhc2UiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=