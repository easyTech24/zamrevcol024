import Types "types";
import TrieMap "mo:base/TrieMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import Array "mo:base/Array";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Principal "mo:base/Principal";

actor main{
   private let userMap = TrieMap.TrieMap<Text, Types.UserInform>(Text.equal, Text.hash);
  
  public shared func createUserAccount(email: Text, password: Text) : async Result.Result<Text, Text> {
        switch (userMap.get(email)) {
            case (null) {
                let newUser: Types.UserInform = {
                     email = email;
                     password = password;
                     phone = ?"0";
                     isLoggedIn = true;
                     internetIdentity = null;
                };
                userMap.put(email, newUser);
                #ok("User created successfully")
            };
            case (?_) {
                #err("User with this email already exists")
            };
        };
    };

    public shared func loginUser(email: Text, password: Text) : async Result.Result<Text, Text> {
        switch (userMap.get(email)) {
            case (null) {
                return #err("No user with this email exists");
            };
            case (?user) {
                if (user.password == password) {
                    // Update the user to be logged in
                    userMap.put(email, { user with isLoggedIn = true });
                    return #ok("Login successful");
                } else {
                    return #err("Incorrect password");
                };
            };
        };
    };
   
}
