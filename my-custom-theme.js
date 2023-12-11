
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1D84B5 
		"--color-primary-50": "221 237 244", // #ddedf4
		"--color-primary-100": "210 230 240", // #d2e6f0
		"--color-primary-200": "199 224 237", // #c7e0ed
		"--color-primary-300": "165 206 225", // #a5cee1
		"--color-primary-400": "97 169 203", // #61a9cb
		"--color-primary-500": "29 132 181", // #1D84B5
		"--color-primary-600": "26 119 163", // #1a77a3
		"--color-primary-700": "22 99 136", // #166388
		"--color-primary-800": "17 79 109", // #114f6d
		"--color-primary-900": "14 65 89", // #0e4159
		// secondary | #54F2F2 
		"--color-secondary-50": "229 253 253", // #e5fdfd
		"--color-secondary-100": "221 252 252", // #ddfcfc
		"--color-secondary-200": "212 252 252", // #d4fcfc
		"--color-secondary-300": "187 250 250", // #bbfafa
		"--color-secondary-400": "135 246 246", // #87f6f6
		"--color-secondary-500": "84 242 242", // #54F2F2
		"--color-secondary-600": "76 218 218", // #4cdada
		"--color-secondary-700": "63 182 182", // #3fb6b6
		"--color-secondary-800": "50 145 145", // #329191
		"--color-secondary-900": "41 119 119", // #297777
		// tertiary | #F4E04D 
		"--color-tertiary-50": "253 250 228", // #fdfae4
		"--color-tertiary-100": "253 249 219", // #fdf9db
		"--color-tertiary-200": "252 247 211", // #fcf7d3
		"--color-tertiary-300": "251 243 184", // #fbf3b8
		"--color-tertiary-400": "247 233 130", // #f7e982
		"--color-tertiary-500": "244 224 77", // #F4E04D
		"--color-tertiary-600": "220 202 69", // #dcca45
		"--color-tertiary-700": "183 168 58", // #b7a83a
		"--color-tertiary-800": "146 134 46", // #92862e
		"--color-tertiary-900": "120 110 38", // #786e26
		// success | #2cdda8 
		"--color-success-50": "223 250 242", // #dffaf2
		"--color-success-100": "213 248 238", // #d5f8ee
		"--color-success-200": "202 247 233", // #caf7e9
		"--color-success-300": "171 241 220", // #abf1dc
		"--color-success-400": "107 231 194", // #6be7c2
		"--color-success-500": "44 221 168", // #2cdda8
		"--color-success-600": "40 199 151", // #28c797
		"--color-success-700": "33 166 126", // #21a67e
		"--color-success-800": "26 133 101", // #1a8565
		"--color-success-900": "22 108 82", // #166c52
		// warning | #e79608 
		"--color-warning-50": "251 239 218", // #fbefda
		"--color-warning-100": "250 234 206", // #faeace
		"--color-warning-200": "249 229 193", // #f9e5c1
		"--color-warning-300": "245 213 156", // #f5d59c
		"--color-warning-400": "238 182 82", // #eeb652
		"--color-warning-500": "231 150 8", // #e79608
		"--color-warning-600": "208 135 7", // #d08707
		"--color-warning-700": "173 113 6", // #ad7106
		"--color-warning-800": "139 90 5", // #8b5a05
		"--color-warning-900": "113 74 4", // #714a04
		// error | #a02727 
		"--color-error-50": "241 223 223", // #f1dfdf
		"--color-error-100": "236 212 212", // #ecd4d4
		"--color-error-200": "231 201 201", // #e7c9c9
		"--color-error-300": "217 169 169", // #d9a9a9
		"--color-error-400": "189 104 104", // #bd6868
		"--color-error-500": "160 39 39", // #a02727
		"--color-error-600": "144 35 35", // #902323
		"--color-error-700": "120 29 29", // #781d1d
		"--color-error-800": "96 23 23", // #601717
		"--color-error-900": "78 19 19", // #4e1313
		// surface | #040303 
		"--color-surface-50": "217 217 217", // #d9d9d9
		"--color-surface-100": "205 205 205", // #cdcdcd
		"--color-surface-200": "192 192 192", // #c0c0c0
		"--color-surface-300": "155 154 154", // #9b9a9a
		"--color-surface-400": "79 79 79", // #4f4f4f
		"--color-surface-500": "4 3 3", // #040303
		"--color-surface-600": "4 3 3", // #040303
		"--color-surface-700": "3 2 2", // #030202
		"--color-surface-800": "2 2 2", // #020202
		"--color-surface-900": "2 1 1", // #020101
		
	}
}