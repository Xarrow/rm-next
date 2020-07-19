import React from 'react'

export interface Props {
    name: string
    age: number
}

function sayHi(name: string): string {
    return `Hi ${name}`
}


function Hello({name = "zhangsan", age = 12}: Props) {
    return (
        <>
            <div className={"Hello"}>
                Hello {name} {age}
            </div>
        </>
    )


}

export default Hello