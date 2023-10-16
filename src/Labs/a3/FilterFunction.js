
function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return (
        <div>
        <h3>Filter Function</h3>
        numbersGreaterThan2 = {JSON.stringify(numbersGreaterThan2)}<br />
        evenNumbers = {JSON.stringify(evenNumbers)}<br />
        oddNumbers = {JSON.stringify(oddNumbers)}<br />
        </div>


    );
}
export default FilterFunction;