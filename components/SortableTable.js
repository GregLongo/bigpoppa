import React from "react"
import { useTable, useSortBy } from "react-table"
import Link from "next/link"
import styled from "@emotion/styled"
import { useDispatch } from "react-redux"
import { selectStudent } from "../store/actions/thisStudentAction"

export default function SortableTable({ columns, data, classroom }) {

	const Table = styled.table`
		height: 80%;
		background: white;
		margin-top: 2rem;
		margin-bottom: 0;
		margin-left: -1rem;
		margin-right: 1rem;
		width: 100vw;
		@media(min-width:768px){
			margin: 3rem;
			width: 91%
		}
	`

	const Th = styled.th`
		text-align: ${props => props.align};
		height: 80px;
		font-size: 19px;
		color: #122433;
	`

	const Tr = styled.tr`
		height: 4rem;
		cursor: pointer;
		&:nth-of-type(2n-1) {
			background: #f4fbff;
		}
		&:hover {
			background: #d0eeff;
		}
	`

	const Cell = styled.td`
		text-align: ${props => props.align};
		border: none;
		height: 4rem;
		img {
			height: 95%;
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

	const firstPageRows = rows.slice(0, 20);
	const dispatch = useDispatch();

	return (
		<>
			<Table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, index) => (
								<Th align={index == 1 ? 'left' : 'center'} {...column.getHeaderProps(column.getSortByToggleProps())}>
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
										student: [row.original.studentId],
										classroom: classroom,
									},
								}}
							>
								<Tr {...row.getRowProps()}
									onClick={() => {
										dispatch(selectStudent(row.original))
									}}>
									{row.cells.map((cell, index) => {
										return (
											<Cell key={index} {...cell.getCellProps()}
												align={index == 1 ? 'left' : 'center'}>
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
