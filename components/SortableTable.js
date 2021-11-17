import React from "react"
import { useTable, useSortBy } from "react-table"
import Link from "next/link"
import styled from "@emotion/styled"

export default function SortableTable({ columns, data, classroom }) {

	const Table = styled.table`
		width: 91%;
		height: 80%;
		background: white;
		margin: 3rem;
	`

	const Th = styled.th`
		height: 80px;
	`

	const Tr = styled.tr`
		height: 64px;
		cursor: pointer;
		&:nth-of-type(2n-1) {
			background: #f4fbff;
		}
		&:hover {
			background: #d0eeff;
		}
	`

	const Cell = styled.td`
		text-align: center;
		border: none;
		img{
			max-height: 48px
		}
	`

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable(
			{
				columns,
				data,
			},
			useSortBy
		)

	const firstPageRows = rows.slice(0, 20)

	return (
		<>
			<Table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<Th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									<span>
										{column.isSorted ? (column.isSortedDesc ? "▲" : "▼") : ""}
									</span>
								</Th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{firstPageRows.map((row, i) => {
						prepareRow(row)
						return (
							<Link
								key={i}
								href={{
									pathname: "/ThisStudent",
									query: {
										student: [row.original.key],
										classroom: classroom,
									},
								}}
							>
								<Tr {...row.getRowProps()}>
									{row.cells.map((cell, index) => {
										return (
											<Cell key={index} {...cell.getCellProps()}>
												{cell.render("Cell")}
											</Cell>
										)
									})}
								</Tr>
							</Link>
						)
					})}
				</tbody>
			</Table>
			<br />
		</>
	)
}
