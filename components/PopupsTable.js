import React, { useState, useEffect, useCallback } from 'react'
import { useTable, useFilters, useAsyncDebounce } from "react-table";
import { useSelector } from 'react-redux'
import Table from "/components/Table.js"
import styled from "@emotion/styled"


function DefaultColumnFilter() {
  return null;
}

const Category = styled.button`
  background: ${({text})=>text == 'theme' ? '#F48C71'
   : text == 'plot' ? '#77C294'
   : text == 'characters' ?  '#A4DCF7'
   : text == 'setting' ?  '#FFCB41'
   : text == 'conflict / problem solution' ?  '#F48C71'
   : text == 'text evidence / inference' ?  '#FFCB41'
   : text == 'compare / contrast' ?  '#77C294'
   : text == 'sequence / summary' ?  '#F48C71'
   : text == 'challenge' ?  '#77C294'
   : text == 'vocabulary' ?  '#A4DCF7'
   : text == 'author / illustrator' ?  '#FFCB41'
   : text == 'structure - part / whole' ?  '#F48C71'
   : text == 'point of view' ?  '#FFCB41'
   : text == 'impact of illustrationas' ?  '#FFCB41'
   : text == 'connection with source materials' ?  '#F48C71'
   : '#F48C71'
    } ;
  width: fit-content;
  margin-bottom: 1rem;
  padding: .3rem .5rem;
  border-radius: 16px;
  border: none;
  color: white;
  cursor: pointer;
  margin: .4rem;
  &:hover{
    background: #76d260
  }

`




// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id }
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
console.log()
const options = [ "characters", "setting", "plot", "conflict / problem solution",	"text evidence / inference",	"compare / contrast",	"sequence / summary",	"theme",	"challenge",	"vocabulary",	"author / illustrator",	"structure - part / whole",	"point of view", "impact of illustrationas",	"connection with source materials" ]


  // Render a multi-select box
  return (
    <div>
    <Category onClick={(e)=>{
      setFilter('')
    }}>all</Category>
    {options.map((option,i)=>(
      <Category text={option} key={i} onClick={(e)=>{
        setFilter(option)
      }}>{option}</Category>
    ))}
    </div>
  );
}


export default function PopupsTable(props) {


    const defaultColumn = React.useMemo(
      () => ({
        // Let's set up our default Filter UI
        Filter: DefaultColumnFilter
      }),
      []
    );


  // const [lp, setLP] = useState(0);

  const callback = useCallback((lp) =>{
    props.grandParentCallback(lp);
  },[]);

  const data = React.useMemo(
    ()=>props.papusas,
    []
  )

  const headers =[
    {
      Header: 'LP',
      accessor: 'lp'
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Category',
      accessor: 'category',
      Filter: SelectColumnFilter,
      filter: "includesValue"
    },
    {
      Header: 'Page',
      accessor: 'page'
    },
    {
      Header: 'Interactive?',
      accessor: 'interactive'
    },
  ];



  const columns = React.useMemo(
    ()=>headers,
    []
  )

  // const data = React.useMemo(() => makeData(100000), []);

  return(
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
