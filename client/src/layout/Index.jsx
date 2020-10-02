import React from 'react'

const App = ({ children }) => {
    return (
        <div className="container-fluid">
            {children}
        </div>
    );
}

export default App;