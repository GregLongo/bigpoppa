import styled from "@emotion/styled"
import React, { useState } from "react"
import { useFilters, useTable } from "react-table"

export default function Table({
	columns,
	data,
	parentCallback,
	defaultColumn,
}) {

	const Table = styled.table`
		width: 91%;
		height: 80%;
		background: white;
		margin: 0rem 3rem;
		border-radius: 0 0 5px 5px;
	`

	const Th = styled.th`
		height: 32px;
	`

	const Tr = styled.tr`
		cursor: pointer;
		&:nth-of-type(2n-1) {
			background: #f4fbff;
		}
		&:hover {
			background: #d0eeff;
		}
	`

	const Cell = styled.td`
		/* text-align: center; */
		border: none;
		padding: 0.5rem;
	`

	const Filters = styled.div`
		align-items: center;
		margin: 2rem .8rem 0rem 3rem;
		background-color: white;
		padding: 2rem;
		border-radius: 5px 5px 0 0 ;
		span{
			margin-bottom: 1rem
		}
	`

	const [activeRow, setActiveRow] = useState(false)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		visibleColumns,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			initialState: {
				hiddenColumns: "lp",
			},
		},
		useFilters
	)

	const firstPageRows = rows.slice(0, 15)
	return (
		<>
			<Filters>
				<span>Click to display by category:</span>
				{headerGroups[0].headers[1].render("Filter")}
			</Filters>
			<Table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup, index) => (
						<tr key={index} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<Th {...column.getHeaderProps()}>
									{column.render("Header")}
								</Th>
							))}
						</tr>
					))}
					<tr>
						<th
							colSpan={visibleColumns.length}
							style={{
								textAlign: "left",
							}}
						></th>
					</tr>
				</thead>
				<tbody {...getTableBodyProps()}>
					{firstPageRows.map((row, i) => {
						prepareRow(row)
						return (
							<Tr
								key={i}
								{...row.getRowProps()}
								className={i == activeRow ? "active" : null}
								onClick={(e) => {
									e.preventDefault();
									setActiveRow(i)
									parentCallback(row.values.lp)
								}}
							>
								{row.cells.map((cell) => {
									return (
										<Cell {...cell.getCellProps()}>{cell.render("Cell")}</Cell>
									)
								})}
							</Tr>
						)
					})}
				</tbody>
			</Table>
			<div></div>
		</>
	)
}
