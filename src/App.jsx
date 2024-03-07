import { useEffect } from "react"
import { useState } from "react"
import DataTable from "react-data-table-component"

const data = [
  { nombre: 'Jonatandb', apellido: 'Db', edad: 25 },
  { nombre: 'Sponwate', apellido: '', edad: 25 },
  { nombre: 'Pappin', apellido: '', edad: 25 },
  { nombre: 'Pappin2', apellido: '', edad: 25 },
  { nombre: 'Pappin3', apellido: '', edad: 25 },
  { nombre: 'Pappin4', apellido: '', edad: 25 },
  { nombre: 'Pappin5', apellido: '', edad: 25 },
  { nombre: 'Pappin6', apellido: '', edad: 25 },
  { nombre: 'Pappin7', apellido: '', edad: 25 },
  { nombre: 'Pappin8', apellido: '', edad: 25 },
  { nombre: 'Pappin9', apellido: '', edad: 25 },
  { nombre: 'Pappin10', apellido: '', edad: 25 },
]

function App() {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)

  const columns = [
    { name: 'Nombre', selector: row => row.nombre, sortable: true },
    { name: 'Apellido', selector: row => row.apellido, sortable: true },
    { name: 'Edad', selector: row => row.edad, sortable: true },
  ]

  const handleChange = (e) => {
    const filteredRecords = data.filter(r => {
      return r.nombre.toLowerCase().includes(e.target.value)
    })
    setRecords(filteredRecords)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRecords(data)
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeoutId)
  }, [])


  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Buscar por..." />
      <DataTable
        title="Datos de usuarios"
        columns={columns}
        data={records}
        selectableRows
        onSelectedRowsChange={data => console.log(data.selectedRows)}
        pagination
        fixedHeader
        progressPending={loading}
        progressComponent={<h3>Cargando...</h3>}
      />
    </div>
  )
}

export default App
