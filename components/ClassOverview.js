/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import React from "react";
import DynamicBulletChart from "./DynamicBulletChart.js";
import PieChart from "./PieChart.js";
import SecondaryHeader from "./SecondaryHeader.js";

export default function ClassOverview({ classroom }) {
	const ClassOverViewComponent = styled.div`
		padding-top: 2rem;
		padding-left: 4rem;
		padding-right: 4rem;
	`;

	const Container = styled.div`
		display: grid;
		grid-template-columns: 49% 2% 49%;
		.middle-part {
			margin: 2rem;
		}
		@media (max-width: 880px) {
			grid-template-columns: 100% 100%;
			.middle-part {
				display: none;
			}
		}
	`;

	const ClassOverviewLeftPart = styled.div`
		background-color: white;
		padding: 1rem 2rem;
		margin: 3rem 0;
		border-radius: 10px;
	`

	const ClassOverviewRightPart = styled.div`
		background-color: white;
		padding: 1rem 2rem;
		margin: 3rem 0;
		border-radius: 10px;
	`

	const CategoryScoreHeadPart = styled.div`
	`;

	const CategoryScoreBody = styled.div`
		.body-title {
			margin-left: .5rem;
			font-weight: bold;
		}
	`;

	const CategoryScoreList = styled.div`
		display: grid;
		grid-template-columns: 45% 10% 45%;
		.middle-part {
			margin: 2rem;
		}
		@media (max-width: 880px) {
			grid-template-columns: 100% 100%;
			.middle-part {
				display: none;
			}
		}
	`;

	const RightPartHeader = styled.div`
		font-size: 28px;
		color: #122433;
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	`

	const PieChartContainer = styled.div`
		display: grid;
		grid-template-columns: 50% 50%;
		@media (max-width: 880px) {
			grid-template-columns: 100% 100%;
		}
		color: #707070;
	`

	const CategoryNameList = styled.div`
		display: flex;
		flex-direction: column;
		margin: 1rem;
	`

	const CategoryColorBox = styled.div`
		background-color: ${props => props.color};
		width: 40px;
		height: 40px;
		margin: 0.5rem;
	`

	const CategoryColorNameBox = styled.div`
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 1rem;
		.category-name {

		}
	`

	const AreaChart = styled.div`
		.area-chart-title {
			display: flex;
			justify-content: center;
			font-size: 20px;
		}
		.area-chart {
			height: 100%;
    		width: 100%;
    		border: solid 1px #707070;
			display: flex;
			img {
				height: 100%;
    			width: 100%;
			}
		}
		.x-axis {
			display: flex;
			justify-content: space-between;
			font-size: 14px;
		}
	`

	return (<ClassOverViewComponent>
		<SecondaryHeader><span>Class Overview</span></SecondaryHeader>
		<Container>
			<ClassOverviewLeftPart>
				<CategoryScoreHeadPart>
					<DynamicBulletChart
						val={26}
						max={60}
						title={"AVG Speed"}
						chartColor={"#02A87D"}
						width={15}
						titleFontSize={16}
						fontSize={25}
						titleColor={"#122433"}
						color={"#6E7880"}
						showGradient={true}
					/>
					<DynamicBulletChart
						val={26}
						max={100}
						title={"AVG Comprehension"}
						chartColor={"#EB720B"}
						width={15}
						titleFontSize={16}
						fontSize={25}
						titleColor={"#122433"}
						color={"#6E7880"}
						showGradient={true}
					/>
				</CategoryScoreHeadPart>
				<CategoryScoreBody>
					<div class='body-title'>
						<span>By Category</span>
					</div>
					<CategoryScoreList>
						<div className={"left-part"}>
							<DynamicBulletChart
								val={42}
								max={100}
								title={"Plot"}
								chartColor={"#EB720B"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={80}
								max={100}
								title={"Characters"}
								chartColor={"#7E001E"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={42}
								max={65}
								title={"Themes"}
								chartColor={"#E37F4A"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={65}
								max={100}
								title={"Conflict"}
								chartColor={"#9F3801"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={80}
								max={100}
								title={"Solution"}
								chartColor={"#E995A9"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={70}
								max={100}
								title={"Text Evidence / Inference"}
								chartColor={"#7E001E"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={70}
								max={100}
								title={"Compare / Contrast"}
								chartColor={"#E0BC81"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={70}
								max={100}
								title={"Impact of Illustrations"}
								chartColor={"#CB9D85"}
								width={12}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
						</div>
						<div className={'middle-part'}>
						</div>
						<div className={"right-part"}>
							<DynamicBulletChart
								val={26}
								max={100}
								title={"Sequence / Summary"}
								chartColor={"#32658C"}
								width={10}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={42}
								max={100}
								title={"Challenge"}
								chartColor={"#7897AF"}
								width={10}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={73}
								max={100}
								title={"Vocabulary"}
								chartColor={"#02A87D"}
								width={10}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={67}
								max={100}
								title={"Author / Illustrator"}
								chartColor={"#73C6B0"}
								width={10}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={85}
								max={100}
								title={"Point of View"}
								chartColor={"#014A37"}
								width={10}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={60}
								max={100}
								title={"Structure - Part / Whole"}
								chartColor={"#B7D3E8"}
								width={10}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
							<DynamicBulletChart
								val={40}
								max={100}
								title={"Connection with Source Materials"}
								chartColor={"#6BAF9D"}
								width={10}
								titleFontSize={14}
								fontSize={20}
								titleColor={"#6E7880"}
								color={"#6E7880"}
								showGradient={false}
							/>
						</div>
					</CategoryScoreList>
				</CategoryScoreBody>
			</ClassOverviewLeftPart>
			<div className={"middle-part"}></div>
			<ClassOverviewRightPart>
				<RightPartHeader>
					<span>Popups By Category</span>
				</RightPartHeader>
				<PieChartContainer>
					<CategoryNameList>
						<CategoryColorNameBox>
							<CategoryColorBox color={"#FECE80"} />
							<div className={"category-name"}><span>Characters</span></div>
						</CategoryColorNameBox>
						<CategoryColorNameBox>
							<CategoryColorBox color={"#014A37"} />
							<div className={"category-name"}><span>Point of View</span></div>
						</CategoryColorNameBox>
						<CategoryColorNameBox>
							<CategoryColorBox color={"#73C6B0"} />
							<div className={"category-name"}><span>Author/Illustraitor</span></div>
						</CategoryColorNameBox>
					</CategoryNameList>
					<PieChart>
						<div>KK</div>
					</PieChart>
				</PieChartContainer>
				<AreaChart>
					<div className={"area-chart-title"}><span>School Year</span></div>
					<div className={"area-chart"}>
						<img src={"/img/school_year.svg"} />
					</div>
					<div className={"x-axis"}>
						{
							['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
								return <div className="month">{month}</div>
							})
						}
					</div>
				</AreaChart>
			</ClassOverviewRightPart>
		</Container>
	</ClassOverViewComponent>
	);
}
