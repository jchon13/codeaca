// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(arr)
{
    let holder = [arr[arr.length -1]];
    let sum = 0;
    for ( let i = 1; i < arr.length; i ++) //i starts at 1
    {
        let digitPush = arr[arr.length - 1 - i];
        let digitDouble = 0;
        if (i % 2 === 0) //if i is even
        {
            holder[i] = digitPush;
        }
        else //if i is odd i.e 1,3,5 therefore double
        {
            digitDouble = digitPush * 2;
            if (digitDouble > 9)
            {
                digitDouble = digitDouble - 9;
                holder[i] = digitDouble;
            }
            else
            {
                holder[i] = digitDouble;
            }
        }
    }
    for ( let k = 0; k < holder.length; k ++)
    {
        sum = sum + holder[k];
    }
    if (sum % 10 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

validateCred(valid3)


let valid = [];
let invalid =[];

function batchSort(arr)
{

    for (let p = 0; p < arr.length; p++)
    {
        if (validateCred(arr[p]) === true)
        {
            valid.push(arr[p]);
        }
        else
        {
            invalid.push(arr[p]);
        }
    }
    return invalid
}

batchSort(batch)

let invalidCompanies = [];

function idInvalidCardCompanies(arr)
{
    let k = 0
    for (let o  = 0 ; o <arr.length; o++)
    {
        if (arr[o][0] === 3)
        {
            invalidCompanies[k] = 'Amex'
            k = k+1;
        }
        else if (arr[o][0] === 4)
        {
            invalidCompanies[k] = 'Visa'
            k = k+1;
        }
        else if (arr[o][0] === 5)
        {
            invalidCompanies[k] = 'Mastercard'
            k = k+1;
        }
        else if (arr[o][0] === 6)
        {
            invalidCompanies[k] = 'Discover'
            k = k+1;
        }
    }
    
}


idInvalidCardCompanies(invalid)
console.log(invalidCompanies)





