const Smurf = require("./smurf-model.js");
const db = require("../data/db-config.js");

describe("smurf model", function () {
    beforeEach(async () => {
        await db("smurfs").truncate();
    });

    describe("insert()", function () {
        it("should add the smurf to the database", async function () {
            // call insert, passing a hobbit object
            await Smurf.insert({ name: "Sam" });
            await Smurf.insert({ name: "Gaffer" });

            // check the database directly
            const smurfs = await db("smurfs");
            expect(smurfs).toHaveLength(2);
        });
    });
});

function getFakeSmurf() {
    return {
        name: "sam",
    };
}