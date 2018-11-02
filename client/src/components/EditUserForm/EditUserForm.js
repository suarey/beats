import React from 'react'

export default ({user, myChange, handleSubmit, handleDelete}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>NAME:</label>
                <input onChange={myChange} name="name" type="text" value={user.name} />
                <label>EMAIL:</label>
                <input onChange={myChange} name="email" type="text" value={user.email} />
                <label>PASSWORD:</label>
                <input onChange={myChange} name="password" type="text" />
                <input type="submit"/>
                
            </form>
            <h4 onClick={handleDelete}>DELETE</h4>
        </div>
    )

} 