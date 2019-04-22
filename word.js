require("./letter.js");

class Word{
    constructor(word){
        this.word = word;
        this.wordArray = [];
        this.correct=false;

        for(let i = 0; i<this.word.length;i++){
            this.wordArray[i]= new Letter(this.word.charAt(i),false);
        }
    }

    getString(){
        let returnString = "";

        for(let i = 0; i<this.word.length; i++){
            returnString += this.wordArray[i].toString();
        }

        return returnString;
    }

    checkLetter(guess){
        this.correct=false;

        for(let i = 0; i<this.word.length; i++){
            this.wordArray[i].checkLetter(guess);

            if(this.WordArray[i].beenGuessed === true){
                this.correct = true;
            }
        }
        return correct;
    }
}

module.exports = Word;