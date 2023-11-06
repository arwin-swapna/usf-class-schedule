import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		main: true,
		secondary: true,
		navbar: true
	}
}

const Colors = {
	primary: "#006748",
	secondary: "#FFF",
	success: "#4CAF50",
	info: "#00a2ff",
	danger: "#FF5722",
	warning: "#FFC107",
	dark: "#0e1b20",
	light: "#aaa",
	muted: "#abafb3",
	border: "#DDDFE1",
	inverse: "#2F3D4A",
	shaft: "#333",
	dove_gray: "#d5d5d5",
	body_bg: "#f3f6f9",
	///////////////
	// Solid Color
	///////////////
	white: "#fff",
	black: "#000",
	specialBg: "#f2ede9",
	subtitle: "#747474",
	subtitle2: "#e3e3e3",

	table_head_bg: "#b9b9b9",
	table_border: "#a1a1a1",
	button_hover: "#003223"
};

const theme = createTheme({
	palette: {
		primary: {
			main: Colors.primary,
			light: Colors.specialBg
		},
		secondary: {
			main: Colors.secondary, 
			light: Colors.subtitle,
			dark: Colors.subtitle2
		},
	},
	typography: {
		"fontFamily": "Inter",
		"fontSize": 14,
	},
	components: {
		MuiTableHead: {
			defaultProps: {
				style: {
					backgroundColor: Colors.table_head_bg,
				}
			}
		},

		MuiTableCell: {
			defaultProps: {
				style: {
					textAlign: "center",
					color: "black",
					border: "1.5px solid #a1a1a1",
					padding: "5px 10px",
				}
			}
		},

		MuiButton: {
			defaultProps: {
				disableRipple: true, 
			},
			variants: [
				{
					props: {variant : 'main'},
					style: {
						backgroundColor: Colors.secondary,
						color:Colors.primary,
						borderRadius:'30px', 
						border: '1.5px solid black',
						letterSpacing:2,
						fontWeight: 'bold',
						'&:hover': {
							backgroundColor: Colors.primary,
							color:Colors.secondary,
						},
					}
				},
				{
					props : {variant : 'secondary'},
					style: {
						backgroundColor: Colors.primary,
						color:Colors.secondary,
						'&:hover': {
							backgroundColor: Colors.button_hover,
						},
					},
				},
				{
					props : {variant : 'navbar'},
					style: {
						color: Colors.secondary,
						display: 'block',
						'&hover': {
							backgroundColor: "black"
						}
					},
				}
			]
		}
	}
});

export default theme;