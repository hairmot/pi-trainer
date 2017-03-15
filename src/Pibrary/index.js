var pi = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652';

class Pibrary  {
    static getNextDigit(input) {
        var index = input.replace('.','').length;
        return pi.substring(index, index + 1);
    }
    static isPi(input) {
       return pi.indexOf(input.replace('.','')) > -1  ? "Valid" : "Invalid - Restart";
    }
    static howManyDigits(input) {
        return input.replace('.','').length;
    }
}

export default Pibrary;