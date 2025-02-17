const school = {
    schoolName : 'kendua School',
    room : [2, 3, 6, 9, 7],
    place : 'kendua',
    colour : {
        bigColour : 'Green',
        lowColour : 'yellow',
    },
    classRoom : {
        firstRoom : 20,
        secendRoom : 30,
        thirdRoom : 50,
    },
    schoolMath : 2,
}
school.classRoom.thirdRoom = 120;
console.log(school.classRoom.thirdRoom)

//  'sk' = school.schoolName.slice(0,6)

console.log(school.schoolName)

school.room[2] = 15,
console.log(school.room[2])
