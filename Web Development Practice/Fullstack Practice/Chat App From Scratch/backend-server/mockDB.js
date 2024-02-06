const mockDB = {
    users: [
        15785, 89438, 99666
    ],
    rooms: [
        'butter', 'beans'
    ],
    roomsUsers: {
        butter: [
            15785, 89438
        ],
        beans: [
            89438, 99666
        ]
    },
    roomMessages: [
    ],
    userCanEnterRoom: function(id, room){
        if(mockDB.users.includes(parseInt(id)) && mockDB.rooms.includes(room)){
                                        console.log('user exists and room exists')
            if(mockDB.roomsUsers[room].includes(parseInt(id))){
                // the room exists and they can join it
                    return true
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}

export default mockDB