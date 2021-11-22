import styled from "@emotion/styled"
import React, { useCallback } from "react"
import Table from "/components/Table.js"

function DefaultColumnFilter() {
	return null
}

const Category = styled.button`
	background: ${({ text }) =>
		text == "theme"
			? "#E37F4A"
			: text == "plot"
			? "#B93454"
			: text == "characters"
			? "#FECE80"
			: text == "setting"
			? "#32658C"
			: text == "conflict / problem solution"
			? "#9F3801"
			: text == "text evidence / inference"
			? "#7E001E"
			: text == "compare / contrast"
			? "#77C294"
			: text == "sequence / summary"
			? "#0F314D"
			: text == "challenge"
			? "#7897AF"
			: text == "vocabulary"
			? "#02A87D"
			: text == "author / illustrator"
			? "#73C6B0"
			: text == "structure - part / whole"
			? "#B7D3E8"
			: text == "point of view"
			? "#E995A9"
			: text == "impact of illustrationas"
			? "#CB9D85"
			: text == "connection with source materials"
			? "#0F314D"
			: "#0F314D"};
	width: fit-content;
	margin-bottom: 1rem;
	padding: 0.3rem 0.5rem;
	border-radius: 16px;
	border: none;
	color: white;
	cursor: pointer;
	margin: 0.4rem;
	&:hover {
		background: white;
		color: ${({ text }) =>
			text == "theme"
				? "#E37F4A"
				: text == "plot"
				? "#B93454"
				: text == "characters"
				? "#FECE80"
				: text == "setting"
				? "#32658C"
				: text == "conflict / problem solution"
				? "#9F3801"
				: text == "text evidence / inference"
				? "#7E001E"
				: text == "compare / contrast"
				? "#77C294"
				: text == "sequence / summary"
				? "#0F314D"
				: text == "challenge"
				? "#7897AF"
				: text == "vocabulary"
				? "#02A87D"
				: text == "author / illustrator"
				? "#73C6B0"
				: text == "structure - part / whole"
				? "#B7D3E8"
				: text == "point of view"
				? "#E995A9"
				: text == "impact of illustrationas"
				? "#CB9D85"
				: text == "connection with source materials"
				? "#0F314D"
				: "#0F314D"};
		outline-color: ${({ text }) =>
			text == "theme"
				? "#E37F4A"
				: text == "plot"
				? "#B93454"
				: text == "characters"
				? "#FECE80"
				: text == "setting"
				? "#32658C"
				: text == "conflict / problem solution"
				? "#9F3801"
				: text == "text evidence / inference"
				? "#7E001E"
				: text == "compare / contrast"
				? "#77C294"
				: text == "sequence / summary"
				? "#0F314D"
				: text == "challenge"
				? "#7897AF"
				: text == "vocabulary"
				? "#02A87D"
				: text == "author / illustrator"
				? "#73C6B0"
				: text == "structure - part / whole"
				? "#B7D3E8"
				: text == "point of view"
				? "#E995A9"
				: text == "impact of illustrationas"
				? "#CB9D85"
				: text == "connection with source materials"
				? "#0F314D"
				: "#0F314D"};
				outline: 1px solid
	}
`

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
	column: { filterValue, setFilter, preFilteredRows, id },
}) {
	// Calculate the options for filtering
	// using the preFilteredRows

	// const options = React.useMemo(() => {
	//   const options = new Set();
	//   preFilteredRows.forEach((row) => {
	//     options.add(row.values[id]);
	//   });
	//   return [...options.values()];
	// }, [id, preFilteredRows]);

	//using predetermined filters instead
	const options = [
		"characters",
		"setting",
		"plot",
		"conflict / problem solution",
		"text evidence / inference",
		"compare / contrast",
		"sequence / summary",
		"theme",
		"challenge",
		"vocabulary",
		"author / illustrator",
		"structure - part / whole",
		"point of view",
		"impact of illustrationas",
		"connection with source materials",
	]
	return (
		<div>
			<Category
				onClick={(e) => {
					e.preventDefault();
					setFilter("")
				}}
			>
				all
			</Category>
			{options.map((option, i) => (
				<Category
					text={option}
					key={i}
					onClick={(e) => {
						e.preventDefault();
						setFilter(option)
					}}
				>
					{option}
				</Category>
			))}
		</div>
	)
}

export default function PopupsTable(props) {
	const defaultColumn = React.useMemo(
		() => ({
			Filter: DefaultColumnFilter,
		}),
		[]
	)

	const callback = useCallback((lp) => {
		props.grandParentCallback(lp)
	}, [])

	const data = React.useMemo(() => props.papusas, [])

	const headers = [
		{
			Header: "LP",
			accessor: "lp",
		},
		{
			Header: "Title",
			accessor: "title",
		},
		{
			Header: "Category",
			accessor: "category",
			Filter: SelectColumnFilter,
			filter: "includesValue",
		},
		{
			Header: "Page",
			accessor: "page",
		},
		{
			Header: "Interactive?",
			accessor: "interactive",
		},
	]

	const columns = React.useMemo(() => headers, [])

	return (
		<div>
			<Table
				columns={columns}
				data={data}
				defaultColumn={defaultColumn}
				parentCallback={callback}
			/>
		</div>
	)
}
