//for in loop

const myObject={
    js:'javascript',
    cpp:'c++',
    swift:'swift by apple',
    rb:'ruby'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

