import React from "react";
import avatars from '../assets/avatars.js';
import SortableTable from "./SortableTable.js";

export default function StudentList({ students, classroom }) {

	const headers = [
		{
			accessor: "avatarIndex",
			Cell: ({ cell: { value } }) => <img src={avatars[value - 1]} />,
		},
		{
			Header: "Name",
			accessor: "studentId",
		},
		{
			Header: "Popups",
			accessor: "popupCount",
		},
		{
			Header: "Questions",
			Cell: ({ cell: { value } }) => <span>11</span>,
		},
		{
			Header: "AVG Speed",
			accessor: "speed",
			Cell: ({ cell: { value } }) => Math.round(Number(value) / 60)
		},
		{
			Header: "Comprehension",
			accessor: "score",
			Cell: ({ cell: { value } }) => Math.ceil(Number(value))
		}
	]

	const data = React.useMemo(() => students, [])

	return <SortableTable columns={headers} data={data} classroom={classroom} />
}
