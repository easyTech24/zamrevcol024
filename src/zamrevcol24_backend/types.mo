import Text "mo:base/Text";
import Time "mo:base/Time";

module {
     public type UserInform = {
         email: Text;
         phone: ?Text;
         password: Text;
         isLoggedIn: Bool;
         internetIdentity: ?Principal; 
    };

    
    public type ShareableUser = {
        name : Text;
        email : Text;
        phone : ?Text;
        isLoggedIn : Bool;
        internetIdentity : ?Principal;
    };
}