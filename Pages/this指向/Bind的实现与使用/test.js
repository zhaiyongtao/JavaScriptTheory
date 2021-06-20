function foo () {
    console.log('foo',this)
}

function goo () {
    console.log('goo',this)
}


foo.call(goo)