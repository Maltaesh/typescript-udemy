//if you don't know the name of the key in the object, you can use Indexed Properties
interface ErrorContainer {
    [key: string]: string
}

const errorBag: ErrorContainer = {
    email: "marcin@marcin.pl",
    1: "123"

}

console.log(errorBag)

export {}