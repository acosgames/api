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
    50: '#f8fcff',
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
  },
  root: {
    "bs-blue": '#0d6efd',
    "bs-indigo": '#6610f2',
    "bs-purple": '#6f42c1',
    "bs-pink": '#d63384',
    "bs-red": '#dc3545',
    "bs-orange": '#fd7e14',
    "bs-yellow": '#ffc107',
    "bs-green": '#198754',
    "bs-teal": '#20c997',
    "bs-cyan": '#0dcaf0',
    "bs-black": '#000',
    "bs-white": '#fff',
    "bs-gray": '#6c757d',
    "bs-gray-dark": '#343a40',
    "bs-gray-100": '#f8f9fa',
    "bs-gray-200": '#e9ecef',
    "bs-gray-300": '#dee2e6',
    "bs-gray-400": '#ced4da',
    "bs-gray-500": '#adb5bd',
    "bs-gray-600": '#6c757d',
    "bs-gray-700": '#495057',
    "bs-gray-800": '#343a40',
    "bs-gray-900": '#212529',
    "bs-primary": '#0d6efd',
    "bs-secondary": '#6c757d',
    "bs-success": '#198754',
    "bs-info": '#0dcaf0',
    "bs-warning": '#ffc107',
    "bs-danger": '#dc3545',
    "bs-light": '#f8f9fa',
    "bs-dark": '#212529',
    "bs-primary-rgb": '13, 110, 253',
    "bs-secondary-rgb": '108, 117, 125',
    "bs-success-rgb": '25, 135, 84',
    "bs-info-rgb": '13, 202, 240',
    "bs-warning-rgb": '255, 193, 7',
    "bs-danger-rgb": '220, 53, 69',
    "bs-light-rgb": '248, 249, 250',
    "bs-dark-rgb": '33, 37, 41',
    "bs-white-rgb": '255, 255, 255',
    "bs-black-rgb": '0, 0, 0',
    "bs-body-color-rgb": '33, 37, 41',
    "bs-body-bg-rgb": '255, 255, 255',
    "bs-font-sans-serif": 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    "bs-font-monospace": 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    "bs-gradient": 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
    "bs-body-font-family": 'var("bs-font-sans-serif)',
    "bs-body-font-size": '1rem',
    "bs-body-font-weight": '400',
    "bs-body-line-height": '1.5',
    "bs-body-color": '#212529',
    "bs-body-bg": '#fff',
    "bs-border-width": '1px',
    "bs-border-style": 'solid',
    "bs-border-color": '#dee2e6',
    "bs-border-color-translucent": 'rgba(0, 0, 0, 0.175)',
    "bs-border-radius": '0.375rem',
    "bs-border-radius-sm": '0.25rem',
    "bs-border-radius-lg": '0.5rem',
    "bs-border-radius-xl": '1rem',
    "bs-border-radius-2xl": '2rem',
    "bs-border-radius-pill": '50rem',
    "bs-link-color": '#0d6efd',
    "bs-link-hover-color": '#0a58ca',
    "bs-code-color": '#d63384',
    "bs-highlight-bg": '#fff3cd'
  }
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
/******/ 	__webpack_require__.h = () => ("ff5aa26a04eaf1c4e9b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLFNBQVM7SUFDZixJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0RDLEVBQUUsRUFBRTtJQUNBLEVBQUUsRUFBRSxTQUFTO0lBQ2IsRUFBRSxFQUFFLFNBQVM7SUFDYixHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRTtFQUNULENBQUM7RUFDREMsRUFBRSxFQUFFO0lBQ0EsRUFBRSxFQUFFLFNBQVM7SUFDYixFQUFFLEVBQUUsU0FBUztJQUNiLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFO0VBQ1QsQ0FBQztFQUNEO0VBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxJQUFJLEVBQUU7SUFDRixHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFO0VBQ1QsQ0FBQztFQUVEQyxJQUFJLEVBQUU7SUFDRixTQUFTLEVBQUUsU0FBUztJQUNwQixXQUFXLEVBQUUsU0FBUztJQUN0QixXQUFXLEVBQUUsU0FBUztJQUN0QixTQUFTLEVBQUUsU0FBUztJQUNwQixRQUFRLEVBQUUsU0FBUztJQUNuQixXQUFXLEVBQUUsU0FBUztJQUN0QixXQUFXLEVBQUUsU0FBUztJQUN0QixVQUFVLEVBQUUsU0FBUztJQUNyQixTQUFTLEVBQUUsU0FBUztJQUNwQixTQUFTLEVBQUUsU0FBUztJQUNwQixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVB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LEVBQUUsTUFBTTtRQUFFRixVQUFVLEVBQUU7TUFBTyxDQUFDO01BQ25FRyxNQUFNLEVBQUU7UUFBRUosT0FBTyxFQUFFLE1BQU07UUFBRUcsU0FBUyxFQUFFLE1BQU07UUFBRUYsVUFBVSxFQUFFO01BQU8sQ0FBQztNQUNsRUksTUFBTSxFQUFFO1FBQUVMLE9BQU8sRUFBRSxNQUFNO1FBQUVHLFNBQVMsRUFBRSxNQUFNO1FBQUVGLFVBQVUsRUFBRTtNQUFPO0lBQ3JFLENBQUM7SUFDREssUUFBUSxFQUFFO01BQ05DLElBQUksRUFBRTtRQUNGYixPQUFPLEVBQUUsYUFBYTtRQUN0Qk0sT0FBTyxFQUFFLE1BQU07UUFDZkUsT0FBTyxFQUFFO1VBQUVGLE9BQU8sRUFBRTtRQUFPLENBQUM7UUFDNUJJLE1BQU0sRUFBRTtVQUFFSixPQUFPLEVBQUU7UUFBTyxDQUFDO1FBQzNCSyxNQUFNLEVBQUU7VUFBRUwsT0FBTyxFQUFFO1FBQU87TUFDOUI7SUFDSixDQUFDO0lBQ0RILFlBQVksRUFBRTtNQUNWQyxPQUFPLEVBQUU7SUFDYjtFQUNKO0FBQ0osQ0FBQzs7QUFFRDtBQUNBLE1BQU1VLEtBQUssR0FBRy9DLDZEQUFXLENBQUM7RUFBRVEsTUFBTTtFQUFFRyxLQUFLO0VBQUVHLE1BQU07RUFBRVosTUFBTTtFQUFFcUIsU0FBUztFQUFFTztBQUFXLENBQUMsQ0FBQztBQUVuRixpRUFBZWlCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFScEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGkvLi4vY2xpZW50L3NyYy90aGVtZS5qcyIsIndlYnBhY2s6Ly9hcGkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZW1lLmpzXHJcblxyXG4vLyAxLiBpbXBvcnQgYGV4dGVuZFRoZW1lYCBmdW5jdGlvblxyXG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IG1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDoge1xyXG4gICAgICAgICdodG1sJzoge1xyXG4gICAgICAgICAgICAnZm9udFNpemUnOiAnNjIuNSUnLFxyXG4gICAgICAgICAgICAnV2Via2l0VGV4dFNpemVBZGp1c3QnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICdNb3pUZXh0U2l6ZUFkanVzdCc6ICcxMDAlJyxcclxuICAgICAgICAgICAgJ3RleHRTaXplQWRqdXN0JzogJzEwMCUnLFxyXG4gICAgICAgICAgICAnZm9udEZlYXR1cmVTZXR0aW5ncyc6ICdcImtlcm5cIixcImxpZ1wiJ1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgICdodG1sLCBib2R5Jzoge1xyXG4gICAgICAgICAgICAvL2NvbG9yOiBtb2RlKCdncmF5LjgwMCcsICd3aGl0ZUFscGhhLjkwMCcpKHByb3BzKSxcclxuICAgICAgICAgICAgYmc6ICdncmF5LjkwMCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzIxMjUyOScsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2JvZHknOiB7ICdmb250U2l6ZSc6ICcxNjAlJywgfSxcclxuXHJcbiAgICAgICAgJzo6c2VsZWN0aW9uJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnZ3JheS40MDAnIC8qIFdlYktpdC9CbGluayBCcm93c2VycyAqL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzo6LW1vei1zZWxlY3Rpb24nOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdncmF5LjQwMCcgLyogR2Vja28gQnJvd3NlcnMgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gMi4gQWRkIHlvdXIgY29sb3IgbW9kZSBjb25maWdcclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gICAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcclxufVxyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgICAvLyBib2R5OiBcInByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcIixcclxuICAgIC8vIGhlYWRpbmc6IFwicHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1wiXHJcbiAgICBib2R5OiBgJ0ludGVyJywgc2Fucy1zZXJpZmAsXHJcbiAgICBoZWFkaW5nOiBgJ0NoYWtyYSBQZXRjaCcsIHNhbnMtc2VyaWZgXHJcbiAgICAvLyBoZWFkaW5nOiAnXCJJbnRlclwiLCBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmOycsXHJcbiAgICAvL2JvZHk6ICdcIkludGVyXCIsIFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7J1xyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBibGFja3M6IHtcclxuICAgICAgICAxMDA6IFwiIzE4MTgxOFwiLFxyXG4gICAgICAgIDE1MDogXCJyZ2IoMTUsMTUsMTUpXCIsXHJcbiAgICAgICAgMjAwOiBcInJnYigyMCwyMCwyMClcIixcclxuICAgICAgICAzMDA6IFwicmdiKDMwLDMwLDMwKVwiLFxyXG4gICAgICAgIDQwMDogXCJyZ2IoNDAsNDAsNDApXCIsXHJcbiAgICAgICAgNTAwOiBcInJnYig1MCw1MCw1MClcIixcclxuICAgICAgICA2MDA6IFwicmdiKDYwLDYwLDYwKVwiLFxyXG4gICAgICAgIDcwMDogXCJyZ2IoNzAsNzAsNzApXCIsXHJcbiAgICAgICAgODAwOiBcInJnYig4MCw4MCw4MClcIixcclxuICAgICAgICA5MDA6IFwicmdiKDkwLDkwLDkwKVwiLFxyXG4gICAgfSxcclxuICAgIGJyYW5kOiB7XHJcbiAgICAgICAgNTA6ICcjZTdmZWY3JyxcclxuICAgICAgICA3NTogJyM5Y2Y5ZGQnLFxyXG4gICAgICAgIDEwMDogXCIjNzNmNmNmXCIsXHJcbiAgICAgICAgMjAwOiAnIzM3ZjNiYicsXHJcbiAgICAgICAgMzAwOiBcIiMwZWYwYWRcIixcclxuICAgICAgICA0MDA6ICcjMGFhODc5JyxcclxuICAgICAgICA1MDA6IFwiIzA5OTI2YVwiLFxyXG4gICAgICAgIDYwMDogXCIjNTJjNTQ4XCIsXHJcbiAgICAgICAgNzAwOiBcIiM2M2VkNTZcIixcclxuICAgICAgICA5MDA6IFwiIzYzZWQ1NlwiLFxyXG4gICAgICAgIDEwMDA6IFwiIzMxNzUyYlwiXHJcbiAgICB9LFxyXG4gICAgYmx1ZXM6IHtcclxuICAgICAgICA1MDogJyNlOWViZmQnLFxyXG4gICAgICAgIDc1OiAnI2E2YWJmOCcsXHJcbiAgICAgICAgMTAwOiAnIzgxODhmNScsXHJcbiAgICAgICAgMjAwOiAnIzRiNTVmMCcsXHJcbiAgICAgICAgMzAwOiAnIzI2MzJlZCcsXHJcbiAgICAgICAgNDAwOiAnIzFiMjNhNicsXHJcbiAgICAgICAgNTAwOiAnIzE3MWY5MScsXHJcbiAgICB9LFxyXG4gICAgLy9leHBlcmltZW50YWwgYmx1ZVxyXG4gICAgZ3JheToge1xyXG4gICAgICAgIDA6ICcjZmZmZmZmJyxcclxuICAgICAgICAxMDogJyNmYWZhZmInLFxyXG4gICAgICAgIDIwOiAnI2Y2ZjZmNicsXHJcbiAgICAgICAgMzA6ICcjZWNlZGVlJyxcclxuICAgICAgICA0MDogJyNlMWUxZTMnLFxyXG4gICAgICAgIDUwOiAnI2Y4ZmNmZicsXHJcbiAgICAgICAgNjA6ICcjYjdiN2JkJyxcclxuICAgICAgICA3MDogJyNhYmFjYjInLFxyXG4gICAgICAgIDgwOiAnIzlkOWVhNScsXHJcbiAgICAgICAgOTA6ICcjOGY5MDk4JyxcclxuICAgICAgICAxMDA6ICcjODE4MjhiJyxcclxuICAgICAgICAxMjU6ICdyZ2IoMjEzLDIxNywyMjQpJyxcclxuICAgICAgICAxNTA6ICdyZ2IoMTg5LCAxOTMsIDE5OSknLFxyXG4gICAgICAgIDE3NTogJ3JnYigxNjUsIDE2OCwgMTczKScsXHJcbiAgICAgICAgMjAwOiAnIzczNzQ3ZicsXHJcbiAgICAgICAgMzAwOiAnIzY1Njc3MicsXHJcbiAgICAgICAgNDAwOiAnIzVhNWI2NycsXHJcbiAgICAgICAgNTAwOiAnIzRjNGQ1YScsXHJcbiAgICAgICAgNjAwOiAnIzQwNDI1MCcsXHJcbiAgICAgICAgNzAwOiAnIzMwMzE0MScsXHJcbiAgICAgICAgNzUwOiAnIzI1MjUyNScsXHJcbiAgICAgICAgODAwOiAnIzIyMjQzNCcsXHJcbiAgICAgICAgODUwOiAnIzFlMWUxZScsXHJcbiAgICAgICAgOTAwOiAnIzE2MTgyOScsXHJcbiAgICAgICAgMTAwMDogJyMwNjA2MDYnLFxyXG4gICAgICAgIDExMDA6ICcjMDMwMzAzJyxcclxuICAgICAgICAxMjAwOiAnIzAwMCdcclxuICAgIH0sXHJcbiAgICBwbDoge1xyXG4gICAgICAgIDUwOiAnI2U2ZWVlYicsXHJcbiAgICAgICAgNzU6ICcjOTliOGFmJyxcclxuICAgICAgICAxMDA6ICcjNmU5YThkJyxcclxuICAgICAgICAyMDA6ICcjMzA2ZjVjJyxcclxuICAgICAgICAzMDA6ICcjMDU1MTNiJyxcclxuICAgICAgICA0MDA6ICcjMDQzOTI5JyxcclxuICAgICAgICA1MDA6ICcjMDMzMTI0JyxcclxuICAgIH0sXHJcbiAgICBzbDoge1xyXG4gICAgICAgIDUwOiAnI2U3ZThmOCcsXHJcbiAgICAgICAgNzU6ICcjOWRhMWU0JyxcclxuICAgICAgICAxMDA6ICcjNzQ3YWQ5JyxcclxuICAgICAgICAyMDA6ICcjMzg0MWM4JyxcclxuICAgICAgICAzMDA6ICcjMGYxYWJkJyxcclxuICAgICAgICA0MDA6ICcjMGIxMjg0JyxcclxuICAgICAgICA1MDA6ICcjMDkxMDczJyxcclxuICAgIH0sXHJcbiAgICAvL29yaWdpbmFsc1xyXG4gICAgLypcclxuICAgICBncmF5OiB7XHJcbiAgICAgICAgNTA6ICdyZ2IoMjU0LDI1NCwyNTUpJyxcclxuICAgICAgICAxMDA6ICdyZ2IoMjM3LDI0MSwyNTApJyxcclxuICAgICAgICAxMjU6ICdyZ2IoMjEzLDIxNywyMjQpJyxcclxuICAgICAgICAxNTA6ICdyZ2IoMTg5LCAxOTMsIDE5OSknLFxyXG4gICAgICAgIDE3NTogJ3JnYigxNjUsIDE2OCwgMTczKScsXHJcbiAgICAgICAgMjAwOiAncmdiKDEzNywxNTYsMTk5KScsXHJcbiAgICAgICAgMzAwOiAncmdiKDEyMCwxMzYsMTczKScsXHJcbiAgICAgICAgNDAwOiAncmdiKDEwMiwxMTYsMTQ4KScsXHJcbiAgICAgICAgNTAwOiAncmdiKDg0LDk2LDEyMiknLFxyXG4gICAgICAgIDYwMDogJ3JnYig2Nyw3Niw5NyknLFxyXG4gICAgICAgIDcwMDogJ3JnYig0OSw1Niw3MSknLFxyXG4gICAgICAgIDc1MDogJ3JnYig0MCw0Niw1OSknLFxyXG4gICAgICAgIDgwMDogJ3JnYigzMiwzNiw0NiknLFxyXG4gICAgICAgIDg1MDogJ3JnYigyMywyNiwzMyknLFxyXG4gICAgICAgIDkwMDogJ3JnYigxNCwxNiwyMCknLFxyXG4gICAgICAgIDEwMDA6ICdyZ2IoMyw2LDEyKSdcclxuICAgIH0sXHJcbiAgICAqL1xyXG4gICAgYWNvczoge1xyXG4gICAgICAgIDEwMDogJyMxMTEnLFxyXG4gICAgICAgIDIwMDogJyMyMjInLFxyXG4gICAgICAgIDMwMDogJyMzMzMnXHJcbiAgICB9LFxyXG5cclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBcImJzLWJsdWVcIjogJyMwZDZlZmQnLFxyXG4gICAgICAgIFwiYnMtaW5kaWdvXCI6ICcjNjYxMGYyJyxcclxuICAgICAgICBcImJzLXB1cnBsZVwiOiAnIzZmNDJjMScsXHJcbiAgICAgICAgXCJicy1waW5rXCI6ICcjZDYzMzg0JyxcclxuICAgICAgICBcImJzLXJlZFwiOiAnI2RjMzU0NScsXHJcbiAgICAgICAgXCJicy1vcmFuZ2VcIjogJyNmZDdlMTQnLFxyXG4gICAgICAgIFwiYnMteWVsbG93XCI6ICcjZmZjMTA3JyxcclxuICAgICAgICBcImJzLWdyZWVuXCI6ICcjMTk4NzU0JyxcclxuICAgICAgICBcImJzLXRlYWxcIjogJyMyMGM5OTcnLFxyXG4gICAgICAgIFwiYnMtY3lhblwiOiAnIzBkY2FmMCcsXHJcbiAgICAgICAgXCJicy1ibGFja1wiOiAnIzAwMCcsXHJcbiAgICAgICAgXCJicy13aGl0ZVwiOiAnI2ZmZicsXHJcbiAgICAgICAgXCJicy1ncmF5XCI6ICcjNmM3NTdkJyxcclxuICAgICAgICBcImJzLWdyYXktZGFya1wiOiAnIzM0M2E0MCcsXHJcbiAgICAgICAgXCJicy1ncmF5LTEwMFwiOiAnI2Y4ZjlmYScsXHJcbiAgICAgICAgXCJicy1ncmF5LTIwMFwiOiAnI2U5ZWNlZicsXHJcbiAgICAgICAgXCJicy1ncmF5LTMwMFwiOiAnI2RlZTJlNicsXHJcbiAgICAgICAgXCJicy1ncmF5LTQwMFwiOiAnI2NlZDRkYScsXHJcbiAgICAgICAgXCJicy1ncmF5LTUwMFwiOiAnI2FkYjViZCcsXHJcbiAgICAgICAgXCJicy1ncmF5LTYwMFwiOiAnIzZjNzU3ZCcsXHJcbiAgICAgICAgXCJicy1ncmF5LTcwMFwiOiAnIzQ5NTA1NycsXHJcbiAgICAgICAgXCJicy1ncmF5LTgwMFwiOiAnIzM0M2E0MCcsXHJcbiAgICAgICAgXCJicy1ncmF5LTkwMFwiOiAnIzIxMjUyOScsXHJcbiAgICAgICAgXCJicy1wcmltYXJ5XCI6ICcjMGQ2ZWZkJyxcclxuICAgICAgICBcImJzLXNlY29uZGFyeVwiOiAnIzZjNzU3ZCcsXHJcbiAgICAgICAgXCJicy1zdWNjZXNzXCI6ICcjMTk4NzU0JyxcclxuICAgICAgICBcImJzLWluZm9cIjogJyMwZGNhZjAnLFxyXG4gICAgICAgIFwiYnMtd2FybmluZ1wiOiAnI2ZmYzEwNycsXHJcbiAgICAgICAgXCJicy1kYW5nZXJcIjogJyNkYzM1NDUnLFxyXG4gICAgICAgIFwiYnMtbGlnaHRcIjogJyNmOGY5ZmEnLFxyXG4gICAgICAgIFwiYnMtZGFya1wiOiAnIzIxMjUyOScsXHJcbiAgICAgICAgXCJicy1wcmltYXJ5LXJnYlwiOiAnMTMsIDExMCwgMjUzJyxcclxuICAgICAgICBcImJzLXNlY29uZGFyeS1yZ2JcIjogJzEwOCwgMTE3LCAxMjUnLFxyXG4gICAgICAgIFwiYnMtc3VjY2Vzcy1yZ2JcIjogJzI1LCAxMzUsIDg0JyxcclxuICAgICAgICBcImJzLWluZm8tcmdiXCI6ICcxMywgMjAyLCAyNDAnLFxyXG4gICAgICAgIFwiYnMtd2FybmluZy1yZ2JcIjogJzI1NSwgMTkzLCA3JyxcclxuICAgICAgICBcImJzLWRhbmdlci1yZ2JcIjogJzIyMCwgNTMsIDY5JyxcclxuICAgICAgICBcImJzLWxpZ2h0LXJnYlwiOiAnMjQ4LCAyNDksIDI1MCcsXHJcbiAgICAgICAgXCJicy1kYXJrLXJnYlwiOiAnMzMsIDM3LCA0MScsXHJcbiAgICAgICAgXCJicy13aGl0ZS1yZ2JcIjogJzI1NSwgMjU1LCAyNTUnLFxyXG4gICAgICAgIFwiYnMtYmxhY2stcmdiXCI6ICcwLCAwLCAwJyxcclxuICAgICAgICBcImJzLWJvZHktY29sb3ItcmdiXCI6ICczMywgMzcsIDQxJyxcclxuICAgICAgICBcImJzLWJvZHktYmctcmdiXCI6ICcyNTUsIDI1NSwgMjU1JyxcclxuICAgICAgICBcImJzLWZvbnQtc2Fucy1zZXJpZlwiOiAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIk5vdG8gU2Fuc1wiLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiJyxcclxuICAgICAgICBcImJzLWZvbnQtbW9ub3NwYWNlXCI6ICdTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlJyxcclxuICAgICAgICBcImJzLWdyYWRpZW50XCI6ICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKScsXHJcbiAgICAgICAgXCJicy1ib2R5LWZvbnQtZmFtaWx5XCI6ICd2YXIoXCJicy1mb250LXNhbnMtc2VyaWYpJyxcclxuICAgICAgICBcImJzLWJvZHktZm9udC1zaXplXCI6ICcxcmVtJyxcclxuICAgICAgICBcImJzLWJvZHktZm9udC13ZWlnaHRcIjogJzQwMCcsXHJcbiAgICAgICAgXCJicy1ib2R5LWxpbmUtaGVpZ2h0XCI6ICcxLjUnLFxyXG4gICAgICAgIFwiYnMtYm9keS1jb2xvclwiOiAnIzIxMjUyOScsXHJcbiAgICAgICAgXCJicy1ib2R5LWJnXCI6ICcjZmZmJyxcclxuICAgICAgICBcImJzLWJvcmRlci13aWR0aFwiOiAnMXB4JyxcclxuICAgICAgICBcImJzLWJvcmRlci1zdHlsZVwiOiAnc29saWQnLFxyXG4gICAgICAgIFwiYnMtYm9yZGVyLWNvbG9yXCI6ICcjZGVlMmU2JyxcclxuICAgICAgICBcImJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudFwiOiAncmdiYSgwLCAwLCAwLCAwLjE3NSknLFxyXG4gICAgICAgIFwiYnMtYm9yZGVyLXJhZGl1c1wiOiAnMC4zNzVyZW0nLFxyXG4gICAgICAgIFwiYnMtYm9yZGVyLXJhZGl1cy1zbVwiOiAnMC4yNXJlbScsXHJcbiAgICAgICAgXCJicy1ib3JkZXItcmFkaXVzLWxnXCI6ICcwLjVyZW0nLFxyXG4gICAgICAgIFwiYnMtYm9yZGVyLXJhZGl1cy14bFwiOiAnMXJlbScsXHJcbiAgICAgICAgXCJicy1ib3JkZXItcmFkaXVzLTJ4bFwiOiAnMnJlbScsXHJcbiAgICAgICAgXCJicy1ib3JkZXItcmFkaXVzLXBpbGxcIjogJzUwcmVtJyxcclxuICAgICAgICBcImJzLWxpbmstY29sb3JcIjogJyMwZDZlZmQnLFxyXG4gICAgICAgIFwiYnMtbGluay1ob3Zlci1jb2xvclwiOiAnIzBhNThjYScsXHJcbiAgICAgICAgXCJicy1jb2RlLWNvbG9yXCI6ICcjZDYzMzg0JyxcclxuICAgICAgICBcImJzLWhpZ2hsaWdodC1iZ1wiOiAnI2ZmZjNjZCdcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9udFNpemVzID0ge1xyXG4gICAgJzN4cyc6IFwiMC44cmVtXCIsXHJcbiAgICAnMnhzJzogXCIxcmVtXCIsXHJcbiAgICB4eHM6IFwiMS4ycmVtXCIsXHJcbiAgICB4czogXCIxLjRyZW1cIixcclxuICAgIHNtOiBcIjEuNnJlbVwiLFxyXG4gICAgbWQ6IFwiMS44cmVtXCIsXHJcbiAgICBsZzogXCIycmVtXCIsXHJcbiAgICB4bDogXCIyLjJyZW1cIixcclxuICAgICcyeGwnOiBcIjIuNHJlbVwiLFxyXG4gICAgJzN4bCc6IFwiMi44cmVtXCIsXHJcbiAgICAnNHhsJzogXCIzLjJyZW1cIlxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgVG9vbHRpcDoge1xyXG4gICAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgICAgICBiZ0NvbG9yOiAnZ3JheS43MDAnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2dyYXkuMTAwJyxcclxuICAgICAgICAgICAgdG9wOiAnMXJlbScsXHJcbiAgICAgICAgICAgIHA6IFwiMXJlbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0UHJvcHM6IHtcclxuICAgICAgICAgICAgdmFyaWFudDogJ2Jhc2UnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIEJ1dHRvbjoge1xyXG4gICAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgICAgICBiZ0NvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGJnR3JhZGllbnQ6ICdub25lJyxcclxuICAgICAgICAgICAgX2FjdGl2ZTogeyBvdXRsaW5lOiAnbm9uZScsIGJveFNoYWRvdzogJ25vbmUnLCBiZ0dyYWRpZW50OiAnbm9uZScgfSxcclxuICAgICAgICAgICAgX2hvdmVyOiB7IG91dGxpbmU6ICdub25lJywgYm94U2hhZG93OiAnbm9uZScsIGJnR3JhZGllbnQ6ICdub25lJyB9LFxyXG4gICAgICAgICAgICBfZm9jdXM6IHsgb3V0bGluZTogJ25vbmUnLCBib3hTaGFkb3c6ICdub25lJywgYmdHcmFkaWVudDogJ25vbmUnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICAgIGJnQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBfYWN0aXZlOiB7IG91dGxpbmU6ICdub25lJyB9LFxyXG4gICAgICAgICAgICAgICAgX2hvdmVyOiB7IG91dGxpbmU6ICdub25lJyB9LFxyXG4gICAgICAgICAgICAgICAgX2ZvY3VzOiB7IG91dGxpbmU6ICdub25lJyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgICAgICB2YXJpYW50OiAnYmFzZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIDMuIGV4dGVuZCB0aGUgdGhlbWVcclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZywgZm9udHMsIGNvbG9ycywgc3R5bGVzLCBmb250U2l6ZXMsIGNvbXBvbmVudHMgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmY1YWEyNmEwNGVhZjFjNGU5YjZcIikiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwiYmciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJjb2xvcnMiLCJibGFja3MiLCJicmFuZCIsImJsdWVzIiwiZ3JheSIsInBsIiwic2wiLCJhY29zIiwicm9vdCIsImZvbnRTaXplcyIsInh4cyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJjb21wb25lbnRzIiwiVG9vbHRpcCIsImJhc2VTdHlsZSIsImJnQ29sb3IiLCJ0b3AiLCJwIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsIkJ1dHRvbiIsIm91dGxpbmUiLCJiZ0dyYWRpZW50IiwiX2FjdGl2ZSIsImJveFNoYWRvdyIsIl9ob3ZlciIsIl9mb2N1cyIsInZhcmlhbnRzIiwiYmFzZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==