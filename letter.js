class Letter{
    constructor(char,beenGuessed){
        this.char = char;
        this.beenGuessed = beenGuessed;
    }

    toString(){
        if(this.beenGuessed===true){
            return char;
        }
        else{
            return "_";
        }
    }

    checkLetter(guess){
        this.guess = guess;
        if(this.guess === this.char){
            this.beenGuessed = true;
        }else{
            this.beenGuessed = false;
        }
    }
}

module.exports = Letter;