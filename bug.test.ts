// In this file we get a weird TypeScript error that does not affect the runtime.
// We ignore the missing fields by using @ts-expect-error as we should.
// However, Jest ignores the explicit type parameter to `it.each` and makes the wrong type deduction.

// NOTE the deduced types:
// input: any (due to errors)
// expected: any (due to errors)

type VeryComplex2 = {
    field1: number,
    manyOtherFields: unknown
};

it.each<{ input: VeryComplex2, expected: number }>([
    {
        // @ts-expect-error -- Missing irrelevant fields.
        input: {
            field1: 42
        },
        expected: 42
    }
])('type issue', ({ input, expected }) => {
    expect(input).toHaveProperty('field1', expected)
})