import React from "react"
import SortableTable from "/components/SortableTable.js"

export default function StudentList({ students, classroom }) {
  
	const headers = [
		{
			accessor: "avatar",
			Cell: ({ cell: { value } }) => <img src={value} />,
		},
		{
			Header: "name",
			accessor: "name",
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
