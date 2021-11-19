import React from "react"
import avatars from "../assets/avatars"
import SortableTable from "/components/SortableTable.js"

export default function StudentList({ students, classroom }) {

	const headers = [
		{
			accessor: "avatarIndex",
			Cell: ({ cell: { value } }) => <img src={avatars[value]} />,
		},
		{
			Header: "name",
			accessor: "studentId",
		},
		{
			Header: "popupCount",
			accessor: "popupCount",
		},
		{
			Header: "speed",
			accessor: "speed",
		},
	]

	const data = React.useMemo(() => students, [])

	return <SortableTable columns={headers} data={data} classroom={classroom} />
}
