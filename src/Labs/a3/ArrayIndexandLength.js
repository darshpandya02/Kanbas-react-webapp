function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return(
        <div>
        <h3>Array Index and Length</h3>
        length1 = {numberArray1.length};<br />
        index1 = {numberArray1.indexOf(4)};
        </div>
    );
}
export default ArrayIndexAndLength;