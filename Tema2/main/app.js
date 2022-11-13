function addTokens(input, tokens){
    //Cerinta 1
    if(typeof input != 'string') 
        throw new Error("Invalid input")

    //Cerinta 2
    if(input.length < 6)
        throw new Error("Input should have at least 6 characters")
    
    //Cerinta 3
    for(var i=0; i< tokens.length; i++)
    {
        if(tokens[i].hasOwnProperty('tokenName') && typeof tokens[i].tokenName != 'string')
            throw new Error("Invalid array format")
    }

    //Cerinta 4
    if(input.includes('...')==false)
        return input

    //Cerinta 5
    if(input.includes('...')==true)
    {
        for(var i=0; i<tokens.length; i++)
        {
            input = input.replace('...', `\${${tokens[i].tokenName}}`)
        }
        return input
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;