/**
 * @param {String} dna 
 * @returns Complementary DNA string
 */
export function DNAStrand(dna) {
    var comp = []
    for (c = 0; c < dna.length; c++) {
        switch (dna[c]) {
            case 'A':
                comp.push('T')
                break;
            case 'T':
                comp.push('A')
                break;
            case 'C':
                comp.push('G')
                break;
            case 'G':
                comp.push('C')
        }
    }
    return comp.join('')
}