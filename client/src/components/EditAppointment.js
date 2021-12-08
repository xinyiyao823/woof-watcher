import React, { useState } from 'react'
import EditModal from './EditModal'

function EditAppointment({startDate, setStartDate}) {
    const [editingAppointment, setEditingAppointment] = useState(startDate)


    return (
        <div>
            <EditModal editingAppointment={editingAppointment} setEditingAppointment={setEditingAppointment}/>
        </div>
    )
}

export default EditAppointment
