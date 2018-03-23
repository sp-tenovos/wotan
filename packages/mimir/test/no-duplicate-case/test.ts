declare let foo: any;
declare let bar: any;
declare let baz: any;

switch (foo) {
    case bar:
    case baz:
    case 'bar':
    case 'baz':
    case undefined:
    case 0:
    case -0:
    case null:
    default:
}

switch (foo) {
    case bar:
    case baz:
    case bar:
    case 'what\'s up?':
    case "what's up?":
    case `what's up?`:
    case 'wazzup?':
    case 'wassabi?':
    case '1':
    case 1:
    case +1:
    case -+-1:
    case +-1:
    case -+1:
    case ~~'1.1':
    case true:
    case !false:
    case ++bar:
}

declare function get<T>(): T;

const enum E {
    Foo = 'foo',
    Bar = 'bar',
    Baz = 1,
}

enum E2 {
    Foo = 0,
    Bar = 1,
    Baz = 2,
}

switch (foo) {
    case get<number>():
    case get<number | never>():
    case 1:
    case get<1>():
    case +get<'1'>():
    case 'foo':
    case get<'foo'>():
    case get<'foo' | 1>():
    case true:
    case !true:
    case get<true>():
    case get<false>():
    case null:
    case undefined:
    case get<null>():
    case get<void>():
    case get<undefined>():
    case E.Foo:
    case E.Bar:
    case E.Baz:
    case get<E>():
    case get<E.Bar>():
    case E2.Foo:
    case E2.Bar:
    case E2.Baz:
}

function test<T, U extends 1, V extends '1', W extends U | V>(param1: T, param2: U, param3: V, param4: W) {
    switch (foo) {
        case param1:
        case param2:
        case param3:
        case +param3:
        case param4:
    }
}
