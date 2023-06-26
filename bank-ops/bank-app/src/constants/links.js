//Setup Asgardeo Auth React SDK for PamodORG
// export const AsgardeoConfig = {
//     signInRedirectURL: "http://localhost:3000",
//     signOutRedirectURL: "http://localhost:3000",
//     clientID:"sfWONkMbVmfqIaKEASDPawhty9Ia",
//     baseUrl: "https://api.asgardeo.io/t/pamodorg",
//     scope: ["openid", "groups", "profile"]
// };

export const AsgardeoConfig = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    clientID:"OBx_6b2ADFiL07QGlR99Qzvw1U4a",
    baseUrl: "https://api.asgardeo.io/t/viggnah",
    scope: ["openid", "email", "groups", "profile", "urn:viggnah:loyaltyserviceloyaltyapi5:add_points", "urn:viggnah:loyaltyserviceloyaltyapi5:view_all_points"]
};

//Loyalty Service Host and Port for PamodORG
// export const Hosts = {
//    Loyalty: "https://c28959d1-6d47-494e-9314-92f88143b490-dev.e1-eu-north-azure.choreoapis.dev/drrd/loyaltyapi/1.0.0"
// };

export const Hosts = {
    Loyalty: "https://e767ed37-eb8c-43d6-aa4f-0a1bb02aa687-dev.e1-eu-north-azure.choreoapis.dev/nqbp/loyaltyservice/loyalty-api-5c6/1.0.0"
 };
