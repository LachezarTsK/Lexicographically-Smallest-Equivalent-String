
/**
 * @param {string} firstInput
 * @param {string} secondInput
 * @param {string} base
 * @return {string}
 */
var smallestEquivalentString = function (firstInput, secondInput, base) {
    const ascii_small_case_a = 97;
    const ALPHABET_SIZE = 26;
    this.lexicographicallySmallestParent = Array.from(Array(ALPHABET_SIZE).keys());

    for (let i = 0; i < firstInput.length; ++i) {
        let parentFirst = findParent(firstInput.codePointAt(i) - ascii_small_case_a);
        let parentSecond = findParent(secondInput.codePointAt(i) - ascii_small_case_a);
        lexicographicallySmallestParent[Math.max(parentFirst, parentSecond)] = Math.min(parentFirst, parentSecond);
    }

    let smallestEquivalentStringForBase = new Array(base.length);
    for (let i = 0; i < base.length; ++i) {
        smallestEquivalentStringForBase[i] = String.fromCodePoint(findParent(base.codePointAt(i) - ascii_small_case_a) + ascii_small_case_a);
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
