import { addBinary } from "./challenges/BinaryAddition.js";
import { filter_list } from "./challenges/ListFiltering.js";
import { solution } from "./challenges/Multiples3or5.js";

/**
DESCRIPTION:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

solution(10);

/**
DESCRIPTION:
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

filter_list([1,2,'aasf','1','123',123])

/**
DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/
addBinary(5, 9)