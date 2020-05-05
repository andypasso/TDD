const cipher = {
    encrypt: (plaintext, key)=>{
        let ciphertext = "";
        let re = /[a-z]/;
        for(let i=0; i<plaintext.length; i++){ 
        if(re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + key)%26 + 97); 
        else ciphertext += plaintext.charAt(i); 
        }
        return ciphertext
    },
    decrypt: (ciphertext, key)=>{
        let plaintext2 = "";    
        let re = /[a-z]/;
        for(let i=0; i<ciphertext.length; i++){ 
            if(re.test(ciphertext.charAt(i))) plaintext2 += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - key)%26 + 97); 
            else plaintext2 += ciphertext.charAt(i); 
        }
        return plaintext2 
    }
}

module.exports = cipher

