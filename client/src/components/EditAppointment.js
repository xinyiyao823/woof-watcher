import React, { useState } from 'react'
import Modal from './Modal'

function EditAppointment({startDate, setStartDate}) {
    const [editingAppointment, setEditingAppointment] = useState(startDate)
    return (
        <div>
            <Modal />
        </div>
    )
}

export default EditAppointment
