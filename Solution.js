
/**
 * @param {string} firstInput
 * @param {string} secondInput
 * @param {string} base
 * @return {string}
 */
var smallestEquivalentString = function (firstInput, secondInput, base) {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    this.lexicographicallySmallestParent = Array.from(Array(ALPHABET_SIZE).keys());

    for (let i = 0; i < firstInput.length; ++i) {
        let parentFirst = findParent(firstInput.codePointAt(i) - ASCII_SMALL_CASE_A);
        let parentSecond = findParent(secondInput.codePointAt(i) - ASCII_SMALL_CASE_A);
        lexicographicallySmallestParent[Math.max(parentFirst, parentSecond)] = Math.min(parentFirst, parentSecond);
    }

    let smallestEquivalentStringForBase = new Array(base.length);
    for (let i = 0; i < base.length; ++i) {
        smallestEquivalentStringForBase[i] = String.fromCodePoint(findParent(base.codePointAt(i) - ASCII_SMALL_CASE_A) + ASCII_SMALL_CASE_A);
    }
    return smallestEquivalentStringForBase.join('');
};


/**
 * @param {number} index
 * @return {number}
 */
function  findParent(index) {
    if (this.lexicographicallySmallestParent[index] !== index) {
        this.lexicographicallySmallestParent[index] = findParent(this.lexicographicallySmallestParent[index]);
    }
    return this.lexicographicallySmallestParent[index];
}
