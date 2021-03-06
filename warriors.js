/* Create a constructor function called `Warrior` that can create new warriors.
This function will take parameters `name`, and `gender`. 
`name` can be any string, `gender` can be `M` or `F`. 
It should create a warrior that has these properties:

    * `name`: the value that was passed to the constructor
    * `gender`: the value that was passed to the constructor
    * `level`: 1
    * `weapon`: wooden sword
    * `power`: a random number between 1 and 100
  * In addition to that, every object that gets created should have the 
  following methods:
  
    * `fight`: will output to the console: "<name> rushes to the 
        arena with <his/her> <weapon>"
    * `faceoff`: faceoff takes one argument called `opponent`. 
        Based on the `power` of each opponent, this method should output 
        to the console which player won the fight based on their power. 
        Be as creative as you like with the text of this method :)
    
    * Finally, create a bunch of warriors and make them fight together. */
    
    
function warrior(name, gender, level, weapon, power) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = (Math.floor((Math.random()) * 100));
    this.fight = function() {
        console.log(this.name + " rushed to the arena with his/her "  + this.weapon);
    };
    this.faceoff = function(opponent) {
        if(this.power > opponent.power) {
            console.log(this.name + " wins")}
            else {console.log(this.name + " loses");
        }
    }
}

var codrin = new warrior("codrin", "male");
var kevin = new warrior("kevin", "male");
var ziad = new warrior("ziad", "male");
var paule = new warrior("paule", "female");