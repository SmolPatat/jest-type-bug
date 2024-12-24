// In this file everything works as expected.
// We ignore the missing fields by casting the test object.

// NOTE the deduced types:
// input: VeryComplex1
// expected: number

type VeryComplex1 = {
    field1: number,
    manyOtherFields: unknown
};

it.each<{ input: VeryComplex1, expected: number }>([
    {
        // Missing irrelevant fields.
        input: {
            field1: 42
        } as VeryComplex1,
        expected: 42
    }
])('no issue', ({ input, expected }) => {
    expect(input).toHaveProperty('field1', expected)
})