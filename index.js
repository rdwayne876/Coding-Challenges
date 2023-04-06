import { arrayDiff } from "./challenges/ArrayDiff.js";
import { addBinary } from "./challenges/BinaryAddition.js";
import { DNAStrand } from "./challenges/ComplementaryDNA.js";
import { digitalRoot } from "./challenges/DigitalRoot.js";
import { duplicateEncode } from "./challenges/DuplicateEncoder.js";
import { generateHashtag } from "./challenges/HashtagGenerator.js";
import { filter_list } from "./challenges/ListFiltering.js";
import { moveZeros } from "./challenges/MovingZerosToEnd.js";
import { solution } from "./challenges/Multiples3or5.js";
import { narcissistic } from "./challenges/NarcissisticNumbers.js";
import { cakes } from "./challenges/PeteTheBaker.js";
import { pigIt } from "./challenges/SimplePigLatin.js";
import { ipsBetween } from "./challenges/countIPAddresses.js";
import { decodeMorse } from "./challenges/morseCodeDecoder.js";
import { rgb } from "./challenges/rgbToHex.js";

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

filter_list([1, 2, 'aasf', '1', '123', 123])

/**
DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

addBinary(5, 9)

/**
DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/

DNAStrand("ATTGC")

/**
DESCRIPTION:
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
*/

narcissistic(153)

/**
DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

generateHashtag("Hello there thanks for trying my Kata")

/**
DESCRIPTION:
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
*/

cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })

/**
DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 */

duplicateEncode("Success")

/**
DESCRIPTION:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
 */

arrayDiff([1, 2, 2, 3], [2])

/**
DESCRIPTION:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 */

digitalRoot(942)

/**
DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 */

pigIt('Pig latin is cool')

/**
 * DESCRIPTION:
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
 */

ipsBetween("20.0.0.10", "20.0.1.0")

/**
 * DESCRIPTION:

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

 */

decodeMorse('.... . -.--   .--- ..- -.. .')

/**
 * DESCRIPTION:
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 */

rgb(148, 0, 211)

/**
 * DESCRIPTION:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */

moveZeros([false,1,0,1,2,0,1,3,"a"])