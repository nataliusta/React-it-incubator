export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => { 

    return items.map( u => { // makes copy of users
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
