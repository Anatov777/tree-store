describe("TreeStore Test", function () {
    describe("ts.getAll()", function () {
        function makeTest() {
            let expected = JSON.stringify([
                { "id": 1, "parent": "root" },
                { "id": 2, "parent": 1, "type": "test" },
                { "id": 3, "parent": 1, "type": "test" },
                { "id": 4, "parent": 2, "type": "test" },
                { "id": 5, "parent": 2, "type": "test" },
                { "id": 6, "parent": 2, "type": "test" },
                { "id": 7, "parent": 4, "type": null },
                { "id": 8, "parent": 4, "type": null }
            ], null, ' ');
            it(`ts.getAll() === ${expected}`, function () {
                assert.equal(JSON.stringify(ts.getAll(), null, ' '), expected);
            });
        }
        makeTest();
    });

    describe("ts.getItem(7)", function () {
        function makeTest(itemId) {
            let expected = JSON.stringify(
                { "id": 7, "parent": 4, "type": null },
                null, ' ');
            it(`ts.getItem(${itemId}) === ${expected}`, function () {
                assert.equal(JSON.stringify(ts.getItem(itemId), null, ' '), expected);
            });
        }
        makeTest(7);
    });

    describe("ts.getChildren(4)", function () {
        function makeTest(itemId, expected) {
            let expectedFormatted = JSON.stringify(expected, null, ' ');
            it(`ts.getChildren(${itemId}) === ${expectedFormatted}`, function () {
                assert.equal(JSON.stringify(ts.getChildren(itemId), null, ' '), expectedFormatted);
            });
        }

        makeTest(4, [
            { "id": 7, "parent": 4, "type": null },
            { "id": 8, "parent": 4, "type": null }
        ]);
        makeTest(5, []);
        makeTest(2, [
            { "id": 4, "parent": 2, "type": "test" },
            { "id": 5, "parent": 2, "type": "test" },
            { "id": 6, "parent": 2, "type": "test" }
        ]);
    });

    describe("ts.getAllChildren(2)", function () {
        function makeTest(itemId) {
            let expected = JSON.stringify([
                { "id": 4, "parent": 2, "type": "test" },
                { "id": 5, "parent": 2, "type": "test" },
                { "id": 6, "parent": 2, "type": "test" },
                { "id": 7, "parent": 4, "type": null },
                { "id": 8, "parent": 4, "type": null }
            ],
                null, ' ');
            it(`ts.getAllChildren(${itemId}) === ${expected}`, function () {
                assert.equal(JSON.stringify(ts.getAllChildren(itemId), null, ' '), expected);
            });
        }
        makeTest(2);
    });

    describe("ts.getAllParents(7)", function () {
        function makeTest(itemId) {
            let expected = JSON.stringify([
                { "id": 4, "parent": 2, "type": "test" },
                { "id": 2, "parent": 1, "type": "test" },
                { "id": 1, "parent": "root" }
            ], null, ' ');
            it(`ts.getAllParents(${itemId}) === ${expected}`, function () {
                assert.equal(JSON.stringify(ts.getAllParents(itemId), null, ' '), expected);
            });
        }
        makeTest(7);
    });
});