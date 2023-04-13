import React from "react";
import PaddingContainer from "../HelpersComponents/Containers/PaddingContainer";
import WidthCenterContainer from "../HelpersComponents/Containers/WidthCenterContainer";
import { Typography } from "@mui/material";

const WrapperTypography = () => {
	return (
		<div>
			<PaddingContainer>
				<WidthCenterContainer>
					<Typography variant="fs6xl">fs6xl</Typography>
					<Typography variant="fs5xl">fs5xl</Typography>
					<Typography variant="h1">h1</Typography>
					<Typography variant="h2">h2</Typography>
					<Typography variant="h3">h3</Typography>
					<Typography variant="h4">h4</Typography>
					<Typography variant="h5">h5 tag</Typography>
					<Typography variant="h6">h6 tag</Typography>
					<Typography variant="body1">body1</Typography>
					<Typography variant="body2">body2</Typography>
				</WidthCenterContainer>
			</PaddingContainer>
		</div>
	);
};

export default WrapperTypography;
