
/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?
*/

class Solution {
public:
    void sortColors(int A[], int n) {
        // Start typing your C/C++ solution below
        // DO NOT write int main() function
         
        // using two counter
        int red   = 0; // from the begining
        int white = 0;
        int blue  = n- 1; // from the end
        
        for( ; white <= blue ;  ){ // when white position at prior blur
            if( A[white] == 1 )
                white ++;
            else if( A[white] == 0 )
                swap( A[red++],  A[white++]);
            else if( A[white] == 2 )
                swap( A[blue--], A[white]  );
            else
                return ; // invalid
        }
    }
};
