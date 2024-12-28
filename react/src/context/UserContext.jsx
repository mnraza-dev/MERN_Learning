import React from 'react'

export const DataContext = React.createContext()
const UserContext = ({ children }) => {
    const username = "John Doe bhai";
    return (
        <div>
            <DataContext.Provider value={username}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext