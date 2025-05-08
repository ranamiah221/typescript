"use strict";
{
    // 
    // function formatString(input:string, toUpper?: boolean):string{
    //   if(toUpper === false){
    //    return input.toLowerCase()
    //   }
    //   return input.toUpperCase()
    // }
    // const result1 = formatString('hello')
    // const result2 = formatString('hello', true)
    // const result3 = formatString('hello', false)
    // console.log(result1);
    // console.log(result2);
    // console.log(result3);
    // function filterByRating(items: { title: string; rating: number }[]):{ title: string; rating: number }[]{
    //    return items.filter(item=> item.rating >= 4)
    // }
    // const books = [
    //     { title: "Book A", rating: 4.5 },
    //     { title: "Book B", rating: 3.2 },
    //     { title: "Book C", rating: 5.0 }
    //   ];
    //   const result:{ title: string; rating: number }[] = (filterByRating(books));
    //   console.log(result)
    // function concatenateArrays<T>(...arrays:T[][]): T[]{
    //       return arrays.reduce((acc, current)=> acc.concat(current),[]);
    // }
    // const result1:string[] = concatenateArrays<string>(["a", "b"], ["c"])
    // const result2:number[]= concatenateArrays<number>([1, 2], [3, 4], [5]);
    // console.log(result1, result2);
    // class Vehicle{
    //     private _make: string;
    //     private _year: number;
    //     constructor(make:string, year:number) { 
    //         this._make = make;
    //         this._year = year;
    //     }
    //     getInfo():string{
    //         return `Make: ${this._make}, Year: ${this._year}`;
    //     }
    // }
    // class Car extends Vehicle{
    //     private _model: string;
    //     constructor(make: string, year: number, model: string){
    //         super(make, year)
    //         this._model = model;
    //     }
    //     getModel():string{
    //         return `Model: ${this._model}`;
    //     }
    // }
    // const myCar = new Car("Toyota", 2020,"Corolla");
    // console.log(myCar.getInfo());  // Output: "Make: Toyota, Year: 2020"
    // console.log(myCar.getModel()); // Output: "Model: Corolla"
    // function processValue(value: string | number): number{
    //     if(typeof(value) == "string"){
    //       return value.length
    //     }
    //     return value * 2
    // }
    // const newProcessValue:number=processValue(50)
    // console.log(newProcessValue);
    // interface Product {
    //     name: string;
    //     price: number;
    //   }
    // function getMostExpensiveProduct(products: Product[]): Product | null{
    //    if(products.length === 0){
    //     return null
    //    }
    //    console.log(products.length);
    //    let maxProduct=products[0]
    //    for(let i=0; i < products.length; i++){
    //     if(products[i].price > maxProduct.price){
    //         maxProduct = products[i]
    //     }
    //    }
    //    return maxProduct
    // }
    // const products = [
    //     { name: "Pen", price: 10 },
    //     { name: "Notebook", price: 25 },
    //     { name: "Bag", price: 50 }
    //   ];
    //  const expensiveProduct:Product|null = getMostExpensiveProduct(products); 
    //  console.log(expensiveProduct); 
    // Output: { name: "Bag", price: 50 }
    // enum Day {
    //     Monday,
    //     Tuesday,
    //     Wednesday,
    //     Thursday,
    //     Friday,
    //     Saturday,
    //     Sunday
    //   }
    //   function getDayType(day: Day): string{
    //     if(day === Day.Saturday || day === Day.Sunday ){
    //         return "Weekend"
    //     }
    //     return "Weekday"
    //   }
    //  const resultDay:string=getDayType(Day.Monday); 
    //  console.log(resultDay);
    async function squareAsync(n) {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
    squareAsync(4).then(console.log);
    // squareAsync(-3).catch(console.error); 
    // 
}
