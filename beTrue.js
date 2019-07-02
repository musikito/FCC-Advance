//Object.hasOwnProperty()
//Object.getOwnPropertyNames()
function truthCheck(collection, pre) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i][pre]) {
        } else {
            return false;
        }
    }
    return true;
}

truthCheck(
    [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
    ],
    'sex'
);
