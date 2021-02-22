/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"
*/

public class Banjo {
  public static String areYouPlayingBanjo(String name) {
    return name + (name.toLowerCase().startsWith("r") ? " plays" : " does not play") + " banjo";
  }
}

//test
Test.assertEquals(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
Test.assertEquals(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");
