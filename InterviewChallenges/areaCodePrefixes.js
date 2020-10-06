// Given two arrays of strings, one containing the prefixes (area code) and one with a long string of numbers (phone numbers), return the longest prefix corresponding to all phone numbers.

// Input: Area Code: ["213", "21358", "1234", "12"]
// Phone Numbers: ["21349049", "1204539492", "123490485904"]
// Output: ['213', '12', '1234']
// Solution: Use Trie to store all the prefix strings and then search for the phone numbers in the prefix tree (This solution passed all test cases)
// Note: Keep in mind that Phone Numbers array can be very long

// The second question consisted of three parts:

// Run time of the first question
// Is there a better solution?
// When will you use naive solution and when will you use optimized solution?
// Input is a string of characters that represents a text message. You need to segment this message into chunks of messages each of length 160 characters and add suffix "(1/5)" (representing pagination) at the end of each segmented message (Length of "(1/5)" is included in 160 length limit).

// Input: "njdksjfn jdfnds kjfdklsjf jsdofjsd f jdslkjfgdslkngdslkjg fljksdjflsfdsjfdslkfjdslkfmdsklmfgn ljsdglkdsfg d lkjgdslkgjdsljgdslkjgdsfjngds lkjsdlkgjdsgkldsjgsdlkg lkjdslkgjdslkgjdslgmnds glkjgdslkjgdslkjfgodsjfds g,mdsgkjdsngdlsknfgldsjfglkdsjfglkdsjglkdsjglkdsgjdsklgjdslk lkgjdslkgfjdslkgjdslkgjdsljfgdslkgjmdslkg kljghjdslkjgdslkjfg"

// Output: ['njdksjfn jdfnds kjfdklsjf jsdofjsd f jdslkjfgdslkngdslkjg fljksdjflsfdsjfdslkfjdslkfmdsklmfgn ljsdglkdsfg d lkjgdslkgjdsljgdslkjgdsfjngds (1/3)', 'lkjsdlkgjdsgkldsjgsdlkg lkjdslkgjdslkgjdslgmnds glkjgdslkjgdslkjfgodsjfds g,mdsgkjdsngdlsknfgldsjfglkdsjfglkdsjglkdsjglkdsgjdsklgjdslk (2/3)', 'lkgjdslkgfjdslkgjdslkgjdsljfgdslkgjmdslkg kljghjdslkjgdslkjfg(3/3)']

// Bonus Points: Pass the large test cases of question 3 without using split() function.