import React from 'react'

function UserUpdate() {
    return (
        <div >
            <div className="bg-gray-200 p-6 rounded-lg">
                YOu can only update its permission to Admin
                <div>

                    <button className="bg-red-400 hover:bg-red-600 rounded-lg px-4 py-2 text-white font-bold m-4">Give Acess of Admin</button>
                    <button className="bg-red-400 hover:bg-red-600 rounded-lg px-4 py-2 text-white font-bold">Take BackAcess of user</button>
                </div>
            </div>
        </div>


    )
}

export default UserUpdate