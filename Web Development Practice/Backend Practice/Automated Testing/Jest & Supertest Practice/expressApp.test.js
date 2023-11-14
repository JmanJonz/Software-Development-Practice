import app from "./expressApp.js";
import request from "supertest";

describe("POST /user", ()=>{
    
    // when we get the info needed
        describe("Got needed info", ()=>{
            // should validate the info hash passwords etc then enter into the database.
            // should in return we should get the new document object if successful...
            // should we would then return / send this object back to the user
            test("should get a 200 response from this with", async ()=>{
                const response = await request(app).get("/user").send({
                    username: "username",
                    password: "password"
                })
                expect(response.statusCode).toBe(200);
            })
            // should get a content type of json back
            // should then we know that the logic is working correctly in this function

        })

    // when we don't get needed info
        describe("Didn't get needed info", ()=>{
            // should respons with a status code of 400

        })
})