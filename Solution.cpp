
#include <array>
#include <string>
#include <numeric>
#include <algorithm>
using namespace std;

class Solution {
    
    inline static const int ALPHABET_SIZE = 26;
    array<int, ALPHABET_SIZE> lexicographicallySmallestParent;

public:
    string smallestEquivalentString(const string& firstInput, const string& secondInput, const string& base) {
        iota(lexicographicallySmallestParent.begin(), lexicographicallySmallestParent.end(), 0);
        for (size_t i = 0; i < firstInput.length(); ++i) {
            int parentFirst = findParent(firstInput[i] - 'a');
            int parentSecond = findParent(secondInput[i] - 'a');
            lexicographicallySmallestParent[max(parentFirst, parentSecond)] = min(parentFirst, parentSecond);
        }

        string smallestEquivalentStringForBase;
        for (size_t i = 0; i < base.length(); ++i) {
            smallestEquivalentStringForBase.push_back(static_cast<char>('a' + findParent(base[i] - 'a')));
        }
        return smallestEquivalentStringForBase;
    }

private:
    int findParent(int index) {
        if (lexicographicallySmallestParent[index] != index) {
            lexicographicallySmallestParent[index] = findParent(lexicographicallySmallestParent[index]);
        }
        return lexicographicallySmallestParent[index];
    }
};
