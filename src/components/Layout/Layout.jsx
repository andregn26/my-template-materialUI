import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themeSettings from "../../theme";

const Layout = ({ children }) => {
	const theme = themeSettings;
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</>
	);
};

export default Layout;
