import React from 'react'

export default function Alert(propl) {
    return (
        propl.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{propl.alert.type}</strong>{propl.alert}
            <button type="button" className="btn-close pr-5" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
