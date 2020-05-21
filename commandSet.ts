/*
Singleton class that stores M commands that are supported
  *jsc 05/20 - Created
*/

class CommandSet {

    private validCommands: Set<string>();
    
    private constructor(){
        validCommands = new Set<string>();
        validCommands.add("WRITE");
        validCommands.add("READ");
        validCommands.add("QUIT");
        validCommands.add("FOR");
        validCommands.add("NEW");
        validCommands.add("DO");
        validCommands.add("SET");
        validCommands.add("MERGE");
    }

    public boolean IsValidCommand(command:string) {
        if(validCommands.has(command))
            return true;
        return false;
    }
}
