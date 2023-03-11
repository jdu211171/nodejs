/*No7*/
/*array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring*/
let user = {
    id: 1,
    name: 'Odil',
    age: 78,
    children: [
        {
            id: 1,
            name: 'Umar',
            age: 54,
            children: [
                { id: 1, name: 'Asmo', age: 34 },
                { id: 2, name: 'Osim', age: 30 },
                { id: 3, name: 'Xattob', age: 25 },
            ]
        },
        { id: 2, name: 'Laylo', age: 54 },
        { id: 3, name: 'Soliha', age: 12 },
    ]
}
function aboveEighteen(object) {
    let result = []
    let index = 0
    while(object.children){
        while(object.children[index] !== undefined){
            if (object.children[index].age > 18){
                result.push(object.children[index].name);
            }
            index++;
        }
        index = 0;
        object.children = object.children.children;
    }
    return result
}
console.log(aboveEighteen(user))
/*function aboveEighteen(children) {
    let result = []
    let index = 0
    while (children[index].age > 18) {
        result.push(children[index].name);
        index++;
        if(index >= children.length) {
            break;
        }

    }
    return result
}*/

