import ballerina/http;
import ballerina/random;

service /exchange on new http:Listener(9090) {

    resource function get ugx() returns http:Ok|error {
         return {
            body: {
                currency: "UGX",
                rate: 3650 + (check random:createIntInRange(-50, 50))
            }
         };
    }

    resource function get mwk() returns http:Ok|error {
        return {
            body: {
                currency: "MWK",
                rate: 1000 + (check random:createIntInRange(-40, 40))
            }
        };
    }
}