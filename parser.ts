/*
Class for parsing M file
  *jsc 05/20 - Created
*/
class Parser {
    //top level expression parsing 
    function parse(exp:string){
        
    }

    //parse individual line, do appropriate syntax checking
    function parseLine(exp:string):string{
        let line = exp.split(" ");
        let command = line[0];
        let expression = line[1];
        //maybe throw error
        if(!CommandSet.IsValidCommand(command)){
            return command + "is not a supported command."
        }
    }
    
    //parses the command
    function parseCommand(exp:string):string{
        
    }
}
