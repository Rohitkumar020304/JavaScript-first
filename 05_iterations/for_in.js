const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmign = ["js", "rb", "py", "cpp"]
for (const key in programmign) {
    // console.log(programmign[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('fr',"France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
    //map is not iteratable.
}