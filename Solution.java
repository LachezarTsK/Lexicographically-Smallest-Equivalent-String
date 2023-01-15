
import java.util.stream.IntStream;

public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private final int[] lexicographicallySmallestParent = IntStream.range(0, ALPHABET_SIZE).toArray();

    public String smallestEquivalentString(String firstInput, String secondInput, String base) {
        for (int i = 0; i < firstInput.length(); ++i) {
            int parentFirst = findParent(firstInput.charAt(i) - 'a');
            int parentSecond = findParent(secondInput.charAt(i) - 'a');
            lexicographicallySmallestParent[Math.max(parentFirst, parentSecond)] = Math.min(parentFirst, parentSecond);
        }

        StringBuilder smallestEquivalentStringForBase = new StringBuilder();
        for (int i = 0; i < base.length(); ++i) {
            smallestEquivalentStringForBase.append((char) ('a' + lexicographicallySmallestParent[findParent(base.charAt(i) - 'a')]));
        }
        return smallestEquivalentStringForBase.toString();
    }

    private int findParent(int index) {
        if (lexicographicallySmallestParent[index] != index) {
            lexicographicallySmallestParent[index] = findParent(lexicographicallySmallestParent[index]);
        }
        return lexicographicallySmallestParent[index];
    }
}
