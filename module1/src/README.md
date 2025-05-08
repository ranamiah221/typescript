# 🧪 What are some differences between interfaces and types in TypeScript?

In TypeScript,type and interface can be used to describe the shape of an object or a function signature.But the syntax is differs.

## Type alias
type Person={
    name:string;
    age:number
}
## Interface 
interface Person{
    name:string;
    age:number
}
## Extend
### Interface
- interface can extend multiple interfaces.
- Supports implementing and extending union types.
- supports multiple merged declarations.
- Two interfaces with the same name get merged.
- Use **interface** for objects and class structures.
- Less flexible compared to type.

### Type
- type can extend via intersection(&).
- Does not support implementing or extending union type.
- Does not support multiple merged declarations.
- Two types with the same name raise an exception.
- Use **type** for unions, primitives, tuples, or complex combinations.
- More flexible compare to interface.


Though TypeScript's type and interface differ in certain features, they are similar in many ways, and one does not entirely replace the other. Developers can choose which one to use based on the specific requirements of their project.



# 🧪 Provide an example of using union and intersection types in TypeScript.

Here are examples illustaring union and intersection types in TypeScript.

## Union (|) Types 
A union type in TypeScript allows a variable to have one of several types. It is represented using the | operator. Example: type Animal = "Dog" | "Cat" | "Bird"; In this example, a variable of type Animal can have the value "Dog", "Cat", or "Bird".

{
//
type Animal = "Dog" | "Cat" | "Bird";
//
}
### Union (|) = "either-or"
1. Allows a value to be one of multiple types.

2. Used when a variable can be either type A or type B.

3. Common for handling multiple possible shapes or outcomes.

4. Syntax: type AorB = A | B;


## Intersection (&) Types
An intersection type combines multiple types into one. The & (ampersand) symbol combines the types. The resulting type has all the properties of the combined types.



{
//
interface Colorful {
  color: string;
}

interface Sizeable {
  size: number;
}

type ColorfulAndSizeable = Colorful & Sizeable;

//
}

In this example, ColorfulAndSizeable requires both color (from Colorful) and size (from Sizeable).
### Intersection (&) = "both-and"
1. Requires a value to satisfy all types it intersects.

2. Used when a variable must be both type A and type B.

3. All properties from all types are available immediately.

4. Syntax: type AandB = A & B;



## References
- Stack Overflow
- GeeksforGeeks
- Google and Open Ai

