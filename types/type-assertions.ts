let message;
message = "abc";

let endsWithBool = (<string>message).endsWith("c");
let alternativeWay = (message as string).endsWith("d");
// this will restructure the let var to string this is just to ge thte intellisense
